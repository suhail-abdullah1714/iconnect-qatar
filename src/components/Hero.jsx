import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F5F0]">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/properties/property-0.webp"
          alt="Luxury modern apartment interior"
          className="h-full w-full object-cover object-center"
        />

        {/* Main text readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F0]/[0.98] via-[#F7F5F0]/[0.78] to-[#F7F5F0]/[0.08]" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F7F5F0]/50 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/60 to-transparent" />
      </div>

      {/* Decorative rings */}
      <div className="pointer-events-none absolute -right-28 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/40 lg:block" />

      <div className="pointer-events-none absolute -right-16 top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-white/30 lg:block" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 pb-40 pt-32 md:px-10 md:pb-32 md:pt-36 lg:px-14">

        <div className="max-w-4xl">

          {/* Location / category */}
          <div className="mb-6 flex items-center gap-3 md:mb-7">

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B08A4A]/30 bg-white/65 backdrop-blur-sm">
              <MapPin
                size={14}
                strokeWidth={1.8}
                className="text-[#B08A4A]"
              />
            </span>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#B08A4A] md:text-[10px]">
                iConnectsNow Qatar
              </p>

              <p className="mt-1 text-[11px] text-[#777168] md:text-xs">
                Apartments • Studios • Rooms
              </p>
            </div>

          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-[3.45rem] font-medium leading-[0.87] tracking-[-0.07em] text-[#171717] sm:text-[4rem] md:text-[clamp(3.7rem,8.5vw,8.5rem)] md:leading-[0.84]">

            Find a place

            <br />

            <span className="relative inline-block font-serif italic text-[#B08A4A]">

              you&apos;ll love.

              <span className="absolute -bottom-2 left-1/2 h-px w-16 -translate-x-1/2 bg-[#B08A4A]/50 md:-bottom-3 md:w-24" />

            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-[13px] leading-6 text-[#5F5A52] sm:text-[14px] md:mt-9 md:text-lg md:leading-8">

            Tell us what you are looking for and let iConnectsNow help
            you discover apartments, studios and rooms that match
            your needs across Qatar.

          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap md:mt-9 md:gap-3">

            {/* Find Property */}
            <a
              href="#find-property"
              className="group flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#171717] px-7 py-3.5 text-[13px] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B08A4A] md:min-h-0 md:py-4 md:text-sm"
            >
              Find My Property

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* Sample Homes */}
            <a
              href="#properties"
              className="flex min-h-[48px] items-center justify-center rounded-full border border-[#CFC8BC] bg-white/70 px-7 py-3.5 text-[13px] font-medium text-[#292622] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B08A4A] hover:bg-white md:min-h-0 md:py-4 md:text-sm"
            >
              View Sample Homes
            </a>

            {/* List Property */}
            <a
              href="#list-property"
              className="group flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#B08A4A]/45 bg-[#B08A4A]/10 px-7 py-3.5 text-[13px] font-medium text-[#6B512C] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B08A4A] hover:bg-[#B08A4A] hover:text-white md:min-h-0 md:py-4 md:text-sm"
            >
              List My Property

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
              />
            </a>

          </div>

          {/* Trust points */}
          <div className="mt-7 hidden flex-wrap items-center gap-x-6 gap-y-3 sm:flex md:mt-8">

            <div className="flex items-center gap-2 text-xs text-[#777168]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />
              Requirement Matching
            </div>

            <div className="flex items-center gap-2 text-xs text-[#777168]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />
              Direct WhatsApp
            </div>

            <div className="flex items-center gap-2 text-xs text-[#777168]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />
              Qatar Focused
            </div>

          </div>

        </div>
      </div>

      {/* Bottom explore control */}
      <div className="absolute bottom-7 left-6 right-6 z-20 md:left-10 md:right-10 lg:left-14 lg:right-14">

        <div className="mx-auto flex max-w-[1440px] items-end justify-between">

          {/* Desktop supporting text */}
          <div className="hidden items-center gap-4 sm:flex">

            <div className="flex items-center gap-3">

              <Sparkles
                size={14}
                className="text-[#B08A4A]"
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#777168]">
                Property matching, made simple
              </span>

            </div>

          </div>

          {/* Explore */}
          <a
            href="#properties"
            className="group ml-auto flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#4C4842]"
          >
            Explore

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CFC8BC] bg-white/65 backdrop-blur-sm transition-all duration-300 group-hover:border-[#B08A4A] group-hover:bg-white">

              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />

            </span>

          </a>

        </div>
      </div>

    </section>
  )
}

export default Hero