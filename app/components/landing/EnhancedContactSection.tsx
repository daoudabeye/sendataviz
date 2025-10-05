import React, { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles, Zap, MessageCircle } from "lucide-react";
import { GlassmorphismCard, GlassmorphismCardHeader, GlassmorphismCardContent } from "./GlassmorphismCard";
import { mockData } from "../../lib/mock";

export default function EnhancedContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const nav = useNavigation();
  const actionData = useActionData() as { ok?: boolean } | undefined;
  const isSubmitted = Boolean(actionData?.ok);
  const [attempted, setAttempted] = useState(false);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-400/5 to-pink-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-full text-emerald-700 text-sm font-bold mb-8 shadow-lg backdrop-blur-sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contactez-nous
            <Sparkles className="w-4 h-4 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Parlons de votre
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">projet ensemble</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Notre équipe d'<span className="font-bold text-emerald-600">experts passionnés</span> est à votre disposition pour étudier vos besoins et vous proposer la solution BI <span className="font-bold text-indigo-600">parfaitement adaptée</span> à votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <GlassmorphismCard className="bg-gradient-to-br from-white/80 to-white/60 border-white/40">
            <GlassmorphismCardHeader>
              <h3 className="text-3xl font-black text-gray-900 flex items-center">
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-8 h-8 text-emerald-500 mr-3" />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Sparkles className="w-8 h-8 text-indigo-500 mr-3" />
                    Demander un devis <span className="text-emerald-600">gratuit</span>
                  </>
                )}
              </h3>
            </GlassmorphismCardHeader>
            <GlassmorphismCardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Merci pour votre confiance !</h4>
                  <p className="text-gray-600 text-lg">Nous vous recontacterons dans les <span className="font-bold text-emerald-600">24 heures</span>.</p>
                </div>
              ) : (
                <Form method="post" className="space-y-6" onSubmit={() => setAttempted(true)} replace>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Prénom *</label>
                      <Input
                        name="firstName"
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        required
                        autoComplete="given-name"
                        className="border-2 border-gray-200/50 focus:border-indigo-500 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 font-medium"
                      />
                      {attempted && !formData.firstName && <p className="text-xs text-red-600">Prénom requis</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Nom *</label>
                      <Input
                        name="lastName"
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        required
                        autoComplete="family-name"
                        className="border-2 border-gray-200/50 focus:border-indigo-500 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 font-medium"
                      />
                      {attempted && !formData.lastName && <p className="text-xs text-red-600">Nom requis</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email professionnel *</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="votre.email@entreprise.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        autoComplete="email"
                        className="border-2 border-gray-200/50 focus:border-indigo-500 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 font-medium"
                      />
                      {attempted && !formData.email && <p className="text-xs text-red-600">Email requis</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Entreprise *</label>
                      <Input
                        name="company"
                        placeholder="Nom de votre entreprise"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        required
                        autoComplete="organization"
                        className="border-2 border-gray-200/50 focus:border-indigo-500 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 font-medium"
                      />
                      {attempted && !formData.company && <p className="text-xs text-red-600">Entreprise requise</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Téléphone</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+33 1 23 45 67 89"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        autoComplete="tel"
                        inputMode="tel"
                        className="border-2 border-gray-200/50 focus:border-indigo-500 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Service souhaité</label>
                      <Select onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="border-2 border-gray-200/50 focus:border-indigo-500 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 font-medium">
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl">
                          <SelectItem value="bi">Business Intelligence</SelectItem>
                          <SelectItem value="integration">Intégration de Systèmes</SelectItem>
                          <SelectItem value="development">Développement Sur Mesure</SelectItem>
                          <SelectItem value="consulting">Consulting IT</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="service" value={formData.service} />
                      {attempted && !formData.service && <p className="text-xs text-red-600">Veuillez sélectionner un service</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Décrivez votre projet *</label>
                    <Textarea
                      name="message"
                      placeholder="Parlez-nous de vos besoins, objectifs, et contraintes..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                      className="border-2 border-gray-200/50 focus:border-indigo-500 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-4 font-medium resize-none"
                      required
                    />
                    {attempted && !formData.message && <p className="text-xs text-red-600">Message requis</p>}
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Send className="mr-3 h-5 w-5" />
                    Envoyer ma demande
                    <Sparkles className="ml-3 h-5 w-5" />
                  </Button>
                </Form>
              )}
            </GlassmorphismCardContent>
          </GlassmorphismCard>

          {/* Contact info */}
          <div className="space-y-8">
            <GlassmorphismCard className="bg-gradient-to-br from-white/80 to-white/60 border-white/40">
              <GlassmorphismCardHeader>
                <h3 className="text-2xl font-black text-gray-900 flex items-center">
                  <Phone className="w-6 h-6 text-indigo-500 mr-3" />
                  Informations de contact
                </h3>
              </GlassmorphismCardHeader>
              <GlassmorphismCardContent className="space-y-6">
                {[
                  { icon: Mail, color: "indigo", title: "Email", info: mockData.company.email },
                  { icon: Phone, color: "emerald", title: "Téléphone", info: mockData.company.phone },
                  { icon: MapPin, color: "orange", title: "Adresse", info: "Paris, France" },
                  { icon: Clock, color: "purple", title: "Horaires", info: "Lun - Ven : 9h - 18h" },
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  const gradientMap: Record<string, string> = {
                    indigo: "from-indigo-400 to-indigo-500",
                    emerald: "from-emerald-400 to-emerald-500",
                    orange: "from-orange-400 to-orange-500",
                    purple: "from-purple-400 to-purple-500",
                  };
                  const gradient = gradientMap[contact.color] ?? "from-indigo-400 to-indigo-500";
                  return (
                    <div key={index} className="flex items-start space-x-4 bg-white/60 rounded-xl p-4 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{contact.title}</div>
                        <div className="text-gray-600 font-medium">{contact.info}</div>
                      </div>
                    </div>
                  );
                })}
              </GlassmorphismCardContent>
            </GlassmorphismCard>

            <GlassmorphismCard className="bg-gradient-to-br from-indigo-600/90 to-emerald-600/90 border-white/20 text-white">
              <GlassmorphismCardContent className="p-8">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-yellow-300 mx-auto mb-6 animate-pulse" />
                  <h4 className="text-2xl font-black mb-4">Réponse rapide garantie</h4>
                  <p className="text-indigo-100 mb-8 text-lg leading-relaxed">
                    Nous nous engageons à vous répondre dans les <span className="font-bold text-yellow-300">24 heures</span> pour étudier votre demande et programmer un échange personnalisé.
                  </p>
                  <div className="flex items-center justify-center space-x-6 bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-4xl font-black text-yellow-300">&lt; 24h</div>
                      <div className="text-sm text-indigo-100 font-medium">Temps de réponse</div>
                    </div>
                    <div className="w-px h-12 bg-white/30" />
                    <div className="text-center">
                      <div className="text-4xl font-black text-emerald-300">100%</div>
                      <div className="text-sm text-indigo-100 font-medium">Satisfaction garantie</div>
                    </div>
                  </div>
                </div>
              </GlassmorphismCardContent>
            </GlassmorphismCard>
          </div>
        </div>
      </div>
    </section>
  );
}
