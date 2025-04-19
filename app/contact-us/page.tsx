export default function Page() {
  return (
    <main className="">
      <header className="relative bg-[url('/images/shoe.jpg')] bg-cover bg-center h-full pt-48 pb-20 ">
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

        <form className="mt-10 md:mt-16 flex flex-col justify-center lg:flex-row items-center gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 justify-between">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-200 text-sm p-4"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="bg-gray-200 text-sm p-4"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-gray-200 text-sm p-4 w-full"
              rows={4}
            />

            <button className="bg-yellow-500 text-white px-8 py-4 font-medium hover:bg-transparent border-2 border-yellow-500 hover:text-yellow-500">
              BOOK APPOINTMENT
            </button>
          </div>
        </form>
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
