"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Testimonials section component.
 * Polaroid images rotate on hover and switch to video (hydration-safe).
 */
export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  // Ensures videos render ONLY on client (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-[#F3F4F6] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-row lg:flex-row items-center gap-6 sm:gap-10 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex-3 max-w-2xl sm:flex-1 mx-auto text-center flex flex-col items-center order-1 lg:order-none">
            <span className="text-gray-600 uppercase tracking-[0.2em] text-xs md:text-sm font-medium mb-3 sm:mb-4 block">
              Testimonials
            </span>

            <h2 className="text-xs sm:text-xl md:text-xl font-serif font-bold text-gray-900 mb-2 sm:mb-3 leading-tight px-2">
              Not Sure Yet ? See what travelers love about us
            </h2>

            {/* Rating Stars */}
            <div className="flex justify-center gap-1 sm:gap-1.5 mb-3 sm:mb-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-3 h-3 sm:w-6 sm:h-6 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-[10px] sm:text-lg md:text-xl text-gray-800 font-serif leading-relaxed mb-6 sm:mb-10 px-2">
              "Our trip with Euroasian DMC was truly fantastic. From learning
              about Vietnam's rich history and culture to enjoying its delicious
              cuisine and exciting adventures, every detail was perfectly
              managed."
            </blockquote>

            <span className="font-semibold text-gray-900 text-xs sm:text-lg border-b-2 border-black/20 px-2">
              Mr. Ansh
            </span>
          </div>

          {/* RIGHT POLAROID SECTION */}
          <div className="flex-1 w-full flex justify-center lg:justify-end items-center relative py-6 sm:py-10 lg:py-0 order-2 lg:order-0">
            {/* Mobile: Single polaroid, Tablet+: Stacked polaroids */}
            <div className="relative w-full max-w-[180px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px] h-[280px] sm:h-[350px] md:h-[500px] lg:h-[500px]">

              {/* BACK POLAROID - Hidden on mobile, shown on sm+ */}
              <div className=" sm:block absolute top-1/2 -left-9 sm:left-2 md:left-4 lg:left-[-10px] -translate-y-1/2 -rotate-12 transition-transform duration-500 hover:rotate-0 hover:z-30 z-20 group">
                <div className="bg-white p-1 sm:p-3 shadow-xl">
                  <div className="relative w-[65px] sm:w-[200px] md:w-[160px] lg:w-[260px] h-[90px] sm:h-[260px] md:h-[220px] lg:h-[340px] overflow-hidden">
                    {/* IMAGE (SSR SAFE) */}
                    <Image
                      src="/images/testimonials/rafting.jpg"
                      alt="Rafting Adventure"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {/* VIDEO (CLIENT ONLY) */}
                    {mounted && (
                      <video
                        suppressHydrationWarning
                        src="/videos/testimonials/rafting.mp4"
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="
                          absolute inset-0
                          w-full h-full
                          object-cover
                          bg-transparent
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-300
                          scale-[1.04]
                        "
                        onMouseEnter={(e) => {
                          const video = e.currentTarget;
                          if (video.paused) {
                            video.play().catch(() => { });
                          }
                        }}
                        onMouseLeave={(e) => {
                          const video = e.currentTarget;
                          if (!video.paused) {
                            video.pause();
                            video.currentTime = 0;
                          }
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* FRONT POLAROID - Centered on mobile, positioned on sm+ */}
              <div className="
                absolute top-1/2 -translate-y-1/2
                left-4/7 -translate-x-3/5 sm:translate-x-0 sm:left-auto
                sm:right-0 md:right-4 lg:right-[-10px]
                rotate-12 sm:rotate-12 
                transition-transform duration-500 hover:rotate-0 hover:z-30 z-10 group
              ">
                <div className="bg-white p-1 sm:p-3 shadow-xl">
                  <div className="relative w-[80px] sm:w-[200px] md:w-[180px] lg:w-[260px] h-[110px] sm:h-[260px] md:h-[260px] lg:h-[340px] overflow-hidden">
                    {/* IMAGE */}
                    <Image
                      src="/images/testimonials/snow.jpg"
                      alt="Snow Landscape"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {/* VIDEO */}
                    {mounted && (
                      <video
                        suppressHydrationWarning
                        src="/videos/testimonials/snow.mp4"
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="
                          absolute inset-0
                          w-full h-full
                          object-cover
                          bg-transparent
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-300
                          scale-[1.04]
                        "
                        onMouseEnter={(e) => {
                          const video = e.currentTarget;
                          if (video.paused) {
                            video.play().catch(() => { });
                          }
                        }}
                        onMouseLeave={(e) => {
                          const video = e.currentTarget;
                          if (!video.paused) {
                            video.pause();
                            video.currentTime = 0;
                          }
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
