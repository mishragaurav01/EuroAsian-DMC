import Image from "next/image";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#F3F4F6]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F3A5F]">
            Who You’re{" "}
            <span className="text-[#E85D2A]">Partnering</span> with
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base">
            A Destination Management Company built for travel professionals
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-26 items-start">
        {/* LEFT: Images (1/3 width) */}
        <div className="relative lg:col-span-4">
            {/* Main Image */}
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
            <Image
                src="/about/about-main.png"
                alt="Travel professionals"
                fill
                className="object-cover"
            />
            </div>

            {/* Overlapping Image */}
            <div className="absolute bottom-[-40px] right-[-40px] w-[260px] h-[200px] rounded-2xl overflow-hidden border-[3px] border-[#F3F4F6] bg-white">
            <Image
                src="/about/about-secondary.png"
                alt="Group travel experience"
                fill
                className="object-cover"
            />
            </div>
        </div>

        {/* RIGHT: Text Content (2/3 width) */}
        <div className="space-y-10 lg:col-span-7">
            <div>
            <h3 className="text-sm font-semibold text-[#1F3A5F] mb-3">
                Who we are
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We are a professional Destination Management Company (DMC)
                specializing in on-ground travel planning, coordination, and
                execution for travel agencies, tour operators, and corporate
                travel planners. From hotel contracting and transportation to
                local experiences and emergency handling—we act as your local
                operations team, ensuring your clients receive smooth,
                memorable journeys while you focus on selling and scaling your
                business.
            </p>
            </div>

            <div>
            <h3 className="text-sm font-semibold text-[#1F3A5F] mb-3">
                Our mission
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Our mission is to support travel professionals with dependable
                and innovative destination management services. We aim to
                simplify complex travel planning through expert local knowledge
                and flawless execution. By delivering customized solutions and
                maintaining high service standards, we create value for our
                partners. Every journey we manage is designed to be smooth,
                stress-free, and unforgettable.
            </p>
            </div>

            <div className="flex justify-end">
            <Button variant="secondary" size="sm">
                Know more
            </Button>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}
