import React from 'react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl lg:text-3xl font-bold mb-6">
                <span className="text-indigo-400">SENDA</span>
                <span className="text-emerald-400">TAVIZ</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Expert en Business Intelligence, intégration de systèmes et développement sur mesure. 
                Nous transformons vos données en insights stratégiques.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Facebook, href: '#', label: 'Facebook' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  'Business Intelligence',
                  'WebFOCUS Solutions',
                  'Intégration de Systèmes',
                  'Développement Web',
                  'Applications Mobiles',
                  'Consulting IT'
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3">
                {[
                  'Finance & Banque',
                  'Industrie',
                  'Retail & E-commerce',
                  'Santé & Pharma',
                  'Tableaux de Bord',
                  'Reporting Avancé'
                ].map((solution, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{mockData.company.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{mockData.company.phone}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Paris, France</span>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold mb-3">Newsletter</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Restez informé de nos dernières actualités et innovations.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-emerald-400"
                  />
                  <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-l-none px-3">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SENDATAVIZ. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                CGV
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Plan du Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;