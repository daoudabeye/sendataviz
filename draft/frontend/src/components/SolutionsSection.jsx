import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowRight, TrendingUp, Users, ShoppingCart, Heart, Building, Factory } from 'lucide-react';
import { mockData } from '../mock';

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('finance');

  const sectorIcons = {
    'Finance & Banque': Building,
    'Industrie & Manufacturing': Factory,
    'Retail & E-commerce': ShoppingCart,
    'Santé & Pharma': Heart
  };

  const getSectorIcon = (sector) => {
    const Icon = sectorIcons[sector] || Building;
    return <Icon className="w-8 h-8" />;
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
            Solutions Sectorielles
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des solutions adaptées à
            <span className="block text-emerald-600">votre métier</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous comprenons les défis spécifiques de chaque secteur et proposons 
            des solutions BI personnalisées qui répondent à vos enjeux métier.
          </p>
        </div>

        {/* Solutions Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-12 bg-white/50 backdrop-blur-sm">
            {mockData.solutions.map((solution, index) => (
              <TabsTrigger 
                key={solution.id} 
                value={solution.sector.toLowerCase().replace(/[^a-z0-9]/g, '')}
                className="text-center p-4 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                    {getSectorIcon(solution.sector)}
                  </div>
                  <span className="font-semibold text-sm">{solution.sector}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {mockData.solutions.map((solution, index) => (
            <TabsContent 
              key={solution.id} 
              value={solution.sector.toLowerCase().replace(/[^a-z0-9]/g, '')}
              className="mt-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Solutions pour le secteur
                      <span className="block text-indigo-600">{solution.sector}</span>
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Défis adressés</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {solution.challenges.map((challenge, idx) => (
                        <div key={idx} className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                          <div className="text-center">
                            <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                            <span className="text-sm font-medium text-gray-700">{challenge}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Découvrir nos solutions {solution.sector}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Benefits */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Résultats obtenus</h4>
                  <div className="space-y-6">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                          <span className="text-emerald-600 font-bold text-lg">{idx + 1}</span>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-gray-900">{benefit}</div>
                          <div className="text-sm text-gray-600 mt-1">Impact mesurable sur vos performances</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Votre secteur n'est pas listé ?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous nous adaptons à tous les secteurs d'activité. Contactez-nous pour discuter 
            de vos besoins spécifiques et découvrir comment nous pouvons vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Discuter de mon projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-600">
              Voir tous nos cas d'usage
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;