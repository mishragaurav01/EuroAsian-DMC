import Image from 'next/image';

export default function DestinationHero({ title, subtitle, image }) {
    return (
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top"
                    priority
                />
                {/* <div className="absolute inset-0 bg-black/10" /> */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-black">
                <h1 className="text-4xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-xl md:text-lg max-w-3xl mx-auto drop-shadow-md text-black">
                    {subtitle}
                </p>
                
            </div>

            {/* Breadcrumb-like bottom bar (optional aesthetic touch) */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10" /> */}
        </section>
    );
}
