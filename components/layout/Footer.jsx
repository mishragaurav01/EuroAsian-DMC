import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer component matching the provided UI design.
 */
export default function Footer() {
  return (
    <footer className="bg-[#EFF0F2] text-slate-800 font-sans">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#1F3A5FF2] text-white py-2 text-center px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-medium">
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span>
            Dreaming of travelling the world? Connect with EuroAsian at 0120-3261148.
          </span>
        </div>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="container mx-auto px-4 pt-8 pb-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 mb-10 text-center place-items-center">

          {/* ===== Logo & Tagline ===== */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">

            <Image
              src="/icons/logo.png"
              alt="EuroAsian DMC Logo"
              width={180}
              height={120}
              className="object-contain w-[130px] sm:w-[150px] lg:w-[170px] h-auto mb-4"
            />

            <h2 className="text-lg font-semibold text-slate-900 max-w-xs">
              Your Reliable Destination Management Partner
            </h2>
          </div>

          {/* ===== Middle Links ===== */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 sm:gap-12 lg:gap-16 place-items-center text-start">

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="/about" className="hover:text-amber-500 transition-colors">• About Us</Link></li>
                <li><Link href="/privacy" className="hover:text-amber-500 transition-colors">• Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-amber-500 transition-colors">• Terms</Link></li>
                <li><Link href="/contact" className="hover:text-amber-500 transition-colors">• Contact</Link></li>
              </ul>
            </div>

            {/* Who We Work With */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Who We Work With</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Travel Agencies</li>
                <li>• Tour Operators</li>
                <li>• Corporate Travel Planners</li>
                <li>• MICE Companies</li>
              </ul>
            </div>
          </div>

          {/* ===== Contact ===== */}
          <div className="lg:col-span-4 text-start">
            <h3 className="font-bold text-slate-900 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Email: info@euroasiandmc.com</p>
              <p>Phone: +91 9911883074</p>
              <p>Phone: +91 9911883075</p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= WIDE ADDRESS BAR (FIXED WIDTH ISSUE) ================= */}
      <div className="px-4 sm:px-6 lg:px-10 pb-10">

        <div className="bg-[#616A76] text-white rounded-xl p-6 w-full max-w-[1400px] mx-auto shadow-sm">

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 text-center text-xs opacity-90 leading-relaxed">

            {/* India */}
            <div>
              <h4 className="font-bold text-white mb-2 text-sm">India</h4>
              <p>A-612, Logix Technova Sector 132,</p>
              <p>Noida Uttar Pradesh 201304.</p>
              <p className="mt-1">+91 8383095531</p>
            </div>

            {/* Almaty */}
            <div>
              <h4 className="font-bold text-white mb-2 text-sm">Almaty</h4>
              <p>Street - Kabanbai Batyr 300/55,</p>
              <p>Almaty, Kazakhstan</p>
              <p className="mt-1">+7 7076027552</p>
            </div>

            {/* Tashkent */}
            <div>
              <h4 className="font-bold text-white mb-2 text-sm">Tashkent</h4>
              <p>1/16 Qiyatariq Street, Yashnobad</p>
              <p>District, Tashkent 220111</p>
            </div>

            {/* Baku */}
            <div>
              <h4 className="font-bold text-white mb-2 text-sm">Baku</h4>
              <p>Baku, Xetai District, Street – 8</p>
              <p>November, No. 15</p>
              <p className="mt-1">+994 50 300 86 56</p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-[#BEBEBE] py-6 text-center text-xs text-slate-600 px-4">
        © 2026 EuroAsian DMC. Built for Travel Professionals.
      </div>

    </footer>
  );

}
