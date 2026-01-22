import IconCard from '../ui/IconCard';
import Image from 'next/image';

export default function TourPlanner({ plannerItems, destinationName }) {
    return (
        <section className="py-6 bg-[#F5F8FC]">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                        Your Incoming Tour Planner for{' '}
                        <span className="text-primary">{destinationName}</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A blend of modern cities, ancient traditions, and vast, untouched landscapes.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: ICON GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {plannerItems.map((item) => (
                            <IconCard
                                key={item.id}
                                title={item.title}
                                icon={item.icon}
                            />
                        ))}
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="relative h-[360px] md:h-[420px] rounded-xl overflow-hidden">
                        <Image
                            src="/images/planner-side.jpg"
                            alt="Tour Planner"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
