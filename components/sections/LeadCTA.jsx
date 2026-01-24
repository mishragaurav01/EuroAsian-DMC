'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Lead CTA section component with form.
 * Matches specific UI design with "Let's Connect" card and flight path background.
 */
export default function LeadCTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        whatsapp: '',
        date: '',
        destination: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call for now since we are focusing on UI
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                mobile: '',
                whatsapp: '',
                date: '',
                destination: '',
                message: '',
            });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="relative pt-10 sm:pt-12 lg:pt-16 bg-white overflow-hidden">
            {/* Background Flight Path SVG */}
            <div className="absolute top-110 left-175 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] pointer-events-none z-0 opacity-60 hidden md:block">
                <svg
                    width="1349"
                    height="590"
                    viewBox="0 0 1249 639"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-182.498 0.997746C-182.498 0.997746 683 117.838 221 277.337C-241 436.837 661.5 249.838 429.5 547.838C197.5 845.838 1247.5 305.338 1247.5 305.338"
                        stroke="#1F3A5F"
                        strokeOpacity={0.3}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeDasharray="7 8"
                    />
                </svg>


            </div>

            {/* Plane Image - Positioned absolutely based on the path roughly */}
            <div className="absolute top-[38.1%] right-[5%] lg:right-[11.1%] w-24 md:w-32 lg:w-30 z-10 hidden md:block transform rotate-[-20deg]">
                <Image
                    src="/images/lead-cta/plane.png"
                    alt="Travel Plane"
                    width={200}
                    height={100}
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="container relative z-20 mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3 sm:mb-4 px-2">
                        <span className="text-[#E86D48]">Let’s Build Better</span> Travel<br />
                        Experiences
                    </h2>
                    <p className="text-slate-600 font-medium text-sm sm:text-base px-2">
                        End-to-end destination services designed for travel companies.
                    </p>
                </div>

                {/* Form Card */}
                <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-180 mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    {/* Form Header */}
                    <div className="bg-[#E86D48] px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
                        <h3 className="text-white text-xl font-bold">Let’s Connect</h3>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8">
                        {status === 'success' ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                                <p className="text-slate-600 mb-6">We've received your inquiry and will be in touch shortly.</p>
                                <button onClick={() => setStatus('idle')} className="text-[#E86D48] font-semibold hover:underline">Send another inquiry</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-2">Name*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="name"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-white text-slate-700 placeholder-slate-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="david@gmail.com"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-white text-slate-700 placeholder-slate-300"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Mobile & Whatsapp */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="mobile" className="block text-sm font-bold text-slate-800 mb-2">Mobile*</label>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Mobile number"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-white text-slate-700 placeholder-slate-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="whatsapp" className="block text-sm font-bold text-slate-800 mb-2">Whatsapp Number</label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="Enter Whatsapp number"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-white text-slate-700 placeholder-slate-300"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Date & Destination */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-bold text-slate-800 mb-2">Date*</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-white text-slate-700 placeholder-slate-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="destination" className="block text-sm font-bold text-slate-800 mb-2">Destination</label>
                                        <div className="relative">
                                            <select
                                                id="destination"
                                                name="destination"
                                                value={formData.destination}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-white text-slate-700 appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select a destination</option>
                                                <option value="Almaty">Almaty</option>
                                                <option value="Baku">Baku</option>
                                                <option value="Tashkent">Tashkent</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Dubai">Dubai</option>
                                            </select>
                                            {/* Custom Arrow */}
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Textarea */}
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={2}
                                        placeholder="Is there anything else you'd like to ask us?"
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-white text-slate-700 placeholder-slate-300 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="bg-[#E86D48] hover:bg-[#d55f3c] text-white text-sm sm:text-md font-bold py-3 px-8 rounded-lg transition-colors shadow-sm disabled:opacity-70"
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Get a DMC Proposal'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Footer Text */}
                <div className=" text-start sm:text-center mt-6 sm:mt-8 pb-6 sm:pb-8">
                    <p className="font-serif font-semibold text-slate-900 tracking-wide text-xs sm:text-base lg:text-lg">
                        No obligations • No spam • Just professional travel support
                    </p>
                </div>
            </div>
        </section>
    );
}
