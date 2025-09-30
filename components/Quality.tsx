"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Quality = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("quality-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      location: "Lekki",
      phone: "08092345000",
      address: "Posh Plaza, Admiralty Way",
    },
    {
      location: "Osapa",
      phone: "08170335544",
      address: "Rindex Plaza, Osapa London",
    },
  ];

  return (
    <section id="quality-section" className="section-padding bg-[#F8F6F0]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-[#D4AF37] font-medium tracking-wider uppercase mb-4">
            UNCOMPROMISING EXCELLENCE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6">
            100% QUALITY <span className="gradient-text">GUARANTEE</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We provide immediate repair services that make you look and feel your best with unmatched precision and care.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`luxury-card bg-white rounded-2xl p-8 text-center group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Location Badge */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Location Title */}
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                {contact.location}
              </h3>

              {/* Phone Number */}
              <div className="text-2xl md:text-3xl font-extrabold text-[#D4AF37] mb-3 group-hover:scale-105 transition-transform duration-300">
                {contact.phone}
              </div>

              {/* Address */}
              <p className="text-gray-600 text-sm font-medium mb-6">
                {contact.address}
              </p>

              {/* Call Button */}
              <a
                href={`tel:${contact.phone}`}
                className="btn-luxury-outline px-6 py-2 text-sm rounded-lg w-full group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="/contact-us"
            className="bg-[#D4AF37] text-white px-8 py-4 font-bold text-lg rounded-lg hover:bg-[#2C2C2C] transition-all duration-300 hover:scale-105 transform shadow-lg"
          >
            BOOK APPOINTMENT
          </Link>
          <Link
            href="/services"
            className="bg-transparent text-[#D4AF37] px-8 py-4 font-bold text-lg rounded-lg border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hover:scale-105 transform"
          >
            VIEW SERVICES
          </Link>
        </div>

        {/* Trust Indicators */}
        <div
          className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">
              24/7
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
              Support Available
            </div>
          </div>
          <div className="text-center border-x border-[#D4AF37]/30">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">
              Same Day
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
              Quick Repairs
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">
              Insured
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
              Pickup & Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
