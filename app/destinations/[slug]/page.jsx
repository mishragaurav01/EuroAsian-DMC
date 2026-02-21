import { notFound } from 'next/navigation';
import { destinationsData } from '@/data/destinations';
import DestinationHero from '@/components/destination/DestinationHero';
import DestinationServices from '@/components/destination/DestinationServices';
import TourPlanner from '@/components/destination/TourPlanner';
import Packages from '@/components/destination/Packages';

// Use strict mode or correct function definition for generating static params if we wanted SSG,
// but for dynamic routing in App Router:
export function generateStaticParams() {
    return Object.keys(destinationsData).map((slug) => ({
        slug,
    }));
}

export default async function DestinationPage({ params }) {
    const { slug } = await params;
    const data = destinationsData[slug];

    if (!data) {
        notFound();
    }

    return (
        <div className="flex flex-col w-full">
            <DestinationHero
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                image={data.hero.image}
                objectPosition={data.hero.objectPosition}
                imageClassName={data.hero.imageClassName}
            />

            <DestinationServices services={data.services} />

            <TourPlanner
                plannerItems={data.planner}
                destinationName={slug.charAt(0).toUpperCase() + slug.slice(1)}
            />

            <Packages packages={data.packages} />
        </div>
    );
}
