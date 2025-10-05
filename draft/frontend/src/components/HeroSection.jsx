import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, BarChart3, Network, Zap } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated floating elements
  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`absolute animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-200/30 rounded-lg animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-300/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-emerald-300/30 rounded-lg animate-pulse"></div>
        
        {/* Data visualization elements */}
        <FloatingElement delay={0} className="top-32 left-1/4">
          <BarChart3 className="w-8 h-8 text-indigo-400/60" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-1/4 right-1/4">
          <Network className="w-10 h-10 text-emerald-400/60" />
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-1/3 left-1/3">
          <Zap className="w-6 h-6 text-indigo-500/60" />
        </FloatingElement>

        {/* Parallax background effect */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            Expert WebFOCUS & Business Intelligence
          </div>

          {/* Main Headline with animated text */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block animate-slide-up">Transformez vos</span>
            <span className="block animate-slide-up bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent" style={{animationDelay: '0.2s'}}>
              données en insights
            </span>
            <span className="block animate-slide-up" style={{animationDelay: '0.4s'}}>stratégiques</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
            SENDATAVIZ accompagne votre transformation digitale avec des solutions BI sur mesure, 
            l'intégration de systèmes et le développement d'applications métier innovantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Découvrir nos Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Voir nos Réalisations
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '1s'}}>
            {[
              { number: "200+", label: "Projets Réalisés" },
              { number: "50+", label: "Clients Satisfaits" },
              { number: "15+", label: "Années d'Expérience" },
              { number: "98%", label: "Taux de Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;