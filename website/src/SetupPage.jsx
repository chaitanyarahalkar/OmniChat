import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap,
  Rocket,
  Github,
  MessageCircle,
  Globe,
  Star,
  ArrowRight,
  Bot,
  Server,
  Settings,
  Clock,
  Terminal,
  CheckCircle
} from 'lucide-react';

const SetupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Setup | OmniChat';
  }, []);

  const benefits = [
    {
      title: "Full Control",
      description: "Host the bot on your own servers and maintain complete control over your data and settings.",
      icon: <Server className="w-12 h-12 text-blue-400" />
    },
    {
      title: "Customizable",
      description: "Modify the bot's behavior, add custom features, and tailor it to your specific needs.",
      icon: <Settings className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Open Source",
      description: "Built with transparency in mind. Inspect the code, contribute, or fork it for your own projects.",
      icon: <Github className="w-12 h-12 text-green-400" />
    }
  ];

  const steps = [
    {
      title: "Create Your Telegram Bot",
      description: "Get started by creating your own Telegram bot through BotFather. It's a simple process that takes just a few minutes.",
      icon: <Bot className="w-12 h-12 text-blue-400" />,
      points: [
        "Open Telegram and search for BotFather",
        "Create a new bot and get your API token",
        "Choose a name for your bot"
      ]
    },
    {
      title: "Deploy the Bot",
      description: "Get the OmniChat code from our GitHub repository and set it up on your server.",
      icon: <Rocket className="w-12 h-12 text-yellow-400" />,
      points: [
        "Clone the repository to your server",
        "Set up the required API keys",
        "Install the dependencies"
      ]
    },
    {
      title: "Start Using",
      description: "Launch your bot and start experiencing the power of AI right in your Telegram.",
      icon: <MessageCircle className="w-12 h-12 text-green-400" />,
      points: [
        "Launch the bot on your server",
        "Start chatting with your bot",
        "Customize features as needed"
      ]
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
                  className="text-white transition-colors font-semibold"
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

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            Host Your Own OmniChat Bot
          </span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-12 text-white/80">
          Take control of your AI assistant by hosting your own instance of OmniChat
        </p>
      </div>

      {/* Benefits Grid */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Setup Steps */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="flex items-center mb-6">
                {step.icon}
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-white/70 mt-2">{step.description}</p>
                </div>
              </div>
              <div className="ml-20 space-y-3">
                {step.points.map((point, idx) => (
                  <div key={idx} className="flex items-center text-white/80">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
          <div className="flex flex-col items-center">
            <Terminal className="w-16 h-16 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-white/80 mb-8 max-w-2xl">
              Check out our GitHub repository for detailed documentation, setup guides, and community contributions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://github.com/chaitanyarahalkar/omnichat"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center justify-center"
              >
                <Github className="mr-2" /> View Repository
              </a>
              <button
                onClick={() => navigate('/models')}
                className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
              >
                <Globe className="mr-2" /> Explore Models
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetupPage;