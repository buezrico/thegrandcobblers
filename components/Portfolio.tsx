"use client";

import React, { useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    category: "Services",
    title: "Fast & Reliable Delivery",
    description:
      "We offer convenient pickup and delivery services for your luxury items, ensuring safe handling and timely service",
    image: "/images/1.jpg",
    beforeAfter: false,
  },
  {
    id: 2,
    category: "Accessories",
    title: "Belt Restoration & Repair",
    description:
      "Expert repair and restoration of luxury belts including buckle replacement, leather conditioning, and stitching",
    image: "/images/2.jpg",
    beforeAfter: false,
  },
  {
    id: 3,
    category: "Shoes",
    title: "Women's Footwear Restoration",
    description:
      "Professional restoration of ladies' shoes with meticulous craftsmanship and attention to detail",
    image: "/images/3.jpg",
    beforeAfter: false,
  },
  {
    id: 4,
    category: "Shoes",
    title: "Men's Shoe Repair Services",
    description:
      "Complete restoration of men's footwear including sole repair, leather conditioning, and color enhancement",
    image: "/images/4.jpg",
    beforeAfter: true,
  },
  {
    id: 5,
    category: "Shoes",
    title: "Women's Shoe Care & Restoration",
    description:
      "Expert care for ladies' shoes with professional cleaning, repair, and protective finishing",
    image: "/images/5.jpg",
    beforeAfter: true,
  },
  {
    id: 6,
    category: "Shoes",
    title: "Luxury Footwear Collection",
    description:
      "Premium restoration services for high-end women's shoes with specialized care and finishing",
    image: "/images/6.jpg",
    beforeAfter: false,
  },
  {
    id: 7,
    category: "Accessories",
    title: "Premium Belt Restoration",
    description:
      "Professional restoration of luxury belts with expert leather care and hardware refinishing",
    image: "/images/7.jpg",
    beforeAfter: false,
  },
  {
    id: 8,
    category: "Shoes",
    title: "Designer Slide Restoration",
    description:
      "Specialized care for luxury slides including cleaning, sole repair, and material conditioning",
    image: "/images/8.jpg",
    beforeAfter: false,
  },
  {
    id: 9,
    category: "Shoes",
    title: "Professional Shoe Repair",
    description:
      "Expert shoe restoration showcasing our precision craftsmanship and quality workmanship",
    image: "/images/repair1.jpg",
    beforeAfter: true,
  },
  {
    id: 10,
    category: "Shoes",
    title: "Advanced Footwear Restoration",
    description:
      "Comprehensive shoe repair services with specialized techniques and premium materials",
    image: "/images/repair3.jpg",
    beforeAfter: true,
  },
];

const categories = ["All", "Shoes", "Bags", "Accessories"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  const filterItems = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === category)
      );
    }
  };

  return (
    <section className="section-padding bg-[#F8F6F0]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-[#D4AF37] font-medium tracking-wider uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6">
            RESTORATION <span className="gradient-text">PORTFOLIO</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the transformation we bring to luxury items. Each piece
            tells a story of craftsmanship, attention to detail, and passion for
            excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterItems(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white shadow-lg transform scale-105"
                  : "bg-white text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="luxury-card bg-white rounded-2xl overflow-hidden group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-4">
              Ready to Transform Your Items?
            </h3>
            <p className="text-gray-600 mb-8">
              Join hundreds of satisfied customers who trust us with their most
              precious items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury px-8 py-4 rounded-lg">
                BOOK CONSULTATION
              </button>
              <button className="btn-luxury-outline px-8 py-4 rounded-lg">
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
