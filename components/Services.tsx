"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import art from "../public/images/8.jpg";
import bad_shoe from "../public/images/2.jpg";
import fast_delivery from "../public/images/1.jpg";
import repair from "../public/images/6.jpg";
import scissors from "../public/images/7.jpg";
import wipe from "../public/images/5.jpg";

const Services = () => {
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

    const section = document.getElementById("services-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-section" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-[#D4AF37] font-medium tracking-wider uppercase mb-4">
            EXPERT CARE FOR EVERY PIECE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6">
            WHAT WE <span className="gradient-text">OFFER</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            From luxury restoration to quick repairs, our comprehensive services ensure your most treasured items receive the care they deserve.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`luxury-card bg-white rounded-2xl p-8 text-center group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-[#D4AF37]/20 group-hover:ring-[#D4AF37]/40 transition-all duration-300">
                  <Image
                    src={service.icon}
                    alt={service.service}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                {service.service}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA Button */}
              <button className="btn-luxury-outline px-6 py-2 text-sm rounded-lg w-full group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                Learn More
              </button>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-gray-600 mb-8">
              Don&apos;t see what you&apos;re looking for? We offer bespoke solutions for unique restoration challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury px-8 py-4 rounded-lg">
                GET CUSTOM QUOTE
              </button>
              <button className="btn-luxury-outline px-8 py-4 rounded-lg">
                VIEW ALL SERVICES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

const services = [
  {
    service: "Luxury Restoration",
    description:
      "Full-service repair and rejuvenation of high-end shoes, bags, and leather goods with meticulous attention to detail.",
    icon: repair,
  },
  {
    service: "Color Matching & Recoloring",
    description:
      "Precision color restoration to match original tones or refresh faded leather using premium pigments and techniques.",
    icon: art,
  },
  {
    service: "Damage Repair",
    description:
      "Expert fixing of scuffs, scratches, tears, worn edges, and structural damage with invisible repair techniques.",
    icon: bad_shoe,
  },
  {
    service: "Quick Fix Services",
    description:
      "Fast, professional repairs for minor issues — perfect for when you're on a tight schedule without compromising quality.",
    icon: scissors,
  },
  {
    service: "Contactless Pickup & Delivery",
    description:
      "Convenient door-to-door service to collect and return your items safely with full insurance coverage.",
    icon: fast_delivery,
  },
  {
    service: "Cleaning & Conditioning",
    description:
      "Deep cleaning, stain removal, and leather conditioning to maintain luxury finishes and extend item lifespan.",
    icon: wipe,
  },
];
