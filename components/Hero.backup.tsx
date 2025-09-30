"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = ["RESTORE", "REVIVE", "RENEW", "PERFECT"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(wordInterval);
  }, [rotatingWords.length]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F8F6F0] via-white to-[#F5F3EE] overflow-hidden relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Main Content Container */}
      <div className="container mx-auto min-h-screen flex items-center px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center w-full py-20">

          {/* Left Content - Text Section */}
          <div className="space-y-8 lg:space-y-12">
            {/* Premium Badge */}
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#D4AF37]/5 via-[#FFD700]/10 to-[#D4AF37]/5 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm ${
                isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-4"
              } transition-all duration-1000 ease-out hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 group`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-ping"></div>
              </div>
              <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.15em] uppercase group-hover:text-[#B8860B] transition-colors duration-300">
                ✨ Master Craftsmen Since 2010
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="relative">
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight ${
                    isLoaded ? "animate-slide-in-left" : "opacity-0 -translate-x-12"
                  } transition-all duration-1200 ease-out`}
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="block text-[#1A1A1A] mb-1 font-black drop-shadow-sm">
                    WE{" "}
                    <span
                      className="inline-block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] bg-clip-text transition-all duration-500 ease-in-out"
                      key={currentWordIndex}
                    >
                      {rotatingWords[currentWordIndex]}
                    </span>
                  </span>
                  <span className="block text-[#1A1A1A] mb-1 font-black drop-shadow-sm">
                    YOUR LUXURY
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] bg-clip-text font-black drop-shadow-sm">
                    LEATHER GOODS
                  </span>
                </h1>

                {/* Decorative text accent */}
                <div
                  className={`absolute -right-4 top-4 text-[#D4AF37]/20 text-6xl lg:text-8xl font-black select-none pointer-events-none ${
                    isLoaded ? "animate-fade-in-up" : "opacity-0"
                  } transition-all duration-1500 ease-out`}
                  style={{ animationDelay: "1.0s" }}
                >
                  ✦
                </div>
              </div>

              {/* Enhanced subtitle with elegant typography */}
              <div
                className={`relative ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-6"
                } transition-all duration-1200 ease-out`}
                style={{ animationDelay: "0.8s" }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-[#3A3A3A] font-light leading-relaxed max-w-xl tracking-wide">
                  <span className="font-medium text-[#D4AF37]">Master artisans</span> breathing new life into your most treasured pieces with{" "}
                  <span className="italic text-[#2C2C2C] font-medium">uncompromising precision</span> and{" "}
                  <span className="font-medium text-[#D4AF37]">timeless elegance</span>.
                </p>
              </div>

              {/* Enhanced animated underline with gradient */}
              <div className="flex items-center gap-4">
                <div
                  className={`h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] rounded-full shadow-lg ${
                    isLoaded ? "w-32" : "w-0"
                  } transition-all duration-1500 ease-out`}
                  style={{ animationDelay: "1.2s" }}
                ></div>
                <div
                  className={`text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  } transition-all duration-1000 ease-out`}
                  style={{ animationDelay: "1.4s" }}
                >
                  Lagos Luxury
                </div>
              </div>
            </div>

            {/* Enhanced Value Proposition */}
            <div
              className={`space-y-4 ${
                isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-6"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "1.0s" }}
            >
              <div className="grid grid-cols-2 gap-6 max-w-lg">
                <div className="text-center">
                  <div className="text-sm font-semibold text-[#D4AF37] tracking-wide uppercase">Shoes</div>
                  <div className="text-xs text-[#6B6B6B] font-medium">Expert Restoration</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-[#D4AF37] tracking-wide uppercase">Bags</div>
                  <div className="text-xs text-[#6B6B6B] font-medium">Luxury Repair</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-[#D4AF37] tracking-wide uppercase">Leather</div>
                  <div className="text-xs text-[#6B6B6B] font-medium">Premium Care</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-[#D4AF37] tracking-wide uppercase">Belts</div>
                  <div className="text-xs text-[#6B6B6B] font-medium">Professional Fix</div>
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-5 pt-6 ${
                isLoaded ? "animate-scale-in" : "opacity-0 scale-95"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "1.4s" }}
            >
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-white font-bold rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 tracking-wide text-sm uppercase font-black">
                  <span>🎯 Get Free Estimate</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-xl hover:bg-[#D4AF37] hover:text-white transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2 tracking-wide text-sm uppercase font-black">
                  <span>📸 View Portfolio</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Enhanced Trust Indicators */}
            <div
              className={`flex items-center justify-between bg-gradient-to-r from-white/50 via-white/80 to-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#D4AF37]/20 shadow-lg max-w-lg ${
                isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-4"
              } transition-all duration-1200 ease-out hover:shadow-xl hover:border-[#D4AF37]/30`}
              style={{ animationDelay: "1.6s" }}
            >
              <div className="text-center group">
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-xs text-[#4A4A4A] font-bold tracking-wide uppercase">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent"></div>
              <div className="text-center group">
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  1K+
                </div>
                <div className="text-xs text-[#4A4A4A] font-bold tracking-wide uppercase">Items Restored</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent"></div>
              <div className="text-center group">
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  5.0★
                </div>
                <div className="text-xs text-[#4A4A4A] font-bold tracking-wide uppercase">Google Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Showcase */}
          <div className="relative lg:h-[600px] xl:h-[700px]">
            {/* Main Showcase Image */}
            <div
              className={`relative h-80 lg:h-96 xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl group ${
                isLoaded ? "animate-scale-in" : "opacity-0 scale-90"
              } transition-all duration-1500 ease-out`}
              style={{ animationDelay: "0.6s" }}
            >
              {/* Background glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/20 to-[#FFC107]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-colors duration-500">
                <Image
                  src="/images/3.jpg"
                  alt="Expert leather craftsmanship"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500"></div>

                {/* Enhanced premium floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-[#D4AF37]/30 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-300">
                  <div className="text-base font-black text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text">
                    ✨ Master Artisans
                  </div>
                  <div className="text-xs text-[#4A4A4A] font-bold tracking-wide uppercase mt-1">
                    Lagos Premium Service
                  </div>
                </div>

                {/* Enhanced quality badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-white px-5 py-3 rounded-2xl text-sm font-black shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border border-white/20">
                  🏆 15+ Years Excellence
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-[#D4AF37]/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-[#D4AF37]/30 rounded-br-3xl"></div>
              </div>
            </div>

            {/* Enhanced Floating Product Cards */}
            <div
              className={`absolute -top-4 -right-4 group ${
                isLoaded ? "animate-slide-in-right" : "opacity-0 translate-x-12"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "1.0s" }}
            >
              <div className="relative w-32 h-32">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37]/30 to-[#FFD700]/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-3 border-white/40 group-hover:border-[#D4AF37]/60 transition-all duration-300 group-hover:shadow-2xl">
                  <Image
                    src="/images/4.jpg"
                    alt="Premium shoe restoration"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            <div
              className={`absolute bottom-4 -left-4 group ${
                isLoaded ? "animate-slide-in-left" : "opacity-0 -translate-x-12"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "1.2s" }}
            >
              <div className="relative w-28 h-28">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#FFD700]/30 to-[#D4AF37]/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-3 border-white/40 group-hover:border-[#D4AF37]/60 transition-all duration-300 group-hover:shadow-2xl">
                  <Image
                    src="/images/6.jpg"
                    alt="Expert leather repair"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Additional floating elements */}
            <div
              className={`absolute bottom-16 right-8 group ${
                isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "1.6s" }}
            >
              <div className="relative w-20 h-20">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37]/30 to-[#FFC107]/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl border-3 border-white/40 group-hover:border-[#D4AF37]/60 transition-all duration-300 group-hover:shadow-2xl">
                  <Image
                    src="/images/2.jpg"
                    alt="Premium bag restoration"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Enhanced service highlight badge */}
            <div
              className={`absolute top-12 right-12 group ${
                isLoaded ? "animate-scale-in" : "opacity-0 scale-75"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "1.8s" }}
            >
              <div className="relative bg-gradient-to-r from-white/90 to-white/95 backdrop-blur-md rounded-full px-5 py-3 shadow-xl border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/50 transition-all duration-300 group-hover:scale-110">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-pulse"></div>
                  <span className="text-xs font-black text-[#2C2C2C] tracking-[0.1em] uppercase">
                    ⚡ Same Day Service
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced quality badge */}
            <div
              className={`absolute bottom-32 left-8 group ${
                isLoaded ? "animate-slide-in-left" : "opacity-0 -translate-x-8"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "2.0s" }}
            >
              <div className="relative bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] rounded-2xl px-4 py-3 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border border-white/20">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-white tracking-wide">⭐ 5.0 Rating</span>
                </div>
              </div>
            </div>

            <div
              className={`absolute top-1/3 -right-8 group ${
                isLoaded ? "animate-float" : "opacity-0"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "1.4s" }}
            >
              <div className="relative w-24 h-24">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#FFC107]/30 to-[#D4AF37]/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-3 border-white/40 group-hover:border-[#D4AF37]/60 transition-all duration-300 group-hover:shadow-2xl">
                  <Image
                    src="/images/shoe.jpg"
                    alt="Luxury shoe craftsmanship"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Additional small floating image */}
            <div
              className={`absolute top-20 left-4 group ${
                isLoaded ? "animate-float" : "opacity-0"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "2.2s" }}
            >
              <div className="relative w-16 h-16">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#FFD700]/30 to-[#FFC107]/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white/40 group-hover:border-[#D4AF37]/60 transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    src="/images/3.jpg"
                    alt="Quality craftsmanship"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div
              className={`absolute top-8 left-8 w-16 h-16 border-3 border-[#D4AF37]/20 rounded-full ${
                isLoaded ? "animate-pulse" : "opacity-0"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "1.8s" }}
            >
              <div className="absolute inset-2 border-2 border-[#FFD700]/30 rounded-full"></div>
              <div className="absolute inset-4 bg-[#D4AF37]/10 rounded-full"></div>
            </div>

            <div
              className={`absolute bottom-16 right-16 group ${
                isLoaded ? "animate-spin-slow" : "opacity-0"
              } transition-all duration-1200 ease-out`}
              style={{ animationDelay: "2.0s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 rounded-xl rotate-45 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-1 bg-gradient-to-br from-[#FFD700]/30 to-[#D4AF37]/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
          isLoaded ? "animate-bounce" : "opacity-0 translate-y-4"
        } transition-all duration-1200 ease-out`}
        style={{
          animationDelay: "2.2s",
          animationDuration: "2s",
          animationIterationCount: "infinite"
        }}
      >
        <div
          className="group cursor-pointer flex flex-col items-center"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          {/* Mouse-style scroll indicator */}
          <div className="relative w-7 h-12 border-2 border-[#D4AF37]/50 rounded-full flex items-start justify-center pt-2 group-hover:border-[#D4AF37] transition-all duration-300 group-hover:scale-110">
            <div className="w-1 h-3 bg-[#D4AF37]/70 rounded-full animate-pulse group-hover:bg-[#D4AF37] transition-colors duration-300"></div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Text label */}
          <p className="text-[#6B6B6B] text-xs mt-3 tracking-[0.2em] font-bold group-hover:text-[#D4AF37] transition-colors duration-300 uppercase">
            🔽 Discover More
          </p>

          {/* Animated chevron */}
          <div className="mt-1 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0.5">
            <svg className="w-4 h-4 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;