import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { mockData } from "../../lib/mock";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === mockData.testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev === mockData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev === 0 ? mockData.testimonials.length - 1 : prev - 1));
  };

  const currentReview = mockData.testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400/10 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-400/10 rounded-lg animate-spin" style={{ animationDuration: "8s" }} />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
              Témoignages Clients
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ce que disent nos clients
              <span className="block text-emerald-400">de nos solutions</span>
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Découvrez comment SENDATAVIZ a transformé les opérations de nos clients avec des solutions BI innovantes et performantes.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Quote */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-4 w-12 h-12 text-emerald-400/30" />
                      <blockquote className="text-xl lg:text-2xl font-medium text-white leading-relaxed mb-6 pl-8">"{currentReview.content}"</blockquote>
                    </div>
                    <div className="flex items-center mb-4">
                      {Array.from({ length: currentReview.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="text-center lg:text-left">
                    <div className="mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto lg:mx-0">
                        {currentReview.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">{currentReview.name}</div>
                      <div className="text-emerald-400 font-medium">{currentReview.role}</div>
                      <div className="text-indigo-200 text-sm">{currentReview.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button variant="ghost" size="lg" onClick={prevTestimonial} className="text-white hover:text-emerald-400 hover:bg-white/10 p-3">
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <div className="flex space-x-3">
                {mockData.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-emerald-400 scale-125" : "bg-white/30 hover:bg-white/50"}`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <Button variant="ghost" size="lg" onClick={nextTestimonial} className="text-white hover:text-emerald-400 hover:bg-white/10 p-3">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {mockData.stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-indigo-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
