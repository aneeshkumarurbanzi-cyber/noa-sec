"use client";



export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#05070d] text-white px-6 md:px-16 py-20 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT - FORM */}
        <div className="md:col-span-2 bg-[#0c0f17] border border-white/10 rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-8">
            Send an Inquiry
          </h2>

          <form className="space-y-6">

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="name"
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md text-sm outline-none focus:border-[#0ea5e9]"
              />
              <input
                type="email"
                placeholder="@gmail.com"
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md text-sm outline-none focus:border-[#0ea5e9]"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="message"
              className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md text-sm outline-none focus:border-[#0ea5e9]"
            />

            {/* Message */}
            <textarea
              rows="6"
              placeholder="Describe your technical requirements..."
              className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md text-sm outline-none focus:border-[#0ea5e9]"
            />

            {/* Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-[#0ea5e9] hover:bg-[#38bdf8] rounded-md text-white font-semibold transition"
            >
              submit
            </button>

          </form>
        </div>

        {/* RIGHT - INFO PANEL */}
        <div className="bg-[#0c0f17] border border-white/10 rounded-xl p-6 flex flex-col justify-between">

          <div>
            <h3 className="text-lg font-semibold mb-6">
              Regional Command Centers
            </h3>

            <div className="space-y-6 text-sm">

              <div>
                <p className="text-gray-400 uppercase text-xs mb-1">
                  Global HQ
                </p>
                <p></p>
                <p className="text-gray-400">Trivandrum</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase text-xs mb-1">
                  Electronic Mail
                </p>
                <p>protocol@noasec.io</p>
                <p className="text-gray-400">careers@noasec.io</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase text-xs mb-1">
                  Secure Line
                </p>
                <p>+1400 888 888</p>
              </div>

            </div>
          </div>

          {/* Image */}
         <div className="mt-6 w-full h-[200px] rounded-md overflow-hidden">
  <iframe
    src="https://www.google.com/maps?q=Kottayam,Kerala&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </div>
    </section>
  );
}