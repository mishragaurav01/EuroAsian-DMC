'use client';

import { useState, useEffect } from 'react';
import LeadFormModal from '@/components/ui/LeadFormModal';

const POPUP_SHOWN_KEY = 'leadFormPopupShown';

/**
 * Auto-popup component that shows the lead form modal after 5 seconds.
 * Only shows once per browser session using sessionStorage.
 * Shares the same sessionStorage key as the Hero CTA button to prevent duplicates.
 */
export default function AutoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if popup was already shown this session
        if (sessionStorage.getItem(POPUP_SHOWN_KEY)) return;

        const timer = setTimeout(() => {
            // Double-check before opening (user might have opened manually in the meantime)
            if (!sessionStorage.getItem(POPUP_SHOWN_KEY)) {
                setIsOpen(true);
                sessionStorage.setItem(POPUP_SHOWN_KEY, 'true');
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LeadFormModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            animated={true}
        />
    );
}
