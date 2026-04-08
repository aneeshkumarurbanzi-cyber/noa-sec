"use client";

export default function Footer() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-[#05070d] text-white px-6 md:px-16 pt-16 pb-8 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-xl font-semibold mb-4">NoaSec</h2>
          <p className="text-gray-400 text-sm">
            Cybersecurity training & services for the modern world.
          </p>
        </div>

        <div>
          <h3 className="mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li><button onClick={() => scrollTo("home")}>Home</button></li>
            <li><button onClick={() => scrollTo("courses")}>Courses</button></li>
            <li><button onClick={() => scrollTo("services")}>Services</button></li>
            <li><button onClick={() => scrollTo("about")}>About</button></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4">Programs</h3>
          <ul className="text-gray-400 space-y-2">
            <li>NCSA</li>
            <li>NCD</li>
            <li>NCCP</li>
            <li>NCDF</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">R4, Centerspace, XIII/284 A, Anjanasree Arcade Annankunnu Road, Nagampadom Kottayam PIN : 686001</p><br/>
          <p className="text-gray-400 text-sm">7034733944 </p><br/>
          <p className="text-gray-400 text-sm">Info@noasecsolutions.com </p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NoaSec. All rights reserved.
      </div>
    </footer>
  );
}