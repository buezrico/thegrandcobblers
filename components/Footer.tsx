"use client";

import Image from "next/image";
import map from "../public/images/location-pin.png";
import mail from "../public/images/mail.png";
import facebook from "../public/images/facebook.png";
import instagram from "../public/images/instagram.png";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Luxury Restoration", href: "/services" },
      { name: "Color Matching", href: "/services" },
      { name: "Quick Repairs", href: "/services" },
      { name: "Pickup & Delivery", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Process", href: "/#process" },
      { name: "Portfolio", href: "/#portfolio" },
      { name: "Contact", href: "/contact-us" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: facebook,
      handle: "The Grand Cobbler",
      href: "#",
    },
    {
      name: "Instagram (Lekki)",
      icon: instagram,
      handle: "@grandcobbler",
      href: "#",
    },
    {
      name: "Instagram (Osapa)",
      icon: instagram,
      handle: "@grandcobbler_osapa",
      href: "#",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                THE{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-transparent bg-clip-text">
                  GRAND
                </span>{" "}
                COBBLER
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Lagos&apos;s finest luxury leather goods restoration service. We combine traditional craftsmanship with modern techniques to bring your most treasured items back to life.
              </p>
            </div>

            {/* Locations */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">Our Locations</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-[#D4AF37]/20">
                  <Image src={map} alt="location" width={24} height={24} className="mt-1" />
                  <div>
                    <h5 className="font-semibold text-[#D4AF37] mb-1">Head Office</h5>
                    <p className="text-sm text-gray-300">
                      Posh Plaza, Admiralty Way<br />Lekki Phase 1
                    </p>
                    <a href="tel:08092345000" className="text-sm text-[#FFD700] hover:text-white transition-colors">
                      08092345000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-[#D4AF37]/20">
                  <Image src={map} alt="location" width={24} height={24} className="mt-1" />
                  <div>
                    <h5 className="font-semibold text-[#D4AF37] mb-1">Branch Office</h5>
                    <p className="text-sm text-gray-300">
                      Rindex Plaza, Osapa London<br />Opposite Victory Park Estate
                    </p>
                    <a href="tel:08170335544" className="text-sm text-[#FFD700] hover:text-white transition-colors">
                      08170335544
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-6">Company</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">Follow Us</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-[#FFD700] transition-colors duration-300 group"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm">{social.handle}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} The Grand Cobbler. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Terms of Service
              </Link>
              <div className="flex items-center gap-2">
                <Image src={mail} alt="email" width={16} height={16} />
                <a
                  href="mailto:info@thegrandcobbler.com"
                  className="text-sm text-[#FFD700] hover:text-white transition-colors"
                >
                  info@thegrandcobbler.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;