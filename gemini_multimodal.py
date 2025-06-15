"""
Gemini multimodal helper – single-file, modular style.
Install Google AI Python SDK first:
    pip install google-generativeai
"""

import os
import time
import google.generativeai as genai
from config import API_TOKEN
from model_config import (
    GEMINI_MODEL_NAME,
    GEMINI_GENERATION_CONFIG,
    GEMINI_SAFETY_SETTINGS,
)

# ──────────────────────────────────────────────────────────────────────────────
# Configuration helpers
# ──────────────────────────────────────────────────────────────────────────────
def _configure_gemini() -> None:
    """Initialises the generative-ai client with your API key."""
    genai.configure(api_key=API_TOKEN)


def _get_model() -> genai.GenerativeModel:
    """Returns a ready-to-chat Gemini model instance."""
    return genai.GenerativeModel(
        model_name=GEMINI_MODEL_NAME,
        safety_settings=GEMINI_SAFETY_SETTINGS,
        generation_config=GEMINI_GENERATION_CONFIG,
    )


# ──────────────────────────────────────────────────────────────────────────────
# File-handling utilities
# ──────────────────────────────────────────────────────────────────────────────
def _upload_to_gemini(path: str, mime_type: str | None = None):
    """Uploads a local file and returns the Gemini File object."""
    return genai.upload_file(path, mime_type=mime_type, display_name=path)


def _wait_for_files_active(*files) -> None:
    """
    Blocks until every supplied Gemini File reaches ACTIVE state,
    raises if any end up in a failed state and finally deletes the local copies.
    """
    for name in (f.name for f in files):
        file_obj = genai.get_file(name)
        while file_obj.state.name == "PROCESSING":
            time.sleep(10)
            file_obj = genai.get_file(name)
        if file_obj.state.name != "ACTIVE":
            raise RuntimeError(f"File {file_obj.name} failed to process")

    for file_obj in files:
        try:
            os.remove(file_obj.display_name)
        except FileNotFoundError:
            pass  # If the file was already removed or never existed locally


# ──────────────────────────────────────────────────────────────────────────────
# Chat orchestration
# ──────────────────────────────────────────────────────────────────────────────
def get_llm_response_gemini_multimodal(
    file_path: str,
    caption: str = "",
    mime_type: str | None = None,
) -> str:
    """
    Sends a multimodal prompt to Gemini using the given file and caption,
    returning the model’s text reply or a graceful error string.
    """
    _configure_gemini()

    try:
        gemini_file = _upload_to_gemini(file_path, mime_type)
        _wait_for_files_active(gemini_file)

        model = _get_model()
        prompt = f"explain and analyze this for me. don't be super verbose with your responses.{caption}"
        chat = model.start_chat(
            history=[
                {"role": "user", "parts": [prompt]},
                {"role": "user", "parts": [gemini_file]},
            ]
        )
        response = chat.send_message(prompt)
        return response.text
    except Exception as exc:  # noqa: BLE001
        return f"An error occurred while processing the request: {exc}"


# ──────────────────────────────────────────────────────────────────────────────
# Example usage
# ──────────────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    FILE_PATH = "your_file_here.mp4"
    MIME_TYPE = "video/mp4"
    CAPTION = " – here's the context you need."

    print(get_llm_response_gemini_multimodal(FILE_PATH, CAPTION, MIME_TYPE))
