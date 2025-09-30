'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-luxury px-8 py-4 rounded-xl w-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'SENDING...' : 'SEND MESSAGE'}
    </button>
  )
}

export default function Page() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, {})
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <main className="">
      <section className="relative min-h-[70vh] bg-gradient-to-br from-[#F8F6F0] via-white to-[#F8F6F0] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/12 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#FFD700]/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-[#FFC107]/8 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-6 py-3 mb-8 animate-fade-in-down">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm">Get In Touch</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2C2C2C] mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              CONTACT{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-transparent bg-clip-text">
                THE GRAND
              </span>{" "}
              COBBLER
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Ready to restore your treasured items? Let&apos;s discuss how we can bring them back to life
            </p>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="luxury-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="text-3xl mb-3">📱</div>
                <div className="font-semibold text-[#2C2C2C] mb-2">WhatsApp</div>
                <div className="text-sm text-gray-600">Quick Quote & Consultation</div>
              </div>
              <div className="luxury-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="text-3xl mb-3">📍</div>
                <div className="font-semibold text-[#2C2C2C] mb-2">Visit Us</div>
                <div className="text-sm text-gray-600">Lekki & Osapa Locations</div>
              </div>
              <div className="luxury-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="text-3xl mb-3">📧</div>
                <div className="font-semibold text-[#2C2C2C] mb-2">Email Us</div>
                <div className="text-sm text-gray-600">Detailed Inquiries</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <button className="btn-luxury px-8 py-4 rounded-full text-sm">
                SEND MESSAGE BELOW
              </button>
              <button className="btn-luxury-outline px-8 py-4 rounded-full text-sm">
                CALL NOW: 08092345000
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 section-padding">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-[#D4AF37] font-medium tracking-wider uppercase mb-4">SEND A MESSAGE</p>
          <h3 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6">
            GET IN <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC107] text-transparent bg-clip-text">TOUCH</span> WITH US
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        <div className="flex items-center justify-center w-full">
          <form
            ref={formRef}
            action={formAction}
            className="luxury-card bg-white p-8 md:p-12 rounded-3xl flex flex-col justify-center items-center gap-8 w-full md:w-4/6 lg:w-2/5 shadow-2xl border border-[#D4AF37]/20"
          >
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="honeypot"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-[#F8F6F0] border border-[#D4AF37]/20 focus:border-[#D4AF37] text-[#2C2C2C] p-4 w-full rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                required
              />
              {state.errors?.name && (
                <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-[#F8F6F0] border border-[#D4AF37]/20 focus:border-[#D4AF37] text-[#2C2C2C] p-4 w-full rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                required
              />
              {state.errors?.email && (
                <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
              )}
            </div>

            <div className="w-full">
              <textarea
                name="message"
                placeholder="Your Message"
                className="bg-[#F8F6F0] border border-[#D4AF37]/20 focus:border-[#D4AF37] text-[#2C2C2C] p-4 w-full rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 resize-none"
                rows={4}
                required
              />
              {state.errors?.message && (
                <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
              )}
            </div>

            {state.error && (
              <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {state.error}
              </div>
            )}

            {state.success && (
              <div className="w-full bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
              </div>
            )}

            <SubmitButton />
          </form>
        </div>
      </section>

      <div className="w-full h-[350px] mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5804111589596!2d3.4773848999999997!3d6.4478801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf578e8040f27%3A0x32b8a28ea111a9a2!2sPosh%20Plaza!5e0!3m2!1sen!2sgh!4v1745098349743!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          className="w-full h-full py-8"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
