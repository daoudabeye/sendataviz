import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
            Contact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parlons de votre
            <span className="block text-emerald-600">projet ensemble</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour étudier vos besoins 
            et vous proposer la solution BI parfaitement adaptée à votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {isSubmitted ? 'Message envoyé !' : 'Demander un devis gratuit'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Merci pour votre message !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous recontacterons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Prénom"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                        className="border-gray-200 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Nom"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                        className="border-gray-200 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Email and Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Email professionnel"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="border-gray-200 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Entreprise"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        required
                        className="border-gray-200 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Phone and Service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="tel"
                        placeholder="Téléphone"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="border-gray-200 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <Select onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger className="border-gray-200 focus:border-indigo-500">
                          <SelectValue placeholder="Service souhaité" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bi">Business Intelligence</SelectItem>
                          <SelectItem value="integration">Intégration de Systèmes</SelectItem>
                          <SelectItem value="development">Développement Sur Mesure</SelectItem>
                          <SelectItem value="consulting">Consulting IT</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Textarea
                      placeholder="Décrivez votre projet ou vos besoins..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      className="border-gray-200 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 text-lg font-semibold"
                  >
                    Envoyer ma demande
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">{mockData.company.email}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-gray-600">{mockData.company.phone}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <div className="text-gray-600">{mockData.company.address}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Horaires</div>
                    <div className="text-gray-600">Lun - Ven : 9h - 18h</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-indigo-600 to-emerald-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Réponse rapide garantie</h3>
                <p className="text-indigo-100 mb-6">
                  Nous nous engageons à vous répondre dans les 24 heures 
                  pour étudier votre demande et programmer un échange.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold">&lt; 24h</div>
                  <div className="text-sm text-indigo-100">Temps de réponse moyen</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;