import Image from "next/image";

/**
 * Services section component.
 * Displays service offerings with responsive icon sizing.
 */
export default function Services() {
  const services = [
    {
      id: "transportation",
      icon: "/icons/services/transportation.png",
      title: "Transportation & Transfers",
      description:
        "Airport transfers, intercity movement, luxury & group vehicles.",
      colorClass: "bg-[#E1F2F6]",
    },
    {
      id: "guides",
      icon: "/icons/services/guides.png",
      title: "Local Guides & Experiences",
      description:
        "Certified guides, unique experiences, and cultural immersion.",
      colorClass: "bg-[#F9F3D0]",
    },
    {
      id: "mice",
      icon: "/icons/services/mice.png",
      title: "MICE & Corporate Travel Support",
      description:
        "Meetings, incentives, conferences, exhibitions—handled locally.",
      colorClass: "bg-[#FBE6E5]",
    },
    {
      id: "support",
      icon: "/icons/services/support.png",
      title: "24/7 On-Ground Support",
      description:
        "Emergency handling and real-time coordination for peace of mind.",
      colorClass: "bg-[#DAF6E2]",
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#FAFAFA]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-4">
            What We <span className="text-[#E85D2A]">Handle</span>
          </h2>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">
            End-to-end destination services designed for travel companies.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center group"
            >
              {/* Icon Circle */}
              <div
                className={`
                  w-[72px] h-[72px]
                  md:w-[88px] md:h-[88px]
                  lg:w-[100px] lg:h-[100px]
                  rounded-full
                  ${service.colorClass}
                  flex items-center justify-center
                  mb-6
                `}
              >
                {/* Icon */}
                <div
                  className="
                    relative
                    w-[32px] h-[32px]
                    md:w-[48px] md:h-[48px]
                    lg:w-[64px] lg:h-[64px]
                  "
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 32px, (max-width: 1024px) 48px, 64px"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#1F3A5F] mb-3 px-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[260px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
