"""
Install the Google AI Python SDK

$ pip install google-generativeai

See the getting started guide for more information:
https://ai.google.dev/gemini-api/docs/get-started/python
"""

import os
import time
from config import API_TOKEN
import google.generativeai as genai
from model_config import GEMINI_MODEL_NAME, GEMINI_GENERATION_CONFIG, GEMINI_SAFETY_SETTINGS

genai.configure(api_key=API_TOKEN)

def upload_to_gemini(path, mime_type=None):
  """Uploads the given file to Gemini.

  Args:
    path (str): The file path to upload.
    mime_type (str, optional): The MIME type of the file.

  Returns:
    File: The uploaded file object.
  """
  file = genai.upload_file(path, mime_type=mime_type, display_name=path)
  return file

def wait_for_files_active(*files):
  """Waits for the given files to be active.

  Args:
    files (list): List of file objects to wait for.

  Raises:
    Exception: If any file fails to process.
  """
  for name in (file.name for file in files):
    file = genai.get_file(name)
    while file.state.name == "PROCESSING":
      time.sleep(10)
      file = genai.get_file(name)
    if file.state.name != "ACTIVE":
      raise Exception(f"File {file.name} failed to process")
  
  for file in files:
    os.remove(file.display_name)

def get_llm_response_gemini_multimodal(file_name, caption, mime_type):
  """Gets a response from the Gemini multimodal model.

  Args:
    file_name (str): The name of the file to upload.
    caption (str): The caption to include in the prompt.
    mime_type (str): The MIME type of the file.

  Returns:
    str: The response text from the model.
  """
  video_drive0 = upload_to_gemini(file_name, mime_type=mime_type)

  wait_for_files_active(video_drive0)

  model = genai.GenerativeModel(
    model_name=GEMINI_MODEL_NAME,
    safety_settings=GEMINI_SAFETY_SETTINGS,
    generation_config=GEMINI_GENERATION_CONFIG,
  )

  chat_session = model.start_chat(
    history=[
      {
        "role": "user",
        "parts": [
          "explain and analyze this for me. don't be super verbose with your responses." + caption,
        ],
      },
      {
        "role": "user",
        "parts": [
          video_drive0,
        ],
      },
    ]
  )

  try:
    response = chat_session.send_message("explain and analyze this for me. don't be super verbose with your responses." + caption)
  except Exception as e:
    return "An error occurred while processing the request."
  return response.text