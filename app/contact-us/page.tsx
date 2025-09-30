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
      className="bg-yellow-500 text-white px-8 py-4 font-medium hover:bg-transparent border-2 border-yellow-500 hover:text-yellow-500 w-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
      <header className="relative bg-[url('/images/repair1.jpg')] bg-cover bg-center h-full pt-64 pb-20 ">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center bg-black/70 text-center text-white">
          <h1 className="text-3xl font-medium">Contact Us</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 pt-20">
        <div className="text-center">
          <p className="text-lg md:text-xl">SEND A MESSAGE</p>
          <h3 className="mt-4 text-3xl md:text-5xl font-semibold">
            GET IN <span className="bg-yellow-500/80 px-2">TOUCH</span> WITH US
          </h3>
        </div>

        <div className="flex items-center justify-center w-full ">
          <form
            ref={formRef}
            action={formAction}
            className="mt-10 md:mt-16 flex flex-col justify-center items-center gap-8 w-full md:w-4/6 lg:w-2/5"
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
                className="bg-gray-200 text-sm p-4 w-full"
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
                className="bg-gray-200 text-sm p-4 w-full"
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
                className="bg-gray-200 text-sm p-4 w-full"
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
