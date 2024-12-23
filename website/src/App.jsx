import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  Layers, 
  PenTool, 
  Star, 
  Cpu, 
  MessageCircle, 
  Bot, 
  Code 
} from 'lucide-react';
import FeaturesPage from './FeaturesPage';
import ModelsPage from './ModelsPage';
import SetupPage from './SetupPage';
import TeamPage from './TeamPage';
import PricingPage from './PricingPage';


// Main website content component
const MainContent = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'OmniChat | Universal Multimodal LLM API';
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

  const navItems = ['overview', 'features', 'models', 'setup', 'pricing', 'team'];

  const handleNavClick = (tab) => {
    if (tab === 'features') navigate('/features');
    else if (tab === 'models') navigate('/models');
    else if (tab === 'setup') navigate('/setup');
    else if (tab === 'pricing') navigate('/pricing');
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
      <nav className="z-50 w-full fixed top-0 left-0 bg-[#0B1120] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => navigate('/')}
            >
              <Zap className="w-8 h-8 mr-2 text-yellow-400" />
              <h1 className="text-2xl font-bold">OmniChat</h1>
            </div>
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => navigate('/features')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => navigate('/models')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Models
                </button>
                <button
                  onClick={() => navigate('/setup')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Setup
                </button>
                <button
                  onClick={() => navigate('/pricing')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => navigate('/team')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Team
                </button>
              </div>
            </div>
            <a 
              href="https://github.com/chaitanyarahalkar/omnichat" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors"
            >
              GitHub
            </a>
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Update Hero Section for better mobile display */}
      <header className="relative container mx-auto px-4 pt-32 pb-16 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
              One API, All AI Senses
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/80">
            Build smarter apps that see, hear, and understand. Our multimodal LLM API processes text, images, 
            video, and audio with a single integration.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button 
              onClick={() => navigate('/features')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
            >
              <Bot className="mr-2" /> Try on Telegram
            </button>
            <button 
              onClick={() => navigate('https://t.me/crchatgptbot')}
              className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
            >
              <Code className="mr-2" /> Explore API
            </button>
          </div>
          <a 
            href="https://www.producthunt.com/posts/omnichat?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-omnichat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=653153&theme=neutral" 
              alt="OmniChat - OmniChat: Your All-in-One AI Chat Companion | Product Hunt" 
              style={{ width: '250px', height: '54px' }}
              width="250" 
              height="54" 
            />
          </a>
        </div>
      </header>

      {/* Update Features Grid for mobile */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Cpu className="w-8 h-8 text-blue-400 mr-3" />
              Universal API
            </h3>
            <p className="text-white/70">
              A flexible API that can be integrated into any platform - web apps, mobile apps, chat platforms, or custom solutions.
              Build your own AI-powered applications with ease.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Globe className="w-8 h-8 text-purple-400 mr-3" />
              Multimodal Support
            </h3>
            <p className="text-white/70">
              Process and analyze text, images, videos, and audio through a single unified interface.
              Perfect for building rich, interactive AI experiences.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <PenTool className="w-8 h-8 text-green-400 mr-3" />
              Multiple Integrations
            </h3>
            <p className="text-white/70">
              Ready-to-use integrations for popular platforms like Telegram, Slack, and more.
              Try our Telegram bot to see the API in action.
            </p>
          </div>
        </div>
      </section>

      {/* Telegram Start Section */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Experience the API in Action</h3>
              <p className="text-white/80 mb-4">
                See what you can build with OmniChat by trying our Telegram integration.
                It's just one example of the many possibilities with our API.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
                >
                  <MessageCircle className="mr-2" /> Try on Telegram
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
                >
                  View API Docs
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
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
};

export default App;
