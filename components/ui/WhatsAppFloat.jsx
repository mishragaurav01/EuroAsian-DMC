'use client';

import { useState } from 'react';

/**
 * Floating WhatsApp button – fixed to the bottom-right corner.
 * Opens a WhatsApp chat with the configured phone number.
 *
 * Required env variable:
 *   NEXT_PUBLIC_WHATSAPP_NUMBER  –  full international number without + or spaces
 *   e.g. 919876543210 (India) or 971501234567 (UAE)
 *
 * Optional env variable:
 *   NEXT_PUBLIC_WHATSAPP_MESSAGE – pre-filled message text (URL-encoded automatically)
 */
export default function WhatsAppFloat() {
    const [hovered, setHovered] = useState(false);

    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
    const defaultMessage =
        process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
        'Hi! I\'m interested in your travel packages. Can you share more details?';

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            id="whatsapp-float"
            className="whatsapp-float"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Pulse ring */}
            <span className="whatsapp-float__ring" />

            {/* Tooltip */}
            <span
                className="whatsapp-float__tooltip"
                style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(8px)' }}
            >
                Chat with us
            </span>

            {/* WhatsApp SVG icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="whatsapp-float__icon"
                fill="#ffffff"
            >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.895 15.895 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.332 22.616c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.822-6.81-8.06-7.126-.228-.316-1.916-2.55-1.916-4.864 0-2.314 1.212-3.45 1.642-3.924.43-.474.94-.594 1.254-.594.314 0 .628.002.902.016.29.014.68-.11 1.062.81.39.94 1.332 3.254 1.448 3.49.118.238.196.514.04.83-.158.316-.236.514-.472.79-.236.278-.496.62-.71.832-.236.236-.482.492-.208.966.276.474 1.226 2.024 2.632 3.278 1.81 1.612 3.336 2.114 3.81 2.352.474.236.752.198 1.028-.118.276-.316 1.182-1.374 1.498-1.848.314-.474.63-.394 1.062-.236.432.158 2.746 1.294 3.218 1.53.474.236.788.354.904.55.118.196.118 1.136-.272 2.234z" />
            </svg>
        </a>
    );
}
