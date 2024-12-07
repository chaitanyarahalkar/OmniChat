import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap,
  Github,
  X,
  Mail,
  Link as LinkIcon,
  Globe,
} from 'lucide-react';
import chaitanyaPhoto from './chaitanya.jpeg';

const TeamPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Team | OmniChat';
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      {/* Navigation Bar */}
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
                  className="text-white transition-colors font-semibold"
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

      {/* Team Section */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            Meet the Team
          </span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mb-16">
          Meet the creators behind OmniChat, bringing AI-powered conversations to Telegram.
        </p>

        {/* Team Member Card */}
        <div className="max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all">
          <div className="p-8">
            <img 
              src={chaitanyaPhoto}
              alt="Chaitanya Rahalkar"
              className="w-full h-64 rounded-xl mb-6 object-cover object-[50%_5%]"
            />
            
            <h2 className="text-2xl font-bold mb-2">Chaitanya Rahalkar</h2>
            <p className="text-white/80 mb-6">Founder & Lead Developer</p>

            <div className="flex items-center mb-6 bg-blue-600/20 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 text-sm text-white/80">
              <Globe className="w-4 h-4 mr-2 text-blue-400" />
              works @ <a href="https://block.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Block, Inc.</a>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/chaitanyarahalkar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/chairahalkar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </a>
              <a 
                href="mailto:c@rahalkar.dev"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://rahalkar.dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <section className="relative container mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              OmniChat is an open-source project and welcomes contributions from the community. 
              Whether you're a developer, designer, or enthusiast, you can help make OmniChat better.
            </p>
            <a 
              href="https://github.com/chaitanyarahalkar/omnichat" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors inline-flex items-center"
            >
              <Github className="mr-2" /> View on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;