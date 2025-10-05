import React from "react";
import { Button } from "./ui/button";
import { BarChart3, Network, Code2, ArrowRight, CheckCircle, Sparkles, Zap, Trophy, Target, UsersRound, Handshake, TrendingUp } from "lucide-react";
import { GlassmorphismCard, GlassmorphismCardHeader, GlassmorphismCardContent } from "./GlassmorphismCard";
import { mockData } from "../../lib/mock";

function getIcon(iconName: string) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    BarChart3,
    Network,
    Code2,
  };
  const Icon = icons[iconName];
  return Icon ? <Icon className="w-12 h-12" /> : null;
}

function getGradientColors(index: number) {
  const gradients = [
    "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
    "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    "from-orange-500/10 via-red-500/10 to-pink-500/10",
  ];
  return gradients[index % gradients.length];
}

export default function PremiumServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-50 to-emerald-50 border border-indigo-200/50 rounded-full text-indigo-700 text-sm font-bold mb-8 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-emerald-500" />
            Nos Services Premium
            <Zap className="w-4 h-4 ml-2 text-indigo-500" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Solutions IT d'<span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">excellence</span>
            <br />
            <span className="text-4xl lg:text-5xl text-gray-600">pour votre transformation digitale</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Nous combinons <span className="font-bold text-indigo-600">expertise technique</span> et
            <span className="font-bold text-emerald-600"> vision stratégique</span> pour livrer des solutions
            qui accélèrent votre croissance et optimisent vos performances.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mockData.services.map((service, index) => (
            <GlassmorphismCard key={service.id} className={`bg-gradient-to-br ${getGradientColors(index)} border-white/30`}>
              <GlassmorphismCardHeader className="pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className={`relative p-4 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">{getIcon(service.icon)}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-emerald-600 bg-emerald-50/80 px-3 py-1 rounded-full">Premium</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-indigo-600 font-bold text-lg">{service.subtitle}</p>
              </GlassmorphismCardHeader>

              <GlassmorphismCardContent>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 bg-white/50 rounded-lg p-3 backdrop-blur-sm">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group/btn w-full bg-gradient-to-r from-indigo-50 to-emerald-50 hover:from-indigo-100 hover:to-emerald-100 text-indigo-600 hover:text-indigo-700 font-bold py-4 rounded-xl border border-indigo-200/50 hover:border-indigo-300 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </GlassmorphismCardContent>
            </GlassmorphismCard>
          ))}
        </div>

        {/* Why choose us */}
        <GlassmorphismCard className="bg-gradient-to-br from-indigo-50/80 to-emerald-50/80 border-white/40 p-0">
          <div className="p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-700 text-sm font-bold mb-8">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Pourquoi nous choisir
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  L'excellence
                  <span className="block bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">SENDATAVIZ</span>
                </h3>
                <div className="space-y-4">
                  {[ 
                    { text: "Expertise reconnue en WebFOCUS et Business Intelligence", Icon: Trophy },
                    { text: "Approche sur mesure adaptée à vos enjeux métier", Icon: Target },
                    { text: "Équipe certifiée et expérimentée", Icon: UsersRound },
                    { text: "Accompagnement de A à Z avec support continu", Icon: Handshake },
                    { text: "ROI mesurable et performances optimisées", Icon: TrendingUp },
                  ].map(({ text, Icon }, idx) => (
                    <div key={idx} className="flex items-start bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-white/50">
                      <div className="mr-4 mt-1 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-gray-700 text-lg font-medium leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <GlassmorphismCard className="bg-gradient-to-br from-white/90 to-white/70 border-white/50 inline-block">
                  <div className="p-12">
                    <div className="text-7xl font-black bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent mb-4">98%</div>
                    <div className="text-gray-600 font-bold text-lg mb-8">Taux de satisfaction client</div>
                    <Button className="bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Démarrer un Projet
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </GlassmorphismCard>
              </div>
            </div>
          </div>
        </GlassmorphismCard>
      </div>
    </section>
  );
}
