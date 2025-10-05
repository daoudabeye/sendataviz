import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const PremiumHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuItems = {
    services: {
      title: 'Services',
      sections: [
        {
          title: 'Business Intelligence',
          icon: '📊',
          items: ['WebFOCUS Solutions', 'Tableaux de Bord', 'Reporting Avancé', 'Analytics Prédictive']
        },
        {
          title: 'Intégration',
          icon: '🔗',
          items: ['API Management', 'ETL Solutions', 'Data Pipeline', 'Middleware']
        },
        {
          title: 'Développement',
          icon: '💻',
          items: ['Applications Web', 'Solutions Mobiles', 'Portails Métier', 'Sur Mesure']
        }
      ]
    },
    solutions: {
      title: 'Solutions',
      sections: [
        {
          title: 'Par Secteur',
          icon: '🏢',
          items: ['Finance & Banque', 'Industrie', 'Retail & E-commerce', 'Santé & Pharma']
        },
        {
          title: 'Par Fonction',
          icon: '👥',
          items: ['Direction Générale', 'Finance & Contrôle', 'Operations', 'IT & Data']
        }
      ]
    }
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-100/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 lg:h-20">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-emerald-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-3xl lg:text-4xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">SENDA</span>
                  <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">TAVIZ</span>
                  <Sparkles className="inline-block w-6 h-6 text-emerald-500 ml-2 group-hover:animate-spin" />
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a href="#accueil" className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50/50 transition-all duration-300">
                Accueil
              </a>
              
              {/* Enhanced Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50/50 transition-all duration-300">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-[420px] bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100 rounded-2xl mt-2 p-8 animate-fade-in">
                    <div className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                      <span className="text-2xl mr-3">🚀</span>
                      Nos Services Premium
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      {megaMenuItems.services.sections.map((section, idx) => (
                        <div key={idx} className="group">
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                            <span className="text-xl mr-3">{section.icon}</span>
                            {section.title}
                          </h4>
                          <ul className="space-y-2 ml-8">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium hover:bg-indigo-50/50 rounded-lg px-2 py-1 -mx-2 block">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Solutions Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50/50 transition-all duration-300">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-96 bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100 rounded-2xl mt-2 p-8 animate-fade-in">
                    <div className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                      <span className="text-2xl mr-3">🎯</span>
                      Solutions Métier
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      {megaMenuItems.solutions.sections.map((section, idx) => (
                        <div key={idx} className="group">
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                            <span className="text-xl mr-3">{section.icon}</span>
                            {section.title}
                          </h4>
                          <ul className="space-y-2 ml-8">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium hover:bg-indigo-50/50 rounded-lg px-2 py-1 -mx-2 block">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#about" className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50/50 transition-all duration-300">
                À Propos
              </a>
              <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50/50 transition-all duration-300">
                Contact
              </a>
            </nav>

            {/* Enhanced CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden lg:inline-flex bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Sparkles className="w-4 h-4 mr-2" />
                Demander un Devis
              </Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl animate-slide-down">
            <div className="px-4 py-8 space-y-4">
              <a href="#accueil" className="block text-gray-700 hover:text-indigo-600 font-semibold py-3 px-4 rounded-lg hover:bg-indigo-50/50 transition-all">
                🏠 Accueil
              </a>
              <a href="#services" className="block text-gray-700 hover:text-indigo-600 font-semibold py-3 px-4 rounded-lg hover:bg-indigo-50/50 transition-all">
                🚀 Services
              </a>
              <a href="#solutions" className="block text-gray-700 hover:text-indigo-600 font-semibold py-3 px-4 rounded-lg hover:bg-indigo-50/50 transition-all">
                🎯 Solutions
              </a>
              <a href="#about" className="block text-gray-700 hover:text-indigo-600 font-semibold py-3 px-4 rounded-lg hover:bg-indigo-50/50 transition-all">
                👥 À Propos
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-indigo-600 font-semibold py-3 px-4 rounded-lg hover:bg-indigo-50/50 transition-all">
                📞 Contact
              </a>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white mt-6 font-bold py-4 rounded-xl shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Demander un Devis
              </Button>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default PremiumHeader;