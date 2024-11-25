# Gemini Model Configuration
GEMINI_MODEL_NAME = "gemini-1.5-flash-exp-0827"
GEMINI_GENERATION_CONFIG = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}
GEMINI_SAFETY_SETTINGS = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_ONLY_HIGH"},
]

# GPT-4O Model Configuration
GPT4O_MODEL_NAME = "gpt-4o-2024-08-06"
SYSTEM_PROMPT = '''
Do not be overly verbose. Try to be precise and concise. Generate the output in Markdown only for the prompt that will come after this: 
Prompt: \n
'''
QUESTIONS_PROMPT = '''
Understand the question and answer messages given to you. Specifically understand 
the question asked to you by the user. Based on this question and the answer provided by GPT (you), produce two follow-up 
questions that one could ask to you if you think they could. Each question should not be more 
than six words. The question should be from the perspective of the user. 
Usually restrict it to questions that are more definitive, specific and not casual. Do not suggest any questions if the
user posts any reactions, personal messages, greetings, instructions, or assertions etc. 
Make the questions third person.

Make sure you read the responses and the questions correctly to ensure that you don't ask questions that are already present
in the responses. 

Give me the result as just the two questions separated by a comma, that's 
it. No other content should be present in your response. If you think there are no follow-up 
questions that could be asked just give me None,None as response. 
'''

# PPLX Model Configuration
PPLX_MODEL_NAME = "llama-3.1-sonar-huge-128k-online"
PPLX_SYSTEM_PROMPT = "Be precise and concise. Don't be overly verbose/elaborate with your answers."

# O1 Model Configuration
O1_MODEL_NAME = "o1-preview"

# API URLs and Settings
FLUX_API_URL = "https://fal.run/fal-ai/flux/dev"
FLUX_IMAGE_SIZE = "square_hd"
VISION_TEMPERATURE = 0.4
PRO_TEMPERATURE = 0.8

PPLX_API_URL = "https://api.perplexity.ai/chat/completions"
GPT4O_VISION_API_URL = "https://api.openai.com/v1/chat/completions"