"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
  ];

  const rightNavLinks = [
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "py-3 backdrop-blur-xl bg-white/85 shadow-xl shadow-black/10"
          : "py-6 lg:py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Left Navigation */}
          <div className="absolute left-0 flex items-center space-x-10">
            {leftNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold tracking-wide transition-all duration-300 relative group text-sm uppercase ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#D4AF37]"
                    : "text-[#2C2C2C] hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Centered Brand */}
          <Link
            href="/"
            className={`font-black text-xl lg:text-2xl xl:text-3xl tracking-wider transition-all duration-500 text-center ${
              isScrolled
                ? "text-[#1A1A1A] hover:scale-105"
                : "text-[#1A1A1A] hover:scale-110"
            } group relative`}
            onClick={() => setIsOpen(false)}
          >
            <span className="relative">
              THE{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-transparent bg-clip-text font-black drop-shadow-sm">
                GRAND
              </span>{" "}
              COBBLER

              {/* Subtle underline accent */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transition-all duration-500 group-hover:w-20"></div>
            </span>
          </Link>

          {/* Right Navigation */}
          <div className="absolute right-0 flex items-center space-x-6">
            {rightNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold tracking-wide transition-all duration-300 relative group text-sm uppercase ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#D4AF37]"
                    : "text-[#2C2C2C] hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              href="/contact-us"
              className={`relative px-6 py-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 rounded-xl overflow-hidden group ${
                isScrolled
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white hover:shadow-lg hover:scale-105"
                  : "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white hover:scale-105"
              }`}
            >
              <span className="relative z-10">✨ Book Now</span>
              {!isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden flex justify-between items-center">
          {/* Mobile Brand */}
          <Link
            href="/"
            className={`font-black text-lg sm:text-xl tracking-wider transition-all duration-300 ${
              isScrolled ? "text-[#D4AF37]" : "text-[#2C2C2C]"
            } hover:scale-105`}
            onClick={() => setIsOpen(false)}
          >
            THE{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-transparent bg-clip-text font-black">
              GRAND
            </span>{" "}
            COBBLER
          </Link>

          {/* Enhanced Mobile Menu Button */}
          <button
            className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 group ${
              isScrolled
                ? "bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white shadow-lg"
                : "glass border border-[#D4AF37]/30 text-[#2C2C2C] hover:border-[#D4AF37]/50"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 group-hover:bg-current ${
                  isOpen ? "rotate-45 top-3" : ""
                }`}
              />
              <span
                className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute top-4.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 group-hover:bg-current ${
                  isOpen ? "-rotate-45 top-3" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full transition-all duration-300 z-40">
          <div className="backdrop-blur-xl bg-white/95 border-b border-[#D4AF37]/30 shadow-2xl">
            <div className="container mx-auto px-6 py-8">
              <ul className="space-y-6">
                {/* Combine all nav links for mobile */}
                {[...leftNavLinks, ...rightNavLinks].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-[#2C2C2C] font-bold text-lg tracking-wide hover:text-[#D4AF37] transition-all duration-300 py-3 border-b border-[#D4AF37]/10 last:border-b-0 uppercase group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}

                {/* Enhanced Mobile CTA */}
                <li className="pt-6">
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 text-center text-sm font-black tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    ✨ Book Your Appointment
                  </Link>
                </li>

                {/* Mobile Trust Indicator */}
                <li className="pt-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-full">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase">
                      Lagos Premium Service
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
