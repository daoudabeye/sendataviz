import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BarChart3, Network, Code2, ArrowRight, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';

const ServicesSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      BarChart3: BarChart3,
      Network: Network,
      Code2: Code2
    };
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-12 h-12" /> : null;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-6">
            Nos Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solutions IT d'excellence pour votre
            <span className="block text-indigo-600">transformation digitale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous combinons expertise technique et vision stratégique pour livrer des solutions 
            qui accélèrent votre croissance et optimisent vos performances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mockData.services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    Expertise
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-indigo-600 font-semibold text-lg">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="group/btn text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 h-auto font-semibold"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir <span className="text-indigo-600">SENDATAVIZ ?</span>
              </h3>
              <div className="space-y-4">
                {[
                  "Expertise reconnue en WebFOCUS et Business Intelligence",
                  "Approche sur mesure adaptée à vos enjeux métier",
                  "Équipe certifiée et expérimentée",
                  "Accompagnement de A à Z avec support continu",
                  "ROI mesurable et performances optimisées"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-indigo-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium mb-4">Taux de satisfaction client</div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Démarrer un Projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;