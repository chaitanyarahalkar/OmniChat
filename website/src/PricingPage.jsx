import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap,
  Check,
  Server,
  Cloud,
  Shield 
} from 'lucide-react';

const FeatureComparison = () => (
    <div className="mt-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Feature Comparison</h2>
      
      <div className="rounded-xl overflow-hidden backdrop-blur-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-white/5">
              <th className="px-6 py-4 text-left text-lg font-semibold text-white/80">Feature</th>
              <th className="px-6 py-4 text-left text-lg font-semibold text-white/80">Self-Hosted</th>
              <th className="px-6 py-4 text-left text-lg font-semibold text-white/80">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="px-6 py-4 text-left text-white text-md font-semibold bg-white/5" colSpan={3}>
                Deployment
              </th>
            </tr>
            {[
              ["Installation Support", "Community guides", "Dedicated support"],
              ["Hosting", "Self-managed", "Fully managed"],
              ["Updates", "Manual", "Automatic"],
            ].map(([feature, self, enterprise], idx) => (
              <tr key={idx} className="border-t border-white/5">
                <td className="px-6 py-4 text-sm text-white">{feature}</td>
                <td className="px-6 py-4 text-sm text-white/60">{self}</td>
                <td className="px-6 py-4 text-sm text-blue-400">{enterprise}</td>
              </tr>
            ))}
            
            <tr>
              <th className="px-6 py-4 text-left text-white text-md font-semibold bg-white/5" colSpan={3}>
                Support
              </th>
            </tr>
            {[
              ["Response Time", "Best effort", "< 4 hours"],
              ["Support Channel", "GitHub issues", "Dedicated slack"],
              ["Technical Support", "Community", "Priority"],
            ].map(([feature, self, enterprise], idx) => (
              <tr key={idx} className="border-t border-white/5">
                <td className="px-6 py-4 text-sm text-white">{feature}</td>
                <td className="px-6 py-4 text-sm text-white/60">{self}</td>
                <td className="px-6 py-4 text-sm text-blue-400">{enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const PricingCard = ({ type, icon: Icon, price, period, features, buttonText, buttonOnClick, isPopular }) => (
    <div className="rounded-2xl bg-gray-800/50 backdrop-blur-lg p-8 flex flex-col min-h-[600px]">
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Icon className={`h-6 w-6 ${type === "Self-Hosted" ? 'text-purple-400' : 'text-blue-400'}`} />
        </div>
        <h3 className="text-xl font-semibold text-white">{type}</h3>
        <div className="flex items-baseline justify-center mt-1 mb-1">
          <span className="text-2xl font-bold text-white">{price}</span>
          {period && <span className="text-gray-400 ml-1">{period}</span>}
        </div>
        {isPopular && (
          <span className="px-4 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 text-sm inline-block">
            Popular
          </span>
        )}
      </div>
      
      {/* Rest of the card content remains the same */}
      <ul className="space-y-4 mt-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-300">
            <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
  
      <div className="mt-8">
        <button 
          onClick={buttonOnClick}
          className={`w-full py-3 rounded-full flex items-center justify-center gap-2 ${
            type === "Enterprise" 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'border border-white/10 text-white hover:bg-white/5'
          }`}
        >
          {type === "Enterprise" ? <Shield className="h-5 w-5" /> : <Server className="h-5 w-5" />}
          {buttonText}
        </button>
      </div>
    </div>
  );
  
  const PricingPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      document.title = 'Pricing | OmniChat';
    }, []);
  
    const plans = {
      selfHosted: {
        type: "Self-Hosted",
        price: "$0",
        period: "/month",
        icon: Server,
        features: [
          "Full source code access",
          "Self-hosted deployment",
          "Community support",
          "Basic AI models integration",
          "Standard features",
          "GitHub issue tracking",
          "Community updates"
        ],
        buttonText: "Get Started",
        isPopular: true
      },
      enterprise: {
        type: "Enterprise",
        price: "$20",
        period: "/month",
        icon: Cloud,
        features: [
          "Managed cloud hosting",
          "24/7 priority support",
          "Custom deployment assistance",
          "Premium AI model access",
          "Advanced security features",
          "SLA guarantees",
          "Dedicated account manager",
          "Custom feature development",
          "Training and onboarding"
        ],
        buttonText: "Contact Sales",
        isPopular: false
      }
    };
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        {/* Nav Bar */}
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
                    className="text-white transition-colors font-semibold"
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
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose between self-hosting OmniChat for free or get enterprise-grade support and management
            </p>
          </div>
  
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard
              {...plans.selfHosted}
              buttonOnClick={() => window.open("https://github.com/chaitanyarahalkar/omnichat", "_blank")}
            />
            <PricingCard
              {...plans.enterprise}
              buttonOnClick={() => window.location.href = 'mailto:sales@tryomni.chat'}
            />
          </div>
  
          {/* Feature Comparison Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Feature Comparison</h2>
            
            <div className="rounded-xl overflow-hidden backdrop-blur-sm bg-gray-800/50">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Self-Hosted</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-left text-white font-semibold" colSpan={3}>
                      Deployment
                    </th>
                  </tr>
                  {[
                    ["Installation Support", "Community guides", "Dedicated support"],
                    ["Hosting", "Self-managed", "Fully managed"],
                    ["Updates", "Manual", "Automatic"]
                  ].map(([feature, self, enterprise], idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-sm text-white">{feature}</td>
                      <td className="px-6 py-4 text-sm text-white/60">{self}</td>
                      <td className="px-6 py-4 text-sm text-blue-400">{enterprise}</td>
                    </tr>
                  ))}
                  
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-left text-white font-semibold" colSpan={3}>
                      Support
                    </th>
                  </tr>
                  {[
                    ["Response Time", "Best effort", "< 4 hours"],
                    ["Support Channel", "GitHub issues", "Dedicated slack"],
                    ["Technical Support", "Community", "Priority"]
                  ].map(([feature, self, enterprise], idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-sm text-white">{feature}</td>
                      <td className="px-6 py-4 text-sm text-white/60">{self}</td>
                      <td className="px-6 py-4 text-sm text-blue-400">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PricingPage;