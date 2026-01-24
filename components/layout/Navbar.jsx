'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Navbar component - transparent overlay on hero.
 * Client Component - includes functional mobile menu toggle.
 */
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/#about', label: 'About us' },
        { href: '/#contact', label: 'Contact us' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 py-4">
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                    {/* Replace with actual logo once provided */}
                    <div className="text-white">
                        <svg
                            className="w-8 h-8 mb-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                        <span className="text-sm font-semibold tracking-wide">EUROASIAN</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Pill Container */}
                <div
                    className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full"
                    style={{ backgroundColor: 'rgba(249, 249, 249, 0.7)' }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-slate-800 hover:text-slate-600 font-medium text-sm transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        /* Close Icon (X) */
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        /* Hamburger Icon */
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu - Slide Down */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="container mt-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 p-4">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className="text-slate-800 hover:text-[#E76F51] hover:bg-slate-50 font-medium text-base py-3 px-4 rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
