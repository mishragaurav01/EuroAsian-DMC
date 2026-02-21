import ServiceCard from '../ui/ServiceCard';

export default function DestinationServices({ services }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black mb-4">
                        What We offer
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-base">
                        We are your trusted local DMC partner in Thailand, dedicated to crafting and delivering extraordinary,
                        seamless, and unforgettable travel experiences for every traveler.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
