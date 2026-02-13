'use client';

import { useState } from 'react';

/**
 * Reusable Lead Form component.
 * Contains form state, validation, submission logic, and all form fields.
 * Used by both the LeadCTA section and the LeadFormModal popup.
 *
 * @param {Object} props
 * @param {function} [props.onSuccess] - Optional callback fired after successful submission.
 */
export default function LeadForm({ onSuccess, animated = false }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        whatsapp: '',
        date: '',
        destination: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    whatsapp: '',
                    date: '',
                    destination: '',
                    message: '',
                });
                if (onSuccess) onSuccess();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-6">We've received your inquiry and will be in touch shortly.</p>
                <button onClick={() => setStatus('idle')} className="text-[#E86D48] font-semibold hover:underline">Send another inquiry</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                    <label htmlFor="lead-name" className="block text-sm font-bold text-slate-800 mb-2">Name*</label>
                    <input
                        type="text"
                        id="lead-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="name"
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-[#F8F9FA] text-slate-700 placeholder-slate-300"
                    />
                </div>
                <div>
                    <label htmlFor="lead-email" className="block text-sm font-bold text-slate-800 mb-2">Email</label>
                    <input
                        type="email"
                        id="lead-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="david@gmail.com"
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-[#F8F9FA] text-slate-700 placeholder-slate-300"
                    />
                </div>
            </div>

            {/* Row 2: Mobile & Whatsapp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                    <label htmlFor="lead-mobile" className="block text-sm font-bold text-slate-800 mb-2">Mobile*</label>
                    <input
                        type="tel"
                        id="lead-mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        placeholder="Enter Mobile number"
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-[#F8F9FA] text-slate-700 placeholder-slate-300"
                    />
                </div>
                <div>
                    <label htmlFor="lead-whatsapp" className="block text-sm font-bold text-slate-800 mb-2">Whatsapp Number</label>
                    <input
                        type="tel"
                        id="lead-whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="Enter Whatsapp number"
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-[#F8F9FA] text-slate-700 placeholder-slate-300"
                    />
                </div>
            </div>

            {/* Row 3: Date & Destination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="lead-date" className="block text-sm font-bold text-slate-800 mb-2">Date*</label>
                    <input
                        type="date"
                        id="lead-date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-[#F8F9FA] text-slate-700 placeholder-slate-300"
                    />
                </div>
                <div>
                    <label htmlFor="lead-destination" className="block text-sm font-bold text-slate-800 mb-2">Destination</label>
                    <div className="relative">
                        <select
                            id="lead-destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-[#F8F9FA] text-slate-700 appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Select a destination</option>
                            <option value="Almaty">Almaty</option>
                            <option value="Baku">Baku</option>
                            <option value="Tashkent">Tashkent</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Dubai">Dubai</option>
                        </select>
                        {/* Custom Arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Textarea */}
            <div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Is there anything else you'd like to ask us?"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#E86D48] focus:ring-1 focus:ring-[#E86D48] outline-none transition-colors bg-[#F8F9FA] text-slate-700 placeholder-slate-300 resize-none"
                />
            </div>

            {/* Error message */}
            {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
            )}

            {/* Submit Button */}
            <div className="text-center">
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`bg-[#E86D48] hover:bg-[#d55f3c] text-white text-sm sm:text-md font-bold py-3 px-8 rounded-lg transition-colors shadow-sm disabled:opacity-70 ${animated && status === 'idle' ? 'lead-btn-pulse' : ''}`}
                >
                    {status === 'loading' ? 'Sending...' : 'Get a DMC Proposal'}
                </button>
            </div>
        </form>
    );
}
