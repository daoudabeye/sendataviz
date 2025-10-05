import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
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
          items: ['WebFOCUS Solutions', 'Tableaux de Bord', 'Reporting Avancé', 'Analytics Prédictive']
        },
        {
          title: 'Intégration',
          items: ['API Management', 'ETL Solutions', 'Data Pipeline', 'Middleware']
        },
        {
          title: 'Développement',
          items: ['Applications Web', 'Solutions Mobiles', 'Portails Métier', 'Sur Mesure']
        }
      ]
    },
    solutions: {
      title: 'Solutions',
      sections: [
        {
          title: 'Par Secteur',
          items: ['Finance & Banque', 'Industrie', 'Retail & E-commerce', 'Santé & Pharma']
        },
        {
          title: 'Par Fonction',
          items: ['Direction Générale', 'Finance & Contrôle', 'Operations', 'IT & Data']
        }
      ]
    }
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl lg:text-3xl font-bold">
                <span className="text-indigo-600">SENDA</span>
                <span className="text-emerald-500">TAVIZ</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Accueil
              </a>
              
              {/* Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-96 bg-white shadow-xl border border-gray-100 rounded-lg mt-2 p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {megaMenuItems.services.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-gray-900 mb-3">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
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

              {/* Solutions Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-xl border border-gray-100 rounded-lg mt-2 p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {megaMenuItems.solutions.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-gray-900 mb-3">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
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

              <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                À Propos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden lg:inline-flex bg-indigo-600 hover:bg-indigo-700 text-white">
                Demander un Devis
              </Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#accueil" className="block text-gray-700 hover:text-indigo-600 font-medium">
                Accueil
              </a>
              <a href="#services" className="block text-gray-700 hover:text-indigo-600 font-medium">
                Services
              </a>
              <a href="#solutions" className="block text-gray-700 hover:text-indigo-600 font-medium">
                Solutions
              </a>
              <a href="#about" className="block text-gray-700 hover:text-indigo-600 font-medium">
                À Propos
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-indigo-600 font-medium">
                Contact
              </a>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                Demander un Devis
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;