"use client";

import React, { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Adunni Okafor",
    location: "Victoria Island, Lagos",
    rating: 5,
    text: "The Grand Cobbler restored my vintage Louboutin heels to their original glory. The attention to detail was exceptional, and the color matching was perfect. I couldn't be happier with the service!",
    service: "Luxury Restoration",
  },
  {
    id: 2,
    name: "Chuka Emeka",
    location: "Lekki Phase 1",
    rating: 5,
    text: "My designer leather bag had a tear that I thought was irreparable. The team worked magic on it, and now it looks brand new. Their pickup and delivery service made it so convenient.",
    service: "Damage Repair",
  },
  {
    id: 3,
    name: "Folake Adebayo",
    location: "Ikoyi, Lagos",
    rating: 5,
    text: "Professional, reliable, and exceptional quality. They've been taking care of my luxury shoes and bags for 2 years now. The Grand Cobbler is truly the best in Lagos!",
    service: "Regular Maintenance",
  },
  {
    id: 4,
    name: "Kemi Johnson",
    location: "Osapa London",
    rating: 5,
    text: "Quick turnaround and excellent results. They restored the color on my faded leather handbag, and it looks absolutely stunning. Highly recommend their services!",
    service: "Color Matching",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToTestimonial = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[#F8F6F0] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-[#D4AF37] font-medium tracking-wider uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6">
            WHAT OUR <span className="gradient-text">CLIENTS</span> SAY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Main Testimonial Card */}
            <div
              className={`luxury-card bg-white rounded-2xl p-8 md:p-12 shadow-xl transition-all duration-500 ${
                isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              }`}
            >
              {/* Quote Icon */}
              <div className="text-6xl text-[#D4AF37]/20 font-serif mb-6">&quot;</div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#FFD700] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8 italic">
                {testimonials[currentIndex].text}
              </p>

              {/* Service Badge */}
              <div className="text-center mb-6">
                <span className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].service}
                </span>
              </div>

              {/* Client Info */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#D4AF37] font-medium">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#D4AF37] w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#D4AF37] w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#D4AF37] scale-125"
                    : "bg-gray-300 hover:bg-[#D4AF37]/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">500+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">1000+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Items Restored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">99%</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">10+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;