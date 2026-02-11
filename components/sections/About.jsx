import Image from "next/image";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-14 lg:py-16 bg-[#F3F4F6]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1F3A5F]">
            Who You're{" "}
            <span className="text-[#E85D2A]">Partnering</span> with
          </p>
          <p className="mt-3 sm:mt-4 text-slate-600 text-sm md:text-base">
            A Destination Management Company built for travel professionals
          </p>
        </div>

        {/* Content - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-26 items-start">
          {/* LEFT: Images */}
          <div className="relative md:col-span-5 lg:col-span-5">
            {/* Main Image */}
            <div className="relative w-full h-[200px] sm:h-[350px] md:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="/about/about-main.png"
                alt="Travel professionals"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping Image - hidden on mobile, positioned on tablet+ */}
            <div className="
              hidden sm:block
              sm:absolute 
              sm:bottom-[-30px] sm:right-[-20px]
              lg:bottom-[-40px] lg:right-[-40px]
              w-[180px] sm:w-[200px] lg:w-[260px] 
              h-[140px] sm:h-[160px] lg:h-[200px] 
              rounded-2xl overflow-hidden
              border-[3px] border-[#F3F4F6] bg-white
            ">
              <Image
                src="/about/about-secondary.png"
                alt="Group travel experience"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 md:col-span-7 sm:mt-8 md:mt-0">
            <div>
              <h3 className="text-md font-extrabold text-[#1F3A5F] mb-3">
                Who we are
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
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
              <h3 className="text-md font-extrabold text-[#1F3A5F] mb-3">
                Our mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
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
