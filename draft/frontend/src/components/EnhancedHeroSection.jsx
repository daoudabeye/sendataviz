import React, { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, BarChart3, Network, Zap, Database, Code, Brain } from 'lucide-react';

const EnhancedHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic floating elements with different animation patterns
  const FloatingIcon = ({ Icon, delay = 0, className = "", duration = "3s", pattern = "bounce" }) => (
    <div 
      className={`absolute ${className}`}
      style={{
        animation: `${pattern} ${duration} ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-emerald-400/20 rounded-full blur-lg"></div>
        <Icon className="relative w-8 h-8 text-indigo-500/60" />
      </div>
    </div>
  );

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Advanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50"></div>
        
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Interactive mouse gradient */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-700"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
        
        {/* Parallax background elements */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-2xl blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-violet-200/40 to-indigo-200/40 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Animated tech icons */}
        <FloatingIcon Icon={BarChart3} delay={0} className="top-32 left-1/4" pattern="float" duration="4s" />
        <FloatingIcon Icon={Network} delay={1.5} className="top-1/4 right-1/4" pattern="float" duration="5s" />
        <FloatingIcon Icon={Database} delay={3} className="bottom-1/3 left-1/3" pattern="float" duration="6s" />
        <FloatingIcon Icon={Code} delay={2} className="top-1/2 left-1/6" pattern="pulse" duration="3s" />
        <FloatingIcon Icon={Brain} delay={2.5} className="bottom-1/4 right-1/6" pattern="float" duration="4.5s" />
        <FloatingIcon Icon={Zap} delay={4} className="top-3/4 right-1/3" pattern="bounce" duration="2s" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-50 to-emerald-50 border border-indigo-200/50 rounded-full text-indigo-700 text-xs sm:text-sm font-semibold mb-12 sm:mb-8 shadow-lg backdrop-blur-sm animate-fade-in-up mt-24 sm:mt-16 lg:mt-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="hidden sm:inline">Expert WebFOCUS & Business Intelligence</span>
            <span className="sm:hidden">Expert WebFOCUS & BI</span>
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-emerald-500" />
          </div>

          {/* Main Headline with Enhanced Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
            <span className="block animate-slide-up-enhanced">
              <span className="relative">
                Transformez
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg blur-lg -z-10"></div>
              </span>
            </span>
            <span className="block animate-slide-up-enhanced bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent" style={{animationDelay: '0.3s'}}>
              vos données
            </span>
            <span className="block animate-slide-up-enhanced" style={{animationDelay: '0.6s'}}>
              en <span className="relative">
                insights
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 100 2 150 10C170 12 180 8 198 10" 
                        stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1"/>
                      <stop offset="50%" stopColor="#8b5cf6"/>
                      <stop offset="100%" stopColor="#10b981"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
            <span className="block animate-slide-up-enhanced text-4xl sm:text-5xl lg:text-6xl text-gray-700 font-bold" style={{animationDelay: '0.9s'}}>
              stratégiques
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{animationDelay: '1.2s'}}>
            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent font-semibold">SENDATAVIZ</span> 
            {" "}révolutionne votre approche de la data avec des solutions BI sur mesure, 
            l'intégration intelligente de systèmes et le développement d'applications métier de nouvelle génération.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex items-center">
                Découvrir nos Solutions
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="relative border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-105 group bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/0 via-indigo-50/50 to-indigo-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex items-center">
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Voir nos Réalisations
              </span>
            </Button>
          </div>

          {/* Enhanced Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '1.8s'}}>
            {[
              { number: "200+", label: "Projets Réalisés", color: "from-blue-500 to-indigo-600" },
              { number: "50+", label: "Clients Satisfaits", color: "from-emerald-500 to-teal-600" },
              { number: "15+", label: "Années d'Expérience", color: "from-purple-500 to-violet-600" },
              { number: "98%", label: "Taux de Satisfaction", color: "from-orange-500 to-red-600" }
            ].map((stat, index) => (
              <div key={index} className="group text-center transform hover:scale-110 transition-all duration-500 hover:-translate-y-2">
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                    <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-semibold text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-indigo-500 to-emerald-500 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs text-gray-500 font-medium">Scroll</span>
        </div>
      </div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes slide-up-enhanced {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-slide-up-enhanced {
          animation: slide-up-enhanced 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EnhancedHeroSection;