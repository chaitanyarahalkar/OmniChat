import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Brain,
  Sparkles,
  Image as ImageIcon,
  Search,
  Workflow,
  MessageSquare,
  Code,
  Lightbulb,
  Bot
} from 'lucide-react';

const ModelsPage = () => {
  const navigate = useNavigate();

  const models = [
    {
      name: "GPT-4o",
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      description: "Latest GPT-4 model optimized for chat and reasoning",
      capabilities: [
        "Complex reasoning and analysis",
        "Natural conversation",
        "Code generation and review",
        "Custom personality adaptation"
      ],
      color: "blue"
    },
    {
      name: "DALL-E 3",
      icon: <ImageIcon className="w-10 h-10 text-purple-400" />,
      description: "Advanced image generation model with high fidelity and accuracy",
      capabilities: [
        "Photorealistic image generation",
        "Artistic style adaptation",
        "Complex scene composition",
        "Text-to-image conversion"
      ],
      color: "purple"
    },
    {
      name: "Google Gemini",
      icon: <Sparkles className="w-10 h-10 text-green-400" />,
      description: "Multimodal AI model for diverse task handling",
      capabilities: [
        "Image and text understanding",
        "Cross-modal reasoning",
        "Complex task solving",
        "Real-world knowledge integration"
      ],
      color: "green"
    },
    {
      name: "Perplexity.ai",
      icon: <Search className="w-10 h-10 text-yellow-400" />,
      description: "Real-time web browsing and information retrieval",
      capabilities: [
        "Live web search",
        "Current events analysis",
        "Fact verification",
        "Source citation"
      ],
      color: "yellow"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="z-50 w-full fixed top-0 left-0 bg-[#0B1120] shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Zap className="w-8 h-8 mr-2 text-yellow-400" />
            <h1 className="text-2xl font-bold">OmniChat</h1>
          </div>
          <a 
            href="https://github.com/chaitanyarahalkar/omnichat" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            AI Models & Capabilities
          </span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-12 text-white/80">
          OmniChat leverages multiple state-of-the-art AI models to provide the best possible experience for every task
        </p>
      </div>

      {/* Models Grid */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="flex items-center mb-6">
                {model.icon}
                <h3 className="text-2xl font-semibold ml-4">{model.name}</h3>
              </div>
              <p className="text-white/70 mb-6">
                {model.description}
              </p>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white/90">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {model.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-white/70">
                      <Lightbulb className="w-4 h-4 mr-2 text-${model.color}-400" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
          <div className="flex flex-col items-center">
            <Workflow className="w-16 h-16 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Intelligent Model Selection</h3>
            <p className="text-white/80 mb-6 max-w-2xl">
              OmniChat automatically selects the most appropriate AI model for your task,
              ensuring optimal results every time. Our smart routing system combines multiple
              models when needed to provide the best possible response.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => navigate('/features')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
              >
                <Bot className="mr-2" /> Explore Features
              </button>
              <button 
                onClick={() => navigate('/setup')}
                className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
              >
                <Code className="mr-2" /> Setup Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelsPage;