import base64
import copy
import json
import os
import re
import requests
import time
from config import (
    API_TOKEN, SYSTEM_PROMPT, OPENAI_API_KEY, 
    OPENAI_ASSISTANT_ID, PPLX_API_KEY, OPENAI_API_KEY_VISION, FLUX_API_KEY
)
from openai import OpenAI
from functions import get_random_meme
from model_config import (
    GPT4O_MODEL_NAME, SYSTEM_PROMPT, QUESTIONS_PROMPT, 
    PPLX_MODEL_NAME, PPLX_SYSTEM_PROMPT, O1_MODEL_NAME, 
    FLUX_API_URL, FLUX_IMAGE_SIZE, VISION_TEMPERATURE, 
    PRO_TEMPERATURE, PPLX_API_URL, GPT4O_VISION_API_URL
)

system_text = SYSTEM_PROMPT
questions_prompt = QUESTIONS_PROMPT
assistant_id = OPENAI_ASSISTANT_ID

with open("tools.json") as f:
    tools = json.load(f)

client = OpenAI(api_key=OPENAI_API_KEY)

def add_markdown_links(text, citation_links):
    citation_pattern = r'\[(\d+)\]'
    citations = re.findall(citation_pattern, text)
    for citation in citations:
        citation_num = int(citation)
        if citation_num <= len(citation_links):
            url = citation_links[citation_num - 1]
            markdown_link = f'[[{citation}]]({url})'
            text = re.sub(r'\[' + citation + r'\]', markdown_link, text)
    return text

def get_llm_response_pplx(prompt):
    url = PPLX_API_URL
    payload = {
        "model": PPLX_MODEL_NAME,
        "messages": [
            {"role": "system", "content": PPLX_SYSTEM_PROMPT},
            {"role": "user", "content": system_text + prompt}
        ],
        "return_citations": True,
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": f"Bearer {PPLX_API_KEY}"
    }
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 200:
        response_json = response.json()
        if "choices" in response_json:
            bot_response = response_json['choices'][0]['message']['content']
            formatted_citations = ""
            if "citations" in response_json:
                citations = response_json['citations']
                bot_response = add_markdown_links(bot_response, citations)
                formatted_citations = ','.join(f'[{i+1}]({citation.strip()})' for i, citation in enumerate(citations))
            return bot_response + "\n\nReferences: " + formatted_citations if formatted_citations else bot_response
    return "Error in processing the prompt."

def get_llm_response_gpt4o_vision(img, prompt):
    base64_img = base64.b64encode(img).decode('utf-8')
    url = GPT4O_VISION_API_URL
    payload = {
        "model": GPT4O_MODEL_NAME,
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{base64_img}"}}
                ]
            }
        ],
        "max_tokens": 300,
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": f"Bearer {OPENAI_API_KEY_VISION}"
    }
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        response_json = response.json()
        if "choices" in response_json:
            return response_json['choices'][0]['message']['content']
    return "Error in processing the image."

def get_llm_response_gpto1(prompt):
    response = client.chat.completions.create(
        model=O1_MODEL_NAME,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content

def get_llm_response_flux(prompt):
    headers = {
        'Authorization': f'Key {FLUX_API_KEY}',
        'Content-Type': 'application/json',
    }
    data = {
        'prompt': prompt,
        'num_images': 1,
        'image_size': FLUX_IMAGE_SIZE
    }
    response = requests.post(FLUX_API_URL, headers=headers, json=data)
    if response.status_code == 200:
        response_json = response.json()
        if 'images' in response_json:
            return response_json['images'][0]['url']
    return None

def get_llm_response_gpt4o_agent(prompt):
    thread = client.beta.threads.create()
    thread_id = thread.id
    client.beta.threads.messages.create(thread_id=thread_id, role="user", content=prompt)
    run = client.beta.threads.runs.create(thread_id=thread_id, assistant_id=assistant_id)
    run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run.id)
    while run.status != 'completed':
        run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run.id)
        if run.status in ["requires_action", "failed", "cancelling", "expired"]:
            return "Error!"
        time.sleep(0.3)
    messages = client.beta.threads.messages.list(thread_id=thread_id)
    if messages.data[0].file_ids:
        file_id = messages.data[0].file_ids[0]
        file_content = client.files.content(file_id).read()
        file_name = os.path.basename(messages.data[0].content[0].text.annotations[0].text)
        with open(file_name, "wb") as f:
            f.write(file_content)
        f = open(file_name, "rb")
        return messages.data[0].content[0].text.value, f
    return messages.data[0].content[0].text.value, None

def get_llm_response(messages, is_image=False):
    response = client.chat.completions.create(
        model=GPT4O_MODEL_NAME,
        messages=messages,
        tools=tools,
        tool_choice="auto",
    )
    response_message = response.choices[0].message
    tool_calls = response_message.tool_calls
    if tool_calls:
        available_functions = {
            "get_llm_response_pplx": get_llm_response_pplx,
            "get_llm_response_dalle": get_llm_response_flux,
            "get_llm_response_gpt4o_agent": get_llm_response_gpt4o_agent,
            "get_random_meme": get_random_meme,
            "get_llm_response_gpto1": get_llm_response_gpto1,
        }
        for tool_call in tool_calls:
            function_name = tool_call.function.name
            function_to_call = available_functions[function_name]
            function_args = json.loads(tool_call.function.arguments)
            function_response = function_to_call(prompt=function_args.get("prompt"))
            if function_name == "get_llm_response_dalle":
                return function_response, True, None
            if function_name == "get_llm_response_pplx":
                return function_response, False, None
            if function_name == "get_llm_response_gpt4o_agent":
                return function_response[0], False, function_response[1]
            if function_name == "get_random_meme":
                return function_response, True, None
            if function_name == "get_llm_response_gpto1":
                return function_response, False, None
        second_response = client.chat.completions.create(
            model=GPT4O_MODEL_NAME,
            messages=messages,
        )
        return second_response.choices[0].message.content, False, None
    return response_message.content, False, None

def get_llm_response_gpt4o_questions(messages):
    new_messages = copy.deepcopy(messages)
    for message in new_messages:
        if message["role"] == "system":
            message["content"] = questions_prompt
            break
    response = client.chat.completions.create(
        model=GPT4O_MODEL_NAME,
        messages=new_messages,
    )
    questions = response.choices[0].message.content.split(",")
    if len(questions) == 2 and "None" not in questions:
        return questions
    return None


