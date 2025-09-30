import AboutUs from "@/components/AboutUs";
import Quality from "@/components/Quality";

export default function Page() {
  return (
    <main className="">
      <section className="relative min-h-[70vh] bg-gradient-to-br from-[#F8F6F0] via-white to-[#F8F6F0] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#FFD700]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-6 py-3 mb-8 animate-fade-in-down">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm">Our Story</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2C2C2C] mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              ABOUT{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-transparent bg-clip-text">
                THE GRAND
              </span>{" "}
              COBBLER
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Discover the artistry behind Lagos&apos;s most trusted luxury leather restoration service
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">5000+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Items Restored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">2</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">100%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Satisfaction</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <AboutUs />
      <Quality />
    </main>
  );
}
