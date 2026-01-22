import Image from "next/image";

/**
 * Social Proof stats section component.
 * Server Component - displays hardcoded stats with icons.
 * Positioned to overlap with the hero section.
 */

const stats = [
  {
    icon: "/icons/social-proof/groups.png",
    value: "20,000+",
    label: "Groups Tour",
  },
  {
    icon: "/icons/social-proof/happy-customers.png",
    value: "94,000+",
    label: "Happy Customers",
  },
  {
    icon: "/icons/social-proof/destinations.png",
    value: "1000+",
    label: "Destinations",
  },
  {
    icon: "/icons/social-proof/experiences.png",
    value: "100+",
    label: "Experiences",
  },
];

export default function SocialProof() {
  return (
    <section className="relative z-30">
      <div className="absolute left-1/2 -top-15 -translate-x-1/2 w-[90%] md:w-[90%]">
        <div className="bg-[#FAFAFA] rounded-2xl shadow-xl py-1 px-8 border border-black/20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-300">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 py-4"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#1F3A5F33] flex-shrink-0">
                  <div className="relative w-6 h-6 md:w-10 md:h-10">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-xl md:text-2xl font-bold text-[#1F3A5F]">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-black">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
