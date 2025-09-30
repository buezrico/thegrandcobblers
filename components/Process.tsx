"use client";

import React, { useEffect, useState } from "react";

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("process-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const processSteps = [
    {
      number: "01",
      title: "REQUEST",
      description:
        "Send us pictures of your worn shoes, bags, belts, or accessories via WhatsApp or DM for instant price confirmation and expert assessment.",
      icon: "📱",
      color: "from-[#D4AF37] to-[#FFD700]",
    },
    {
      number: "02",
      title: "COLLECTION",
      description:
        "Choose between visiting our luxury showrooms or enjoy our insured pickup service. We'll discuss repair timeline and provide detailed service breakdown.",
      icon: "🚗",
      color: "from-[#FFD700] to-[#FFC107]",
    },
    {
      number: "03",
      title: "REPAIR",
      description:
        "Our master craftsmen work their magic using premium materials and traditional techniques combined with modern technology for perfect restoration.",
      icon: "🔨",
      color: "from-[#FFC107] to-[#D4AF37]",
    },
    {
      number: "04",
      title: "ENJOY",
      description:
        "Collect your beautifully restored items in-store or request convenient delivery. Every piece comes with our quality guarantee and care instructions.",
      icon: "✨",
      color: "from-[#D4AF37] to-[#FFD700]",
    },
  ];

  return (
    <section id="process-section" className="section-padding bg-[#F8F6F0]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-[#D4AF37] font-medium tracking-wider uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6">
            HOW WE <span className="gradient-text">WORK</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A seamless process, built around you. From consultation to completion, we ensure excellence at every step.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-full transform -translate-y-1/2"></div>

            {/* Process Steps */}
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative text-center ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Circle */}
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color}
                    flex items-center justify-center text-white text-2xl font-bold shadow-lg relative z-10
                    ${activeStep === index ? "scale-125 ring-4 ring-[#D4AF37]/30" : ""}
                    transition-all duration-500`}
                  >
                    <span className="text-3xl">{step.icon}</span>
                  </div>

                  {/* Step Content */}
                  <div className="luxury-card bg-white p-6 rounded-2xl">
                    <div className="text-sm font-bold text-[#D4AF37] mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 ${
                  isVisible ? "animate-slide-in-left" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Circle and Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color}
                    flex items-center justify-center text-white text-xl font-bold shadow-lg
                    transition-all duration-500`}
                  >
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-[#D4AF37] to-[#FFD700] rounded-full mt-4"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="luxury-card bg-white p-6 rounded-2xl flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-[#D4AF37]">{step.number}</span>
                    <h3 className="text-xl font-bold text-[#2C2C2C]">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "1s" }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">24hrs</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Average Turnaround</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">Free</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Consultation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">Insured</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Collection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">100%</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "1.3s" }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-4">
              Ready to Start Your Restoration Journey?
            </h3>
            <p className="text-gray-600 mb-8">
              Get started today with a free consultation and discover how we can bring your favorite items back to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury px-8 py-4 rounded-lg">
                START CONSULTATION
              </button>
              <button className="btn-luxury-outline px-8 py-4 rounded-lg">
                CALCULATE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
