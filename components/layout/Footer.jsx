import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer component matching the provided UI design.
 */
export default function Footer() {
    return (
        <footer className="bg-[#EFF0F2] text-slate-800 font-sans">
            {/* Top Bar - Dark Blue */}
            <div className="bg-[#1F3A5FF2] text-white py-2 text-center px-4">
                <div className="flex items-center justify-center gap-3 text-sm md:text-base font-medium">
                    <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <span>Dreaming of travelling the world? Connect with EuroAsian at 011-40031000.</span>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8 pb-6">
                {/* Main Content Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 mb-12 text-center place-items-center">

                    {/* Logo & Tagline (Left Column) */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center">
                        {/* Logo Placeholder - You can replace with actual Image component */}
                        <div className="mb-4">
                            <span className="text-3xl font-bold flex items-center gap-1">
                                <span className="text-amber-500">
                                    {/* Simple SVG plane for logo effect */}
                                    <svg className="w-8 h-8 transform -rotate-45" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </span>
                                <span className="text-slate-800">EUROASIAN</span>
                            </span>
                            <p className="text-[10px] text-slate-500 tracking-widest uppercase pl-9">DESTINATION MANAGEMENT COMPANY</p>
                        </div>
                        <h2 className="text-lg font-semibold text-slate-900 max-w-xs">
                            Your Reliable Destination This Management Partner
                        </h2>
                    </div>

                    {/* Quick & Who We Work With (Middle Columns) */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-16 place-items-center text-start">
                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li><Link href="/about" className="hover:text-amber-500 transition-colors">• About Us</Link></li>
                                <li><Link href="/privacy" className="hover:text-amber-500 transition-colors">• Privacy policy</Link></li>
                                <li><Link href="/terms" className="hover:text-amber-500 transition-colors">• Terms</Link></li>
                                <li><Link href="/contact" className="hover:text-amber-500 transition-colors">• Contact</Link></li>
                            </ul>
                        </div>

                        {/* Who We Work With */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-4">Who We Work With</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li><span className="hover:text-amber-500 transition-colors cursor-default">• Travel Agencies</span></li>
                                <li><span className="hover:text-amber-500 transition-colors cursor-default">• Tour Operators</span></li>
                                <li><span className="hover:text-amber-500 transition-colors cursor-default">• Corporate Travel Planners</span></li>
                                <li><span className="hover:text-amber-500 transition-colors cursor-default">• MICE Companies</span></li>
                            </ul>
                        </div>
                    </div>

                    

                    {/* Contact (Right Column) */}
                    <div className="lg:col-span-4 text-center">
                        <h3 className="font-bold text-slate-900 mb-4">Contact</h3>
                        <div className="space-y-2 text-sm text-slate-600">
                            <p>Email: partnerships@yourdmc.com</p>
                            <p>Phone: +91 7303935818</p>
                        </div>
                    </div>
                </div>

                {/* Address Bar - Dark Grey Rounded Box */}
                <div className="bg-[#616A76] text-white rounded-xl p-6 md:p-2 max-w-5xl mx-auto shadow-sm ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-xs opacity-90 leading-relaxed">

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
                            <p className="mt-1">+994 50 300 86 56</p>
                        </div>

                        {/* Baku */}
                        <div>
                            <h4 className="font-bold text-white mb-2 text-sm">Baku</h4>
                            <p>Baku, Xetai District, Street – 8</p>
                            <p>November, No. 15</p>
                        </div>

                    </div>
                </div>

                {/* Copyright Line */}
                <div className="mt-8 pt-6 border-t border-[#BEBEBE] text-center text-xs text-slate-600">
                    © 2026 Your DMC Name. Built for Travel Professionals.
                </div>

            </div>
        </footer>
    );
}
