import Link from 'next/link';
import Image from 'next/image';

/**
 * Navbar component - transparent overlay on hero.
 * Server Component - mobile menu can be added as client component later.
 */
export default function Navbar() {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/#about', label: 'About us' },
        { href: '/#contact', label: 'Contact us' },
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 py-4">
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
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
                    aria-label="Open menu"
                >
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
                </button>
            </div>
        </nav>
    );
}
