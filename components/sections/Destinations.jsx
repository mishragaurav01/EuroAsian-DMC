import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";

/**
 * Destinations section component.
 * Server Component - displays destination cards in a grid (desktop) or horizontal scroll (mobile).
 */
export default function Destinations() {
  const destinations = [
    {
      slug: "almaty",
      name: "Almaty",
      image: "/destinations/almatyT1.jpeg",
    },
    {
      slug: "baku",
      name: "Baku",
      image: "/destinations/Baku.jpg",
    },
    {
      slug: "tashkent",
      name: "Tashkent",
      image: "/destinations/tashkentT1.jpeg",
    },
    {
      slug: "georgia",
      name: "Georgia",
      image: "/destinations/georgia.jpg",
    },
    {
      slug: "dubai",
      name: "Dubai",
      image: "/destinations/dubai.jpg",
    },
  ];

  return (
    <section
      id="destinations"
      className="pt-28 sm:pt-16 lg:pt-25 pb-12 sm:pb-16 lg:pb-20 bg-[#F9FAFB]"
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1F3A5F]">
            <span className="text-[#E85D2A]">Destinations</span> we actively
            manage
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 sm:mt-4 text-sm md:text-base px-2">
            Each destination is supported by vetted suppliers, experienced
            guides, and dedicated coordination teams - so your itineraries run
            exactly as promised.
          </p>
        </div>

        {/* Destinations - Horizontal scroll on mobile/tablet, 5-column grid on desktop */}
        {/* Destinations - Vertical on mobile, 5-column grid on desktop */}
<div
  className="
    grid
    grid-cols-1
    md:grid-cols-5
    gap-4 lg:gap-5
    pb-4 lg:pb-0
    -mx-4 px-4 lg:mx-0 lg:px-0
  "
>
  {destinations.map((destination) => (
    <Link
      key={destination.slug}
      href={`/destinations/${destination.slug}`}
      className="group block mx-auto w-[95%] md:w-full"
    >
      <Card
        radius="r25"
        className="
          relative aspect-5/4 md:aspect-[2.5/4]
          overflow-hidden border border-black/15
          transition-all duration-300 ease-out
          group-hover:-translate-y-[2px]
          group-hover:shadow-md
        "
      >
        {/* Background Image */}
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="
            object-center
            sm:object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-[1.03]
          "
          // sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
        />

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="flex items-center justify-between p-4 bg-white">
            <h3
              className="
                text-lg font-bold text-[#1F3A5F]
                transition-colors duration-300
                group-hover:text-[#E85D2A]
              "
            >
              {destination.name}
            </h3>

            {/* Arrow Button */}
            <div
              className="
                w-8 h-8 rounded-full border border-slate-200
                flex items-center justify-center
                transition-colors duration-300
                group-hover:bg-[#E85D2A]
                group-hover:border-[#E85D2A]
              "
            >
              <svg
                className="
                  w-4 h-4 text-slate-500
                  transition-all duration-300
                  group-hover:text-white
                  group-hover:translate-x-[2px]
                "
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
