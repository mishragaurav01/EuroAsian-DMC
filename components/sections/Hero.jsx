'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Hero section component with image carousel.
 * Client Component - handles carousel state and smooth scroll.
 */

const heroSlides = [
    '/images/hero/slideOne.jpg',
    '/images/hero/carouselTwo.jpeg',
    '/images/hero/carouselThree.jpeg',
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="  relative
            min-h-[75vh] sm:min-h-[80vh] lg:min-h-[90vh]
            flex items-center
            overflow-hidden
            bg-[#FAFAFA]"
        >
            {/* Background Image Carousel */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide}
                    className={`absolute inset-0 overflow-hidden sm:rounded-b-xl transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    >
                    <Image
                        src={slide}
                        alt={`Hero background ${index + 1}`}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>

            ))}

            {/* Overlay for text readability */}
            <div className="absolute inset-0 via-transparent to-white/60" />

            {/* Content */}
            <div className="container relative z-10 pt-20 lg:pt-30 pb-32">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-slate-900 leading-snug mb-6 text-center">
                    Your{" "}
                    <span className="text-[#E86D48]">
                        Trusted On-Ground DMC
                    </span>{" "}
                    Partner for Seamless Travel Experiences
                    </h1>
                    {/* <p className="text-base md:text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
                        We specialise in bespoke tours, travel experiences, and offer professional tourism and hospitality services in Kazakhstan.
                    </p> */}
                    <p className="text-sm md:text-lg text-slate-900 mb-10 max-w-2xl mx-auto">
                       We help travel agents deliver flawless itineraries, reliable operations, and unforgettable journeys - without the stress of on-ground coordination.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E76F51] text-white text-sm sm:text-md font-semibold rounded-xl hover:bg-[#d85f45] transition-all hover:shadow-lg hover:shadow-[#E76F51]/30"
                        >
                            Get a DMC Proposal
                        </button>

                        <Link
                            href="/destinations"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-md bg-white/50 border-2 border-black/25 text-black font-semibold rounded-xl hover:bg-slate-200 hover:text-black transition-all"
                        >
                            Explore Destinations
                        </Link>

                    </div>
                </div>
            </div>

            {/* Carousel indicators */}
            {/* <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                            ? 'bg-orange-500 w-6'
                            : 'bg-slate-400/50 hover:bg-slate-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </section>
    );
}
