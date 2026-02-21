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
    return null;
}
