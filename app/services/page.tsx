import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Page() {
  return (
    <main className="">
      <section className="relative min-h-[70vh] bg-gradient-to-br from-[#F8F6F0] via-white to-[#F8F6F0] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#FFD700]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#FFC107]/8 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-6 py-3 mb-8 animate-fade-in-down">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm">What We Offer</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2C2C2C] mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              OUR{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-transparent bg-clip-text">
                PREMIUM
              </span>{" "}
              SERVICES
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              From luxury restoration to quick repairs, we bring your treasured items back to life with expert craftsmanship
            </p>

            {/* Service Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="luxury-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="text-3xl mb-3">👠</div>
                <div className="font-semibold text-[#2C2C2C] text-sm">Shoe Restoration</div>
              </div>
              <div className="luxury-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="text-3xl mb-3">👜</div>
                <div className="font-semibold text-[#2C2C2C] text-sm">Bag Repair</div>
              </div>
              <div className="luxury-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="text-3xl mb-3">👔</div>
                <div className="font-semibold text-[#2C2C2C] text-sm">Belt Services</div>
              </div>
              <div className="luxury-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="text-3xl mb-3">✨</div>
                <div className="font-semibold text-[#2C2C2C] text-sm">Color Matching</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <button className="btn-luxury px-8 py-4 rounded-full text-sm">
                EXPLORE ALL SERVICES
              </button>
            </div>

          </div>
        </div>
      </section>

      <Services />
      <Process />
    </main>
  );
}
