import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  Layers, 
  PenTool, 
  Star,
  Cpu,
  MessageCircle,
  Image,
  Bot,
  Brain,
  Video,
  CloudLightning,
  Laugh,
  Code
} from 'lucide-react';

const FeaturesPage = () => {
  const navigate = useNavigate();

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
            Powerful Features
          </span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-12 text-white/80">
          Discover the full potential of OmniChat with our comprehensive suite of AI-powered features
        </p>
      </div>

      {/* Main Features Grid */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Multimodal Mastery */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Bot className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold">Multimodal Mastery</h3>
            </div>
            <p className="text-white/70 mb-4">
              Seamlessly handle text, images, videos, and audio in your conversations. Upload media and get intelligent analysis and responses.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Image className="w-4 h-4 mr-2" />
                Image analysis and description
              </li>
              <li className="flex items-center">
                <Video className="w-4 h-4 mr-2" />
                Video content summarization
              </li>
            </ul>
          </div>

          {/* Real-time Knowledge */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Globe className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-semibold">Real-time Knowledge</h3>
            </div>
            <p className="text-white/70 mb-4">
              Access current information through Perplexity.ai integration. Stay updated with the latest news and insights.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <CloudLightning className="w-4 h-4 mr-2" />
                Live web browsing
              </li>
              <li className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Real-time fact checking
              </li>
            </ul>
          </div>

          {/* Creative Tools */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <PenTool className="w-10 h-10 text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold">Creative Tools</h3>
            </div>
            <p className="text-white/70 mb-4">
              Generate stunning images with DALL-E 3 and unleash your creativity with various artistic tools.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                AI image generation
              </li>
              <li className="flex items-center">
                <Laugh className="w-4 h-4 mr-2" />
                Meme creation
              </li>
            </ul>
          </div>

          {/* Smart AI Selection */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Brain className="w-10 h-10 text-red-400 mr-4" />
              <h3 className="text-2xl font-semibold">Smart AI Selection</h3>
            </div>
            <p className="text-white/70 mb-4">
              Automatically routes your requests to the most suitable AI model for optimal results.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                Intelligent model routing
              </li>
              <li className="flex items-center">
                <Bot className="w-4 h-4 mr-2" />
                Multi-model coordination
              </li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Code className="w-10 h-10 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold">Developer Tools</h3>
            </div>
            <p className="text-white/70 mb-4">
              Access powerful development features including code generation, debugging, and data processing.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                Code generation
              </li>
              <li className="flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                Data processing
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience OmniChat?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join thousands of users who are already leveraging the power of AI with OmniChat.
            Start your journey today!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
            >
              <MessageCircle className="mr-2" /> Start Chatting
            </a>
            <a 
              href="https://github.com/chaitanyarahalkar/omnichat" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;