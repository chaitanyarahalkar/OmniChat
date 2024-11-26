import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  Layers, 
  PenTool, 
  Star, 
  Cpu, 
  MessageCircle 
} from 'lucide-react';
import FeaturesPage from './FeaturesPage';
import ModelsPage from './ModelsPage';
import SetupPage from './SetupPage';
import TeamPage from './TeamPage';

// Main website content component
const MainContent = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

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

  const navItems = ['overview', 'features', 'models', 'setup', 'team'];

  const handleNavClick = (tab) => {
    if (tab === 'features') navigate('/features');
    else if (tab === 'models') navigate('/models');
    else if (tab === 'setup') navigate('/setup');
    else if (tab === 'team') navigate('/team');
    else setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>
      
      {/* Updated Navigation */}
      <nav 
        ref={navRef}
        className={`z-50 w-full transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 bg-[#0B1120] shadow-lg' : 'absolute top-0 left-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <Zap className="w-8 h-8 mr-2 text-yellow-400" />
            <h1 className="text-2xl font-bold">OmniChat</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(tab => (
              <button
                key={tab}
                onClick={() => handleNavClick(tab)}
                className={`capitalize ${
                  activeTab === tab ? 'text-white font-bold' : 'text-white/50 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="https://github.com/chaitanyarahalkar/omnichat" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B1120] border-t border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map(tab => (
                <button
                  key={tab}
                  onClick={() => handleNavClick(tab)}
                  className={`capitalize text-left py-2 ${
                    activeTab === tab ? 'text-white font-bold' : 'text-white/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <a 
                href="https://github.com/chaitanyarahalkar/omnichat" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors text-center"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Update Hero Section for better mobile display */}
      <header className="relative container mx-auto px-4 pt-32 pb-16 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
              Your Ultimate Telegram AI Companion
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/80">
            OmniChat is a revolutionary Telegram chatbot that brings together GPT-4o, DALL-E 3, and more in one powerful bot.
            Experience the future of AI interaction right in your Telegram chats.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center justify-center"
            >
              <Zap className="mr-2" /> Add to Telegram
            </a>
            <button 
              onClick={() => navigate('/features')}
              className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
            >
              <Layers className="mr-2" /> See Features
            </button>
          </div>
        </div>
      </header>

      {/* Update Features Grid for mobile */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

// Root App component with router
const App = () => {
  return (
    <Router basename="/OmniChat">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
};

export default App;