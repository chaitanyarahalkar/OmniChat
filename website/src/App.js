import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Zap, 
  Layers, 
  PenTool, 
  Star, 
  Cpu, 
  CodeXml,
  MessageCircle 
} from 'lucide-react';

const OmniChatWebsite = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    document.title = 'OmniChat | Your AI Telegram Companion';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        setIsSticky(window.scrollY > navRef.current.offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>
      
      {/* Navigation */}
      <nav 
        ref={navRef}
        className={`z-50 w-full transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 bg-black/50 backdrop-blur-lg shadow-lg' : 'absolute top-0 left-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="w-8 h-8 mr-2 text-yellow-400" />
            <h1 className="text-2xl font-bold">OmniChat</h1>
          </div>
          <div className="space-x-6">
            {['overview', 'features', 'models', 'setup'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize ${
                  activeTab === tab ? 'text-white font-bold' : 'text-white/50 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
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
      <header className="relative container mx-auto px-4 pt-32 pb-16 text-center">
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
		Your Ultimate Telegram AI Companion
	    </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-white/80">
            OmniChat is a revolutionary Telegram chatbot that brings together GPT-4o, DALL-E 3, and more in one powerful bot.
            Experience the future of AI interaction right in your Telegram chats.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
            >
              <Zap className="mr-2" /> Add to Telegram
            </a>
            <a 
              href="#" 
              className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
            >
              <Layers className="mr-2" /> See Features
            </a>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Cpu className="w-8 h-8 text-blue-400 mr-3" />
              Smart AI Selection
            </h3>
            <p className="text-white/70">
              Automatically routes your requests to the most suitable AI model, whether it's GPT-4o for complex reasoning,
              DALL-E for image generation, or Gemini for multimodal tasks.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Globe className="w-8 h-8 text-purple-400 mr-3" />
              Real-time Knowledge
            </h3>
            <p className="text-white/70">
              Access current information and web content through Perplexity.ai integration,
              ensuring you always get the most up-to-date answers and insights.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <PenTool className="w-8 h-8 text-green-400 mr-3" />
              Creative Tools
            </h3>
            <p className="text-white/70">
              Generate images with DALL-E 3, create memes on demand, and get creative
              responses for any task you throw at it.
            </p>
          </div>
        </div>
      </section>

      {/* Telegram Start Section */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Start Chatting on Telegram</h3>
              <p className="text-white/80 mb-4">
                Getting started with OmniChat is as easy as adding a contact on Telegram.
                Click the button below to start your AI-powered conversation journey.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
                >
                  <MessageCircle className="mr-2" /> Add @OmniChatBot
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
                >
                  View Tutorial
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <pre className="text-sm text-green-400">
                  <code>
                    1. Open Telegram{'\n'}
                    2. Search @OmniChatBot{'\n'}
                    3. Click "Start"{'\n'}
                    4. Begin your AI journey!
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative container mx-auto px-4 py-8 mt-12 text-center">
        <p className="text-white/50">
          © 2024 OmniChat. Open Source under MIT License.
        </p>
      </footer>
    </div>
  );
};

export default OmniChatWebsite;
