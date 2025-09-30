"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import cobbler from "../public/images/repair1.jpg";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Items Restored" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section
      id="about-section"
      className="section-padding bg-gradient-to-b from-white to-[#F8F6F0]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-[#D4AF37] font-medium tracking-wider uppercase mb-4">
            WHERE LUXURY MEETS CRAFT
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6">
            WHO <span className="gradient-text">WE</span> ARE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div
            className={`w-full lg:w-[55%] ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <span className="font-bold text-[#D4AF37]">THE GRAND COBBLER</span> is Lagos&apos;s finest and most reliable shoes and
                  leather goods repair company. An on-demand service providing modern
                  aftercare that combines traditional craftsmanship with contemporary luxury.
                </p>

                <p className="text-base">
                  We specialise in shoes, bags and luggage repairs, leather goods
                  restoration, and customised footwear with an unwavering commitment to excellence.
                </p>

                <div className="bg-[#D4AF37]/10 p-6 rounded-xl border-l-4 border-[#D4AF37]">
                  <p className="text-base font-medium text-[#2C2C2C] italic">
                    &quot;Our mission is to have you fall in love with your favourite pieces
                    all over again.&quot;
                  </p>
                </div>

                <p className="text-base">
                  We aim to provide an intuitive service that seamlessly fits with
                  your busy lifestyle, offering both in-store and convenient pickup & delivery options.
                </p>

                <p className="text-base">
                  With over <span className="font-bold text-[#D4AF37]">10 years of experience</span>,
                  The Grand Cobbler has built a reputation for excellence in Lagos&apos;s luxury market.
                </p>

                <p className="text-base">
                  Our comprehensive range of services includes cleaning, repair, restoration,
                  and specialized aftercare for watches and glasses, ensuring every item receives expert attention.
                </p>
              </div>

              {/* Locations */}
              <div className="space-y-4 pt-6">
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-4">Our Locations</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-[#D4AF37]/20">
                    <h5 className="font-semibold text-[#D4AF37] mb-2">Head Office</h5>
                    <p className="text-sm text-gray-600">Posh Plaza, Admiralty Way, Lekki Phase 1</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-[#D4AF37]/20">
                    <h5 className="font-semibold text-[#D4AF37] mb-2">Branch Office</h5>
                    <p className="text-sm text-gray-600">Rindex Plaza, Osapa London (adjacent to Victory Park Estate)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`w-full lg:w-[45%] ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={cobbler}
                  alt="Professional cobbler at work"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-[#D4AF37] mb-1">10+</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.9s" }}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="luxury-card bg-white p-6 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
