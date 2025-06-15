# OmniChat: One API, All AI Senses

<div align="center">
  <img src="website/public/favicon.svg" alt="OmniChat Logo" width="200" height="200">
</div>

Build smarter apps that see, hear, and understand. OmniChat is a powerful universal API that brings together GPT-4o, DALL-E 3, Google Gemini, and more in one unified interface. Process text, images, video, and audio with a single integration.

## Why Choose OmniChat?

OmniChat provides a single, powerful API for all your multimodal AI needs. Whether you're building web apps, chatbots, or custom integrations, our smart routing system automatically selects and combines the perfect AI models for your task.

## Features That Make OmniChat Unstoppable:

### 🎭 Multimodal Processing

Process and analyze multiple types of media through a single unified interface:
- **Text Analysis**: Natural language understanding, code generation, and complex reasoning
- **Image Processing**: Generate, analyze, and understand images with state-of-the-art models
- **Video Analysis**: Extract insights and summaries from video content
- **Audio Processing**: Transcription, analysis, and understanding of audio inputs

### 🧠 Intelligent Model Selection

Our smart routing system automatically selects and combines the perfect AI models for your task:
- **Automatic Model Routing**: The right model for each specific task
- **Model Combination**: Seamlessly combine multiple models when needed
- **Real-time Optimization**: Ensure optimal results for every request

### 🌐 Universal Integration

Build any type of AI-powered application:
- **Web Applications**: Create powerful web-based AI experiences
- **Chat Platforms**: Build bots for Telegram, Slack, and more
- **Custom Solutions**: Integrate with any platform or service

### 🚀 Available Models

Access multiple state-of-the-art AI models through a single API:
- **GPT-4o**: Advanced language model for complex reasoning and analysis
- **DALL-E 3**: High-fidelity image generation and editing
- **Google Gemini**: Cutting-edge multimodal processing
- **Perplexity.ai**: Real-time knowledge and web browsing capabilities

## Getting Started

### Prerequisites

Before setting up OmniChat, you'll need:
- Python 3.8 or higher
- API keys for the models you want to use

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chaitanyarahalkar/omnichat.git
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure API Keys**:
   Create a `.env` file based on `sample.env` and add your API keys:
   ```env
   OPENAI_API_KEY=your_openai_key
   GOOGLE_API_KEY=your_google_key
   PPLX_API_KEY=your_perplexity_key
   ```

4. **Start Using the API**:
   ```python
   from omnichat import OmniChat
   
   client = OmniChat()
   response = client.process({
       "type": "text",
       "content": "Your prompt here"
   })
   ```

## Try It Out

Want to see OmniChat in action? Try our Telegram bot integration:
1. Visit [@OmniChatBot](https://t.me/OmniChatBot) on Telegram
2. Start chatting and experience the power of our multimodal API

## Documentation

For detailed API documentation, examples and demo visit our [Setup Guide](https://tryomni.chat/setup).

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
