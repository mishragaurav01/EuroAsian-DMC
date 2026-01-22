import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/ui/Card';

/**
 * Destinations section component.
 * Server Component - displays destination cards in a grid (desktop) or horizontal scroll (mobile).
 */
export default function Destinations() {
    const destinations = [
        {
            slug: 'almaty',
            name: 'Almaty',
            image: '/destinations/almaty.jpg',
        },
        {
            slug: 'baku',
            name: 'Baku',
            image: '/destinations/baku.jpg',
        },
        {
            slug: 'tashkent',
            name: 'Tashkent',
            image: '/destinations/tashkent.jpg',
        },
        {
            slug: 'georgia',
            name: 'Georgia',
            image: '/destinations/georgia.jpg',
        },
        {
            slug: 'dubai',
            name: 'Dubai',
            image: '/destinations/dubai.jpg',
        },
    ];

    return (
        <section id="destinations" className="pt-25 pb-20 bg-[#F9FAFB]">
            <div className="container">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F3A5F]">
                        <span className="text-[#E85D2A]">Destinations</span> we actively manage
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
                        Each destination is supported by vetted suppliers, experienced guides, and dedicated
                        coordination teams—so your itineraries run exactly as promised.
                    </p>
                </div>

                {/* Destinations - Horizontal scroll on mobile, 5-column grid on desktop */}
                <div className="flex lg:grid lg:grid-cols-5 gap-5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className="group flex-shrink-0 w-[200px] lg:w-auto"
                        >
                            <Card
                                radius="r25"
                                // shadow="md"
                                className="relative aspect-[2.5/4] overflow-hidden group border-2 border-black/20"
                            >
                                {/* Background Image - FULL CARD */}
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                                />

                                {/* Dark gradient for readability (optional but recommended) */}
                                <div className="absolute " />

                                {/* Bottom Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 z-10">
                                    <div className="flex items-center justify-between p-4 bg-white/98">
                                        <h3 className="text-lg font-bold text-[#1F3A5F]">
                                            {destination.name}
                                        </h3>

                                        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center
                                    group-hover:bg-[#E85D2A] group-hover:border-[#E85D2A]
                                    transition-colors duration-300"
                                        >
                                            <svg
                                                className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
