import os
import json
import requests
from urllib.parse import quote_plus
from config import TG_TOKEN, TG_BOT_USERNAME
from models import (
    get_llm_response,
    get_llm_response_gpt4o_vision,
    get_llm_response_gpt4o_questions,
)
from gemini_multimodal import get_llm_response_gemini_multimodal
import telegramify_markdown
from telegramify_markdown import customize
from model_config import SYSTEM_PROMPT, QUESTIONS_PROMPT

# Customize markdown symbols
customize.markdown_symbol.head_level_1 = "📌"
customize.markdown_symbol.link = "🔗"
customize.strict_markdown = True

BASE_URL = f'https://api.telegram.org/bot{TG_TOKEN}/'
IMG_PATH = f"https://api.telegram.org/file/bot{TG_TOKEN}/"
BOT_USERNAME = TG_BOT_USERNAME
message_dct = dict()

def send_message(chat_id, text, reply_markup=None, fd=None):
    """
    Send a message to a Telegram chat.

    Args:
        chat_id (int): The ID of the chat to send the message to.
        text (str): The text of the message to send.
        reply_markup (dict, optional): The reply markup for the message.
        fd (file, optional): The file to send as a document.

    Returns:
        dict: The response from the Telegram API.
    """
    try:
        url = BASE_URL + 'sendMessage'
        text = telegramify_markdown.markdownify(text)
        params = {"chat_id": chat_id, "text": text, "parse_mode": "MarkdownV2"}
        if reply_markup:
            params["reply_markup"] = reply_markup
        response = requests.post(url, params=params)
        response.raise_for_status()

        if fd:
            url = BASE_URL + 'sendDocument'
            files = {'document': fd}
            response = requests.post(url, data={'chat_id': chat_id}, files=files)
            response.raise_for_status()
            os.remove(fd.name)
            fd.close()

        return response.json()
    except requests.RequestException as e:
        print(f"Error sending message: {e}")
        return None

def process_message(update):
    """
    Process an incoming Telegram update.

    Args:
        update (dict): The update to process.

    Returns:
        None
    """
    try:
        reply_markup = {}
        chat_id = None
        if 'message' in update:
            chat_id = update['message']['chat']['id']
        elif "callback_query" in update:
            chat_id = update['callback_query']['message']['chat']['id']

        message = update.get("message", {})
        user_message = message.get("text", "") + message.get("caption", "")
        is_mentioned = False

        if "callback_query" in update:
            query = update['callback_query']
            question_index = int(query['data'].split('_')[1])
            user_message = query['message']['reply_markup']['inline_keyboard'][question_index][0]['text']
            if query['message']['chat']['type'] != 'private':
                is_mentioned = True

        if "entities" in message or "caption_entities" in message:
            entities = message.get("entities", []) + message.get("caption_entities", [])
            for entity in entities:
                if entity.get("type") == "mention":
                    start = entity["offset"]
                    end = start + entity["length"]
                    mentioned_username = user_message[start:end]
                    if mentioned_username[1:] == BOT_USERNAME:
                        is_mentioned = True
                        user_message = user_message[:start].strip() + " " + user_message[end:].strip()
                        break

        if "document" in message or "video" in message or "audio" in message or "photo" in message:
            content = message.get('document') or message.get('video') or message.get('audio') or message.get('photo')[-1]
            if is_mentioned or chat_id > 0:
                file_id = content['file_id']
                download_url = f"{BASE_URL}getFile?file_id={file_id}"
                file_info = requests.get(download_url).json().get('result')

                if file_info:
                    file_path = file_info['file_path']
                    file_url = f"{IMG_PATH}{file_path}"
                    file_name = content.get('file_name', 'tmpfile')
                    caption = message.get('caption', 'No caption provided')
                    mime_type = content.get('mime_type', 'image/jpeg')
                    response = requests.get(file_url)
                else:
                    send_message(chat_id, 'Paise nahiet re evdhe.')
                    return

                with open(file_name, 'wb') as file:
                    file.write(response.content)

                if 'video' in mime_type or 'text' in mime_type or 'audio' in mime_type:
                    response_text = get_llm_response_gemini_multimodal(file_name, caption, mime_type)
                    send_message(chat_id, response_text)
                elif 'pdf' in mime_type:
                    send_message(chat_id, 'PDF support coming soon.')
                elif 'image' in mime_type:
                    response_text = get_llm_response_gpt4o_vision(response.content, caption)
                    send_message(chat_id, response_text)

        elif user_message:
            if chat_id not in message_dct or len(message_dct.get(chat_id)) > 30:
                message_dct[chat_id] = [
                    {
                        "role": "system",
                        "content": "Be precise and concise. Respond only in markdown format to whatever the user says."
                    },
                    {
                        "role": "user",
                        "content": user_message,
                    }
                ]
            else:
                message_dct[chat_id].append({"role": "user", "content": user_message})

            fd = None
            if is_mentioned or chat_id > 0:
                response = get_llm_response_gpt4o_questions(message_dct[chat_id])
                if response:
                    keyboard = []
                    for i, question in enumerate(response):
                        keyboard.append([{'text': question, 'callback_data': f'q_{i}'}])
                    reply_markup = {'inline_keyboard': keyboard}

                response_text, is_image, fd = get_llm_response(message_dct[chat_id])

                if response_text and not is_image:
                    message_dct[chat_id].append({"role": "assistant", "content": response_text})
                    send_message(chat_id, response_text, fd=fd, reply_markup=json.dumps(reply_markup))

                if response_text and is_image:
                    send_photo_url = BASE_URL + 'sendPhoto'
                    data = {'chat_id': chat_id, 'photo': response_text}
                    response = requests.post(send_photo_url, data=data)
                    response.raise_for_status()
    except Exception as e:
        print(f"Error processing message: {e}")

def get_updates(offset=None):
    """
    Get updates from the Telegram API.

    Args:
        offset (int, optional): The offset to use for getting updates.

    Returns:
        list: A list of updates from the Telegram API.
    """
    try:
        url = BASE_URL + 'getUpdates'
        params = {'offset': offset, 'timeout': 100}
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json().get('result', [])
    except requests.RequestException as e:
        print(f"Error getting updates: {e}")
        return []

def main():
    """
    Main function to run the bot.

    Args:
        None

    Returns:
        None
    """
    offset = None
    print("Started Running....")
    checking_offset = True
    while True:
        updates = get_updates(offset)
        if updates:
            for update in updates:
                if not checking_offset:
                    process_message(update)
                offset = update['update_id'] + 1
        checking_offset = False

if __name__ == '__main__':
    main()
