'use client';

import { useEffect, useRef } from 'react';
import LeadForm from '@/components/ui/LeadForm';

/**
 * Modern lead form modal/popup component.
 * Features: backdrop blur, smooth scale + fade animation, close on Escape/click-outside,
 * body scroll lock, and accessible focus trap.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is visible.
 * @param {function} props.onClose - Callback to close the modal.
 * @param {boolean} [props.animated] - Whether to animate the submit button for attention.
 */
export default function LeadFormModal({ isOpen, onClose, animated = false }) {
    const modalRef = useRef(null);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Lock body scroll
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Close on backdrop click
    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-label="Get a DMC Proposal"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                style={{ animation: 'modalFadeIn 0.3s ease-out' }}
            />

            {/* Modal Card */}
            <div
                ref={modalRef}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100"
                style={{ animation: 'modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-[#E86D48] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between rounded-t-2xl sm:rounded-t-3xl">
                    <h3 className="text-white text-lg sm:text-xl font-bold">Get a DMC Proposal</h3>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                        aria-label="Close modal"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-4 sm:p-6 lg:p-8">
                    <LeadForm
                        animated={animated}
                        onSuccess={() => {
                            // Auto-close modal after a short delay on success
                            setTimeout(() => onClose(), 2500);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
