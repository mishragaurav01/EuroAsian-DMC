'use client';

import { useRef } from 'react';
import PackageCard from '../ui/PackageCard';

export default function Packages({ packages }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 360, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white">

      {/* Heading */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Tour Packages
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Welcome to Kazakhstan – A Land of Majestic Mountains, Ancient Silk Roads, and Timeless Adventures.
          </p>
        </div>
      </div>

      {/* Slider Wrapper (FULL WIDTH, SAFE) */}
      <div className="relative max-w-full">

        <div
          ref={sliderRef}
          className="
            flex gap-4
            overflow-x-auto
            scrollbar-hide
            px-4 sm:px-8 lg:px-12
          "
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="
                flex-shrink-0
                w-[280px]
                sm:w-[320px]
                md:w-[360px]
                lg:w-[380px]
              "
            >
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>

        {/* Arrows – desktop only */}
        <button
          onClick={scrollLeft}
          className="
            hidden lg:flex
            absolute left-2 top-1/2 -translate-y-1/2
            bg-white shadow-md rounded-full
            w-10 h-10 items-center justify-center
          "
        >
          ‹
        </button>

        <button
          onClick={scrollRight}
          className="
            hidden lg:flex
            absolute right-2 top-1/2 -translate-y-1/2
            bg-white shadow-md rounded-full
            w-10 h-10 items-center justify-center
          "
        >
          ›
        </button>

      </div>
    </section>
  );
}
