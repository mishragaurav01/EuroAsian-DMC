'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Navbar component - transparent overlay on hero.
 * Client Component - includes functional mobile menu toggle and destinations dropdown.
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isMobileDestinationsOpen, setIsMobileDestinationsOpen] = useState(false);

  const destinations = [
    { href: '/destinations/almaty', label: 'Almaty' },
    { href: '/destinations/baku', label: 'Baku' },
    { href: '/destinations/tashkent', label: 'Tashkent' },
    { href: '/destinations/georgia', label: 'Georgia' },
    { href: '/destinations/turkey', label: 'Turkey' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileDestinationsOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDestinationsOpen(false);
  };

  const toggleMobileDestinations = () => {
    setIsMobileDestinationsOpen(!isMobileDestinationsOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-3 lg:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center shrink-0" onClick={closeMobileMenu}>
          <Image
            src="/icons/logo.png"
            alt="EuroAsian DMC Logo"
            width={160}
            height={80}
            className="object-contain h-auto w-[120px] md:w-[150px] lg:w-[170px]"
            priority
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div
          className="
        hidden md:flex items-center
        h-[47px]
        px-[24px] lg:px-[37px]
        gap-6 lg:gap-10
        rounded-xl
        bg-[#F9F9F9B2]
        backdrop-blur-md
        border border-white/30
        shadow-sm
      "
        >
          {/* Home */}
          <Link
            href="/"
            className="text-[#1F3A5F] hover:text-slate-600 font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Home
          </Link>

          {/* ===== Destinations Dropdown ===== */}
          <div
            className="relative"
            onMouseEnter={() => setIsDestinationsOpen(true)}
            onMouseLeave={() => setIsDestinationsOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[#1F3A5F] hover:text-slate-600 font-semibold text-sm transition-colors whitespace-nowrap"
              onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
            >
              Destinations
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDestinationsOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${isDestinationsOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
                }`}
            >
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2 min-w-[180px]">
                {destinations.map((dest) => (
                  <Link
                    key={dest.href}
                    href={dest.href}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#E76F51] transition-colors"
                  >
                    {dest.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About */}
          <Link
            href="/#about"
            className="text-[#1F3A5F] hover:text-slate-600 font-semibold text-sm transition-colors whitespace-nowrap"
          >
            About us
          </Link>

          {/* Contact */}
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#1F3A5F] hover:text-slate-600 font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Contact us
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="md:hidden p-2 text-white"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            /* Close Icon */
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
            /* Hamburger */
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

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 p-4">
            <div className="flex flex-col gap-1">

              {/* Home */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-[#1F3A5F] hover:text-[#E76F51] hover:bg-slate-50 font-semibold text-base py-3 px-4 rounded-lg transition-colors"
              >
                Home
              </Link>

              {/* Mobile Destinations */}
              <div>
                <button
                  onClick={toggleMobileDestinations}
                  className="w-full flex items-center justify-between text-[#1F3A5F] hover:text-[#E76F51] hover:bg-slate-50 font-semibold text-base py-3 px-4 rounded-lg transition-colors"
                >
                  <span>Destinations</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileDestinationsOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-200 ${isMobileDestinationsOpen
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 py-1 space-y-1">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.href}
                        href={dest.href}
                        onClick={closeMobileMenu}
                        className="block text-slate-600 hover:text-[#E76F51] hover:bg-slate-50 font-medium text-sm py-2.5 px-4 rounded-lg transition-colors"
                      >
                        {dest.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* About */}
              <Link
                href="/#about"
                onClick={closeMobileMenu}
                className="text-[#1F3A5F] hover:text-[#E76F51] hover:bg-slate-50 font-semibold text-base py-3 px-4 rounded-lg transition-colors"
              >
                About us
              </Link>

              {/* Contact */}
              <button
                onClick={() => {
                  closeMobileMenu();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left text-[#1F3A5F] hover:text-[#E76F51] hover:bg-slate-50 font-semibold text-base py-3 px-4 rounded-lg transition-colors"
              >
                Contact us
              </button>

            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}
