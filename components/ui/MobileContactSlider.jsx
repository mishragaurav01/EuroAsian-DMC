'use client';

/**
 * MobileContactBar – Fixed bottom action bar for mobile only.
 *
 * Two clear, separate buttons:
 *   1. WhatsApp icon (left) → Opens WhatsApp chat
 *   2. "Call us" button (right) → Initiates phone call
 *
 * Hidden on tablet (md) and desktop — they use the WhatsApp floating button instead.
 */

const WHATSAPP_NUMBER = '918882445490';
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hi! I'm interested in your travel packages. Can you share more details?"
);
const CALL_NUMBER = 'tel:+919911883074';

export default function MobileContactBar() {
    return (
        <div className="mobile-contact-bar" id="mobile-contact-bar">
            <div className="mobile-contact-bar__inner">
                {/* WhatsApp Button */}
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-contact-bar__wa-btn"
                    aria-label="Message us on WhatsApp"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="24"
                        height="24"
                        fill="#ffffff"
                    >
                        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.895 15.895 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.332 22.616c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.822-6.81-8.06-7.126-.228-.316-1.916-2.55-1.916-4.864 0-2.314 1.212-3.45 1.642-3.924.43-.474.94-.594 1.254-.594.314 0 .628.002.902.016.29.014.68-.11 1.062.81.39.94 1.332 3.254 1.448 3.49.118.238.196.514.04.83-.158.316-.236.514-.472.79-.236.278-.496.62-.71.832-.236.236-.482.492-.208.966.276.474 1.226 2.024 2.632 3.278 1.81 1.612 3.336 2.114 3.81 2.352.474.236.752.198 1.028-.118.276-.316 1.182-1.374 1.498-1.848.314-.474.63-.394 1.062-.236.432.158 2.746 1.294 3.218 1.53.474.236.788.354.904.55.118.196.118 1.136-.272 2.234z" />
                    </svg>
                </a>

                {/* Call Us Button */}
                <a
                    href={CALL_NUMBER}
                    className="mobile-contact-bar__call-btn"
                    aria-label="Call us"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>Call us</span>
                </a>
            </div>
        </div>
    );
}
