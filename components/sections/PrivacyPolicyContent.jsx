'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Privacy Policy Content Component
 * Includes hero banner, main content, quick links sidebar, and WhatsApp floating button
 */
export default function PrivacyPolicyContent() {
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Hero Banner */}
            <section className="relative h-[40vh] min-h-[280px] md:min-h-[320px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero/slide-1.jpg"
                        alt="Privacy Policy Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center text-black pt-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                        Privacy Policy
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="bg-white py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Main Content */}
                        <div className="flex-1 lg:max-w-3xl">
                            {/* Introduction */}
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1F3A5F] mb-4">
                                    Privacy Policy
                                </h2>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    <strong>Effective Date: February 9, 2026</strong>
                                </p>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    EuroAsianDMC Pvt Ltd ("we," "us," or "our") serves as your trusted on-ground Destination Management Company (DMC) partner, helping travel agents deliver flawless itineraries and unforgettable journeys. We are committed to protecting the privacy and security of all personal data we process in our B2B operations.
                                </p>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    This Privacy Policy explains how we collect, use, share, and protect your information when you partner with us or use our services. By engaging with our platform or services, you acknowledge and consent to the practices described herein.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    1. Information We Collect
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    As a B2B-focused DMC specializing in on-ground coordination and travel experiences, we collect data necessary to deliver seamless travel operations:
                                </p>

                                <p className="text-slate-700 font-semibold text-sm md:text-base mb-2">Business Partner Information:</p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>Contact details including names, job titles, company information, email addresses, and phone numbers of our B2B partners (travel agents, tour operators, corporate clients)</li>
                                    <li>Billing and invoicing information for business transactions</li>
                                </ul>

                                <p className="text-slate-700 font-semibold text-sm md:text-base mb-2">Travel Operations Data:</p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>Passenger information provided by our partners for bookings, including names, nationalities, passport numbers, dates of birth, dietary requirements, accessibility needs, and special requests</li>
                                    <li>Itinerary preferences, destination choices, and accommodation requirements</li>
                                </ul>

                                <p className="text-slate-700 font-semibold text-sm md:text-base mb-2">Platform Usage Data:</p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>IP addresses, device information, browser type, and operating system</li>
                                    <li>Interaction logs and browsing activity on our B2B portal for service optimization</li>
                                </ul>

                                <p className="text-slate-700 font-semibold text-sm md:text-base mb-2">Payment Information:</p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>Financial transaction data processed securely through certified third-party payment gateways</li>
                                    <li>Banking details for partner settlements</li>
                                </ul>

                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    We collect sensitive personal data only when essential for travel compliance purposes, such as visa processing, health requirements, or legal mandations.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    2. How We Use Your Information
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    We process your data exclusively for legitimate B2B purposes that enable us to deliver reliable operations and stress-free on-ground coordination:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-2 mb-4 ml-2">
                                    <li><strong>Service Delivery:</strong> Processing bookings, coordinating accommodations, transportation, guided tours, and all on-ground logistics</li>
                                    <li><strong>Partner Communication:</strong> Sharing itinerary updates, confirmations, operational changes, and payment-related correspondence</li>
                                    <li><strong>Service Enhancement:</strong> Analyzing usage patterns and preferences to improve our DMC services and tailor travel experiences</li>
                                    <li><strong>Legal Compliance:</strong> Meeting regulatory requirements including KYC procedures, travel regulations, tax obligations, and statutory record-keeping</li>
                                    <li><strong>Business Development:</strong> Sending relevant B2B communications, service updates, and promotional offers (you may opt out at any time)</li>
                                </ul>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    <strong>Data Retention:</strong> We retain your information only for as long as necessary to fulfill these purposes or comply with legal obligations (for example, financial records are maintained for 7 years as required under Indian law).
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    3. Information Sharing and Disclosure
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    To deliver flawless itineraries without the stress of on-ground coordination, we share data with trusted partners under strict confidentiality obligations:
                                </p>

                                <p className="text-slate-700 font-semibold text-sm md:text-base mb-2">Travel Service Providers:</p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>Hotels, resorts, airlines, ground transportation companies, activity providers, and local guides necessary for booking fulfillment</li>
                                </ul>

                                <p className="text-slate-700 font-semibold text-sm md:text-base mb-2">Business Service Providers:</p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>Payment processors, financial institutions, and banking partners</li>
                                    <li>Cloud infrastructure providers (such as AWS, Google Workspace) operating under comprehensive data processing agreements</li>
                                    <li>IT support and cybersecurity service providers</li>
                                </ul>

                                <p className="text-slate-700 font-semibold text-sm md:text-base mb-2">Legal and Regulatory Authorities:</p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>Government agencies, law enforcement, or legal advisors when required by law or to protect our rights</li>
                                    <li>Compliance with the Digital Personal Data Protection Act (DPDP), 2023, and international travel regulations</li>
                                </ul>

                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-2">
                                    <strong>International Transfers:</strong> When working with international partners or service providers, we ensure data transfers comply with applicable standards including GDPR adequacy decisions or Standard Contractual Clauses (SCCs).
                                </p>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                                    We never sell your data to third parties.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    4. Data Security
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    We implement industry-leading security measures to protect your information from unauthorized access, alteration, disclosure, or destruction:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>End-to-end encryption for data transmission</li>
                                    <li>Secure socket layer (SSL) technology for our B2B portal</li>
                                    <li>Multi-factor authentication and role-based access controls</li>
                                    <li>Regular security audits and vulnerability assessments</li>
                                    <li>Compliance with ISO 27001 information security standards</li>
                                </ul>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    <strong>Breach Notification:</strong> In the unlikely event of a data breach affecting your information, we will notify affected parties and relevant regulatory authorities within the timeframes required by law (within 72 hours under the DPDP Act, 2023).
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    5. Your Privacy Rights
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    Under applicable data protection laws including the Digital Personal Data Protection Act, 2023, and GDPR (where applicable), you have the following rights:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-2 mb-4 ml-2">
                                    <li><strong>Access:</strong> Request copies of your personal data we hold</li>
                                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                                    <li><strong>Deletion:</strong> Request erasure of your data (subject to legal retention requirements)</li>
                                    <li><strong>Restriction:</strong> Limit how we process your information</li>
                                    <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                                    <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                                    <li><strong>Withdraw Consent:</strong> Revoke consent where processing is consent-based</li>
                                </ul>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    To exercise any of these rights, please contact our Data Protection Officer at <a href="mailto:privacy@euroasiandmc.com" className="text-[#1F3A5F] hover:underline">privacy@euroasiandmc.com</a>. We will respond to your request within 30 days.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    6. Cookies and Tracking Technologies
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    Our B2B portal uses cookies and similar technologies to enhance functionality, analyze performance, and improve user experience:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-2 mb-4 ml-2">
                                    <li><strong>Essential Cookies:</strong> Required for platform operation, authentication, and security</li>
                                    <li><strong>Analytics Cookies:</strong> Tools like Google Analytics to understand usage patterns and optimize our services</li>
                                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                                </ul>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect platform functionality.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    7. Children's Privacy
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    Our services are exclusively B2B and designed for professional travel industry partners. We do not knowingly collect information from individuals under 18 years of age. While we may process traveler data that includes minors as part of group bookings arranged by our partners, we do not directly engage with children.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    8. Third-Party Links
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    Our website may contain links to third-party websites, suppliers, or partner platforms. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before sharing any information.
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    9. Updates to This Privacy Policy
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or business operations. Significant changes will be communicated through:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1 mb-4 ml-2">
                                    <li>Posting the updated policy on our website with a revised effective date</li>
                                    <li>Email notification to our registered B2B partners (where appropriate)</li>
                                </ul>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    Your continued use of our services after such updates constitutes acceptance of the revised policy.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    10. Governing Law
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    This Privacy Policy is governed by the laws of India. Any disputes arising from this policy or our data practices shall be subject to the exclusive jurisdiction of courts in Noida, India.
                                </p>
                            </div>

                            {/* Section 11 */}
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-4">
                                    11. Contact Us
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                    For questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:
                                </p>
                                <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-1">
                                    <p><strong>Data Protection Officer</strong></p>
                                    <p>EuroAsianDMC Pvt Ltd</p>
                                    <p>Email: <a href="mailto:privacy@euroasiandmc.com" className="text-[#1F3A5F] hover:underline">privacy@euroasiandmc.com</a></p>
                                    <p>Website: <a href="https://www.euroasiandmc.com" target="_blank" rel="noopener noreferrer" className="text-[#1F3A5F] hover:underline">https://www.euroasiandmc.com</a></p>
                                    <p>Phone: +91 7303935818</p>
                                </div>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4 italic">
                                    At EuroAsianDMC, we're committed to being your trusted partner for seamless travel experiences—and that includes protecting your privacy every step of the way.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-72 xl:w-80 shrink-0">
                            <div className="sticky top-8">
                                {/* Quick Links Card */}
                                <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 mb-6">
                                    <h4 className="font-bold text-slate-900 text-lg mb-4">Quick Links</h4>
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li>
                                            <Link href="/about" className="hover:text-[#1F3A5F] transition-colors">
                                                About us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy" className="text-[#1F3A5F] font-medium">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms" className="hover:text-[#1F3A5F] transition-colors">
                                                Terms
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog" className="hover:text-[#1F3A5F] transition-colors">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#contact" className="hover:text-[#1F3A5F] transition-colors">
                                                Contact us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={scrollToContact}
                                    className="w-full bg-[#E86D48] hover:bg-[#d55f3c] text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
                                >
                                    Get a DMC Proposal
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/917303935818"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all group"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </>
    );
}
