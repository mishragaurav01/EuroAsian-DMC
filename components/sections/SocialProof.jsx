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
      {/* Mobile/Tablet: relative positioning, Desktop: absolute floating over hero */}
      <div className="
        absolute lg:absolute 
        -top-12
        lg:left-1/2 lg:-top-15 lg:-translate-x-1/2 
        w-full lg:w-[90%] 
        px-4 lg:px-0
        -mt-8 lg:mt-0
        
      ">
        <div className="bg-[#FAFAFA] rounded-2xl shadow-xl py-2 sm:py-1 px-3 sm:px-6 lg:px-8 border border-black/20">
          {/* Mobile: 2x2 grid with dividers, Tablet/Desktop: 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-0 divide-x-0 md:divide-x divide-slate-300">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 py-3 sm:py-4 ${
                  /* Add top border on mobile for bottom row items */
                  index >= 2 ? 'border-t md:border-t-0 border-slate-200' : ''
                  }`}
              >
                {/* Icon Circle - responsive sizes */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-[#1F3A5F33] flex-shrink-0">
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1F3A5F]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-black leading-tight">
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
