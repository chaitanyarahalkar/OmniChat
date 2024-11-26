# OmniChat: Your All-in-One AI Chat Companion

Welcome to the future of conversation. OmniChat is not just another chatbot; it's a revolutionary AI-powered assistant that brings together the brilliance of multiple advanced AI models, including GPT-4o, Google Gemini, DALL-E 3, and Perplexity.ai, all under one roof. Imagine the ultimate Swiss Army knife for AI interactions—an intelligent companion that is always ready to engage, assist, create, and inspire. Whether you need quick answers, a creative partner, or an all-knowing guide, OmniChat is here to redefine how you interact with artificial intelligence, right in your Telegram chats as a versatile Telegram bot.

## Why Choose OmniChat?

**OmniChat** isn’t just about text-based conversation; it’s about giving you an entire suite of AI-driven abilities. Need an insightful discussion? A compelling story? A striking visual? OmniChat is built to be versatile—its combined intelligence helps you get everything done, from serious research to light-hearted fun, all within the convenience of your Telegram bot interface. Let’s explore what makes OmniChat truly groundbreaking.

## Features That Make OmniChat Unstoppable:

### 🎭 Multimodal Mastery

Have you ever wished your chatbot could understand more than just words? With OmniChat, you can seamlessly integrate images, videos, and audio into your conversations. It's like talking to a friend who can not only answer your questions but also watch a video with you, admire a picture, and even listen to an audio clip—and then help you interpret them in an intelligent way.

- **Upload an image** and ask OmniChat to describe it, point out interesting details, or even spin a creative story inspired by it.
- **Share a video** and get a crisp summary of its key points. Let OmniChat do the watching while you focus on what matters most to you.
- **Send an audio clip** and get a transcription or insightful commentary—from podcasts to personal voice notes.

### 🛠 Intelligent Agents at Your Fingertips

OmniChat is not just for conversation—it’s for action. By leveraging the agentic capabilities of GPT-4o, OmniChat can perform structured tasks and automate workflows, turning it into your very own digital assistant.

- Want a **CSV file generated from raw data**? Done.
- Need to **execute specific code** or write a quick script? Easy.

Simply tell OmniChat what you need, and let its agents handle the rest—fast, efficient, and reliable.

### 🚀 Real-Time Knowledge & Web Browsing with Perplexity.ai

Ever felt like your assistant just isn’t up to date? OmniChat’s real-time browsing capabilities, powered by Perplexity.ai, ensure you’re always ahead of the curve. Get access to the latest news, updates, and insights without leaving the chat window.

- **Ask about current events** and receive accurate, up-to-the-minute information.
- **Get quick answers** to obscure questions that require up-to-date browsing.

You don’t need to switch between tabs or devices—everything happens right within your Telegram bot chat.

### 🖼 Visual Creativity Unleashed with DALL-E 3

Words can paint pictures, but why stop there? With DALL-E 3 integrated into OmniChat, you can bring your imagination to life.

- Just **describe the scene** you’re picturing—"A futuristic city floating above the clouds at sunset"—and see it transformed into a stunning, one-of-a-kind image.
- **Visualize your ideas** for social posts, mood boards, or even presentations—all generated effortlessly.

This isn’t just AI-assisted drawing—it’s a gateway to visual storytelling at your fingertips.

### 🤣 Meme Magic: Inject Humor into Your Conversations

Need a break? OmniChat can fetch memes from popular subreddits, giving your conversations an instant dose of humor. Say goodbye to mundane chats and hello to spontaneous laughter.

- Just type **"meme"** and get a fresh piece of comedy, perfectly tailored for a moment of joy.
- From reaction images to classic memes, OmniChat has a sense of humor that’s sure to brighten your day.

### 🤖 Adaptive Intelligence: Always the Right Tool for the Job

OmniChat intelligently selects the most appropriate AI model for each specific request. Whether you’re looking for an insightful conversation, a creative visual, or a deep technical solution, OmniChat ensures you get the best possible response every time. You never have to worry about which model is best suited—OmniChat has it covered.

### 🌐 Contextual Question Suggestions

OmniChat doesn’t just answer your questions—it helps you think deeper. Once it responds, it can suggest relevant follow-up questions to keep the conversation flowing and ensure you’re exploring every aspect of a topic.

- **Ask about space exploration**, and OmniChat might suggest related queries like "What are the latest Mars rover discoveries?" or "How does zero gravity affect human health?"
- Stay engaged and **keep learning** without missing a beat.

## Technical Marvel: How It Works Behind the Scenes

OmniChat is built with flexibility and power in mind. It leverages the strengths of Python, paired with the OpenAI and Google Gemini APIs, to create an efficient and scalable architecture that delivers a wide range of conversational abilities. Here's what makes OmniChat tick:

- **API Integration**: OpenAI's GPT-4o for deep, contextual understanding; DALL-E 3 for visual creation; Google Gemini for expansive data processing; Perplexity.ai for browsing capabilities.
- **Intelligent Request Routing**: OmniChat automatically routes your query to the most suitable AI model, ensuring you get optimal results every time.
- **Modular Design**: Built to be extensible, OmniChat allows developers to add new capabilities with ease, making it a highly versatile platform.

## Getting Started: Prerequisites & Setup

### Step 1: Create a Telegram Bot

Before setting up OmniChat, you need to create your own Telegram bot. Follow these instructions:

1. **Open Telegram** and search for the BotFather ([https://t.me/botfather](https://t.me/botfather)).
2. **Start a chat** with BotFather and type `/newbot` to create a new bot.
3. **Follow the prompts** to name your bot and create a unique username. Once complete, you will receive a **Telegram Bot Token**—make sure to save it, as you'll need it later for configuration.

### Step 2: Setup & Installation

Setting up OmniChat is a breeze. Follow these simple steps to get your own AI companion up and running:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chaitanyarahalkar/omnichat.git
   ```
2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
3. **Configure API Keys**: Open the `config.py` file and add your **Telegram Bot Token**, **OpenAI API Key**, and **Google Gemini API Key**.
4. **Run the Bot**:
   ```bash
   python main.py
   ```
5. **Invite OmniChat to Your Telegram Chat or Group** and start interacting!

## How to Use OmniChat: Example Interactions

Curious about what OmniChat can do for you? Here are just a few ideas to get you started:

- **Image Analysis**: Share an image and type "Describe this image" to get a detailed breakdown.
- **Video Summarization**: Upload a video clip with "Summarize this video" for a quick, concise summary.
- **Live Information**: Ask "What's the latest news on electric cars?" and get the freshest updates instantly.
- **Creative Image Generation**: Type "Generate an image of a dragon perched on a skyscraper" and let your imagination soar.
- **Meme Request**: Just type "meme" and enjoy a humorous interlude, perfect for lightening up your day.

## Expanding OmniChat: Adding Your Own Tools and Functionality

OmniChat's power lies in its extensibility. You can easily add your own custom tools and functions to enhance its capabilities and tailor it to your specific needs. Let's explore how you can contribute to OmniChat's ever-growing toolkit.

### Understanding the Meme Function Example

The provided `get_random_meme` function serves as a perfect template for understanding how to integrate custom functionality. Let's break down its key components:

```python
import requests
import random 

MEME_API = "https://meme-api.com/gimme/{}"

def get_random_meme(prompt):
    """
    Fetches a random meme URL from a predefined list of subreddits.

    Args:
        prompt (str): A prompt or keyword to fetch a meme. (Currently not used in the function)

    Returns:
        str: URL of the random meme fetched from the subreddit.
    """
    subreddits = ['dankmemes', 'shitposting', 'ProgrammerHumor', 'memes', '196']
    r = requests.get(MEME_API.format(random.choice(subreddits)))
    if r.ok:
        return r.json()['url']
```

1. **Clear Definition:** The function has a descriptive name and a docstring explaining its purpose.
2. **External API Integration:** It uses the `requests` library to interact with an external meme API.
3. **Simple Input/Output:** It accepts a `prompt` (although not currently used) and returns a meme URL.
4. **Error Handling:** It checks for a successful API response using `r.ok`.

### Steps to Add Your Own Tools

1. **Create Your Function:** Define a new Python function in the `functions.py` file. Ensure it has a descriptive name, a docstring, and handles inputs and outputs appropriately.  Example:

   ```python
   def get_weather(city):
       """
       Fetches the current weather for a given city.

       Args:
           city (str): The city name.

       Returns:
           str: The weather information.
       """
       # Your code to fetch weather data using an API or other means
       # ...
       return weather_info
   ```

2. **Register Your Function in `models.py`:** Add your function to the `available_functions` dictionary within the `get_llm_response` function in `models.py`:

   ```python
   available_functions = {
       # ... existing functions
       "get_weather": get_weather, # Add your function here
   }
   ```

3. **Define a Tool in `tools.json`:**  Describe your tool in the `tools.json` file, specifying its name, description, and parameters:

   ```json
   {
       "name": "get_weather",
       "description": "Gets the current weather for a given city.",
       "parameters": {
           "type": "object",
           "properties": {
               "city": {
                   "type": "string",
                   "description": "The name of the city."
               }
           },
           "required": ["city"]
       }
   }
   ```

4. **Test Your Integration:**  Interact with your bot in Telegram. GPT-4o should now be able to use your new tool when relevant to the user's query. For example, if a user asks "What's the weather in London?", GPT-4o should call your `get_weather` function with "London" as the argument.

By following these steps, you can empower OmniChat with a wide range of custom tools, turning it into a truly personalized and powerful AI assistant. Remember to handle errors gracefully and provide clear documentation for your functions to ensure seamless integration.

## Contributing: Join the OmniChat Community

OmniChat is an open playground for innovation. Contributions are always welcome, and we encourage developers, designers, and creatives alike to get involved:

- **Found a bug?** Submit an issue.
- **Have an idea for a new feature?** Fork the repository and submit a pull request.
- **Want to extend OmniChat?** Our modular design means it's easy to add new capabilities.

Together, we can make OmniChat even more amazing!

## License

OmniChat is licensed under the [MIT License](link-here), meaning you’re free to use, modify, and distribute it as long as attribution is maintained. We believe in open-source, and hope OmniChat inspires new ideas and innovations.

## Disclaimer

OmniChat is provided as-is, intended primarily for research and educational purposes. The developers are not responsible for any misuse or generated content. Please use responsibly and ethically.

---
