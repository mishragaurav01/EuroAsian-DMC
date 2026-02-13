'use client';

import Image from 'next/image';
import LeadForm from '@/components/ui/LeadForm';

/**
 * Lead CTA section component with form.
 * Matches specific UI design with "Let's Connect" card and flight path background.
 * Now uses the shared LeadForm component for the form fields.
 */
export default function LeadCTA() {
    return (
        <section id="contact" className="relative pt-10 sm:pt-12 lg:pt-16 bg-white overflow-hidden">
            {/* Background Flight Path SVG + Plane - single responsive container */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block overflow-hidden">

                {/* SVG wrapper */}
                <div className="absolute top-[45%] left-[41%] -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-[1400px] opacity-60">

                    <svg
                        viewBox="0 0 1249 639"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto"
                        preserveAspectRatio="xMidYMid meet"
                    >

                        {/* Flight Path */}
                        <path
                            d="M-182.498 0.997746C-182.498 0.997746 683 117.838 221 277.337C-241 436.837 661.5 249.838 429.5 547.838C197.5 845.838 1247.5 305.338 1247.5 305.338"
                            stroke="#1F3A5F"
                            strokeOpacity={0.3}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeDasharray="7 8"
                        />

                        {/* ✈️ Plane INSIDE SVG */}
                        <image
                            href="/images/lead-cta/plane.png"
                            x="1291"   /* Adjust endpoint X */
                            y="100"    /* Adjust endpoint Y */
                            width="90"
                            height="90"
                            transform="rotate(-20 1130 260)"
                            style={{ transformOrigin: "center" }}
                        />

                    </svg>
                </div>
            </div>


            <div className="container relative z-20 mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3 sm:mb-4 px-2">
                        <span className="text-[#E86D48]">Let's Build Better</span> Travel<br />
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
                        <h3 className="text-white text-xl font-bold">Let's Connect</h3>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8">
                        <LeadForm />
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
