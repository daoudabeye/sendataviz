import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown, Sparkles, ArrowRight, Star, Zap, Target, Users, Building, ShoppingCart, Heart, Factory, TrendingUp, BarChart3, Network, Code2, Brain, Database, Shield, Globe, Rocket, Award } from 'lucide-react';

const AdvancedMegaMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuData = {
    services: {
      title: 'Services',
      subtitle: 'Solutions Techniques Premium',
      sections: [
        {
          title: 'Business Intelligence',
          icon: BarChart3,
          color: 'from-blue-500 to-indigo-600',
          description: 'Transformez vos données en insights stratégiques',
          items: [
            { name: 'WebFOCUS Solutions', icon: Database, featured: true },
            { name: 'Tableaux de Bord', icon: BarChart3 },
            { name: 'Reporting Avancé', icon: TrendingUp },
            { name: 'Analytics Prédictive', icon: Brain, hot: true }
          ]
        },
        {
          title: 'Intégration',
          icon: Network,
          color: 'from-emerald-500 to-teal-600',
          description: 'Connectez tous vos systèmes efficacement',
          items: [
            { name: 'API Management', icon: Globe },
            { name: 'ETL Solutions', icon: Database },
            { name: 'Data Pipeline', icon: Network, featured: true },
            { name: 'Middleware', icon: Shield }
          ]
        },
        {
          title: 'Développement',
          icon: Code2,
          color: 'from-purple-500 to-violet-600',
          description: 'Applications sur mesure de nouvelle génération',
          items: [
            { name: 'Applications Web', icon: Globe },
            { name: 'Solutions Mobiles', icon: Rocket, hot: true },
            { name: 'Portails Métier', icon: Building },
            { name: 'Solutions IA', icon: Brain, featured: true }
          ]
        }
      ],
      cta: {
        title: 'Besoin d\'une solution personnalisée ?',
        subtitle: 'Nos experts vous accompagnent',
        button: 'Consultation Gratuite'
      }
    },
    solutions: {
      title: 'Solutions',
      subtitle: 'Adaptées à Votre Secteur',
      sections: [
        {
          title: 'Par Secteur',
          icon: Building,
          color: 'from-orange-500 to-red-600',
          description: 'Solutions métier spécialisées',
          items: [
            { name: 'Finance & Banque', icon: Building, featured: true },
            { name: 'Industrie', icon: Factory },
            { name: 'Retail & E-commerce', icon: ShoppingCart, hot: true },
            { name: 'Santé & Pharma', icon: Heart }
          ]
        },
        {
          title: 'Par Fonction',
          icon: Users,
          color: 'from-cyan-500 to-blue-600',
          description: 'Optimisées pour chaque département',
          items: [
            { name: 'Direction Générale', icon: Target },
            { name: 'Finance & Contrôle', icon: TrendingUp, featured: true },
            { name: 'Operations', icon: Zap },
            { name: 'IT & Data', icon: Database }
          ]
        }
      ],
      cta: {
        title: 'Votre secteur n\'est pas listé ?',
        subtitle: 'Nous nous adaptons à tous les métiers',
        button: 'Discuter de Mon Secteur'
      },
      featured: {
        title: 'Success Story',
        company: 'Renault Group',
        result: '+35% ROI en 6 mois',
        description: 'Transformation BI complète'
      }
    }
  };

  const MegaMenuSection = ({ section, isActive }) => (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${section.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
      <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
            <section.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-black text-lg text-gray-900">{section.title}</h4>
            <p className="text-xs text-gray-600 font-medium">{section.description}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {section.items.map((item, itemIdx) => (
            <li key={itemIdx}>
              <a 
                href="#" 
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:bg-indigo-50/80 rounded-lg px-3 py-2 -mx-3 group/item"
                onMouseEnter={() => setHoveredItem(`${section.title}-${item.name}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <item.icon className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-indigo-500 transition-colors" />
                <span className="font-medium text-sm flex-1">{item.name}</span>
                {item.featured && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold ml-2">
                    ⭐ Featured
                  </span>
                )}
                {item.hot && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold ml-2 animate-pulse">
                    🔥 Hot
                  </span>
                )}
                <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all ml-2" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderMegaMenu = (menuKey) => {
    const menuData = megaMenuData[menuKey];
    
    return (
      <div className="absolute top-full left-0 w-[900px] bg-white/95 backdrop-blur-2xl shadow-2xl border border-gray-100/50 rounded-3xl mt-4 p-8 animate-mega-menu-enter">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black text-gray-900 mb-2">
            {menuData.title}
          </h3>
          <p className="text-gray-600 font-medium">
            {menuData.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {menuData.sections.map((section, idx) => (
            <MegaMenuSection key={idx} section={section} />
          ))}
        </div>

        {/* Featured Success Story (for solutions) */}
        {menuData.featured && (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50">
              <div className="flex items-center mb-3">
                <Award className="w-6 h-6 text-emerald-600 mr-3" />
                <span className="font-bold text-emerald-800">{menuData.featured.title}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-black text-lg text-gray-900">{menuData.featured.company}</div>
                  <div className="text-sm text-gray-600">{menuData.featured.description}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-emerald-600">{menuData.featured.result}</div>
                  <div className="text-xs text-emerald-700 font-medium">Résultat obtenu</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-2xl p-6 text-white text-center">
          <h4 className="font-bold text-lg mb-2">{menuData.cta.title}</h4>
          <p className="text-indigo-100 mb-4 text-sm">{menuData.cta.subtitle}</p>
          <Button className="bg-white text-indigo-600 hover:bg-gray-50 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4 mr-2" />
            {menuData.cta.button}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-gray-100/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-emerald-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative text-3xl lg:text-4xl font-black tracking-tight px-4 py-2">
                  <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">SENDA</span>
                  <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">TAVIZ</span>
                  <Sparkles className="inline-block w-6 h-6 text-emerald-500 ml-2 group-hover:animate-spin" />
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <a href="#accueil" className="px-6 py-3 text-gray-700 hover:text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50/80 transition-all duration-300">
                Accueil
              </a>
              
              {/* Advanced Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-6 py-3 text-gray-700 hover:text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50/80 transition-all duration-300 group">
                  Services 
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'services' && renderMegaMenu('services')}
              </div>

              {/* Advanced Solutions Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-6 py-3 text-gray-700 hover:text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50/80 transition-all duration-300 group">
                  Solutions 
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'solutions' && renderMegaMenu('solutions')}
              </div>

              <a href="#about" className="px-6 py-3 text-gray-700 hover:text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50/80 transition-all duration-300">
                À Propos
              </a>
              <a href="#contact" className="px-6 py-3 text-gray-700 hover:text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50/80 transition-all duration-300">
                Contact
              </a>
            </nav>

            {/* Enhanced CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden lg:inline-flex bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:from-indigo-700 hover:via-purple-700 hover:to-emerald-700 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                  Demander un Devis
                  <Star className="w-5 h-5 ml-2" />
                </span>
              </Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 rounded-2xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-gray-100 shadow-2xl animate-slide-down">
            <div className="px-6 py-8 space-y-6">
              <a href="#accueil" className="flex items-center text-gray-700 hover:text-indigo-600 font-bold py-4 px-6 rounded-2xl hover:bg-indigo-50/80 transition-all">
                Accueil
              </a>
              <a href="#services" className="flex items-center text-gray-700 hover:text-indigo-600 font-bold py-4 px-6 rounded-2xl hover:bg-indigo-50/80 transition-all">
                Services
              </a>
              <a href="#solutions" className="flex items-center text-gray-700 hover:text-indigo-600 font-bold py-4 px-6 rounded-2xl hover:bg-indigo-50/80 transition-all">
                Solutions
              </a>
              <a href="#about" className="flex items-center text-gray-700 hover:text-indigo-600 font-bold py-4 px-6 rounded-2xl hover:bg-indigo-50/80 transition-all">
                À Propos
              </a>
              <a href="#contact" className="flex items-center text-gray-700 hover:text-indigo-600 font-bold py-4 px-6 rounded-2xl hover:bg-indigo-50/80 transition-all">
                Contact
              </a>
              <Button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:from-indigo-700 hover:via-purple-700 hover:to-emerald-700 text-white mt-6 font-black py-6 rounded-2xl shadow-xl text-lg">
                <Sparkles className="w-5 h-5 mr-3" />
                Demander un Devis
                <Star className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes mega-menu-enter {
          from { 
            opacity: 0; 
            transform: translateY(-20px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-mega-menu-enter {
          animation: mega-menu-enter 0.4s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default AdvancedMegaMenu;