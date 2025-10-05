import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Award, Users, Target } from "lucide-react";
import { mockData } from "../../lib/mock";

export default function TeamSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-6">
            Notre Équipe
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Une équipe d'experts
            <span className="block text-indigo-600">passionnés par la data</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SENDATAVIZ réunit des experts reconnus en Business Intelligence, développement et intégration de systèmes pour vous accompagner dans vos projets les plus ambitieux.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockData.team.map((member, index) => (
            <Card
              key={member.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                {/* Avatar */}
                <div className="relative mx-auto mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 via-purple-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-indigo-600 font-semibold">{member.role}</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
                  {member.expertise}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>

                <Button variant="ghost" className="group/btn text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 h-auto font-semibold">
                  Voir le profil
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos valeurs</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ce qui nous guide dans chaque projet et nous permet de livrer des solutions d'exception à nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Nous visons l'excellence dans chaque livrable, avec un souci du détail qui fait la différence.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "Nous travaillons en partenariat étroit avec nos clients pour garantir le succès de chaque projet.",
              },
              {
                icon: Target,
                title: "Résultats",
                description:
                  "Nous nous concentrons sur des livrables concrets qui génèrent une valeur mesurable pour votre business.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Prêt à démarrer votre projet ?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4">
            Rencontrer l'équipe
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
