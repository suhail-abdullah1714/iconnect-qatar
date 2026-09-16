import { ArrowUpRight, Sparkles } from 'lucide-react'
import { properties } from '../data/properties'
import PropertyCard from './PropertyCard'

function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="relative overflow-hidden bg-[#F7F5F0] px-6 py-20 md:px-10 md:py-32 lg:px-14"
    >
      {/* Decorative rings */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#B08A4A]/10" />

      <div className="pointer-events-none absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#B08A4A]/10" />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-5 flex items-center gap-3 md:mb-6">

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B08A4A]/30 bg-[#EFE8DA]">
                <Sparkles
                  size={14}
                  className="text-[#B08A4A]"
                />
              </span>

              <p className="text-[10px] font-medium uppercase tracking-[0.27em] text-[#B08A4A] md:text-xs md:tracking-[0.3em]">
                Example residences
              </p>

            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-[2.7rem] font-medium leading-[0.95] tracking-[-0.055em] text-[#171717] sm:text-5xl md:text-6xl lg:text-7xl">

              A glimpse of what
              <br />

              <span className="font-serif italic text-[#B08A4A]">
                we can find.
              </span>

            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[14px] leading-6 text-[#6F6B63] sm:text-base sm:leading-7 md:mt-7 md:text-lg">
              Explore a few examples of the kind of furnished
              apartments, studios and rooms we can help you find
              across Qatar.
            </p>

          </div>

          {/* Example notice */}
          <div className="max-w-xl lg:max-w-xs lg:pb-2">

            <div className="border-l border-[#B08A4A] pl-4 sm:pl-5">

              <p className="text-[13px] leading-6 text-[#6F6B63] sm:text-sm">
                These are representative examples.
                Availability and pricing are confirmed
                directly through our team.
              </p>

              <a
                href="#find-property"
                className="group mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#292622] sm:mt-5 sm:text-sm"
              >
                Tell us what you need

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>

          </div>

        </div>

        {/* Property cards */}
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:mt-16 md:grid-cols-2 md:gap-y-16 lg:mt-20 lg:grid-cols-3">

          {properties.map((property, index) => (
            <div
              key={property.id}
              className={index === 1 ? 'lg:mt-12' : ''}
            >
              <PropertyCard property={property} />
            </div>
          ))}

        </div>

        {/* Bottom divider */}
        <div className="mt-16 border-t border-[#E1DBD0] pt-6 sm:mt-20 sm:pt-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            {/* Categories */}
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-[9px] uppercase tracking-[0.15em] text-[#8A857C] sm:gap-x-8 sm:text-xs sm:tracking-[0.16em]">

              <span>Apartments</span>
              <span>Studios</span>
              <span>Rooms</span>
              <span>Qatar</span>

            </div>

            {/* Find CTA */}
            <a
              href="#find-property"
              className="group flex w-fit items-center gap-3 text-[13px] font-medium text-[#292622] sm:text-sm"
            >
              Looking for something specific?

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D1C5] bg-white transition-all duration-300 group-hover:border-[#B08A4A] group-hover:bg-[#B08A4A] group-hover:text-white">

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

              </span>

            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default FeaturedProperties