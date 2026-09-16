import {
  ArrowUpRight,
  Bath,
  BedDouble,
  MapPin,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="group block"
    >
      <article>

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-[#E8E4DC] sm:aspect-[4/3]">

          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.055]"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80" />

          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/15 to-transparent" />

          {/* Example label */}
          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/90 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.17em] text-[#33302B] shadow-sm backdrop-blur-md sm:px-3.5 sm:py-2 sm:text-[9px]">
              Example Residence
            </span>
          </div>

          {/* Property type */}
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
            <span className="rounded-full bg-[#171717]/80 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-md sm:px-3.5 sm:text-[10px]">
              {property.type}
            </span>
          </div>

          {/* Desktop hover arrow */}
          <div className="absolute bottom-4 right-4 hidden h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-[#171717] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:flex sm:bottom-5 sm:right-5">
            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>

        </div>

        {/* Content */}
        <div className="pt-4 sm:pt-5">

          {/* Title + Price */}
          <div className="flex items-start justify-between gap-4">

            <div className="min-w-0">

              <h3 className="text-[18px] font-medium leading-6 tracking-[-0.025em] text-[#171717] transition-colors duration-300 group-hover:text-[#8C6B3B] sm:text-[22px] sm:leading-7">
                {property.title}
              </h3>

              {/* Location */}
              <div className="mt-2 flex items-center gap-1.5 text-[13px] text-[#777168] sm:mt-2.5 sm:text-sm">

                <MapPin
                  size={13}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#B08A4A]"
                />

                <span>
                  {property.location}
                </span>

              </div>

            </div>

            {/* Price */}
            <div className="shrink-0 text-right">

              <p className="text-[16px] font-semibold tracking-[-0.02em] text-[#171717] sm:text-lg">
                QAR {property.price.toLocaleString()}
              </p>

              <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-[#99938A] sm:text-[11px]">
                Monthly
              </p>

            </div>

          </div>

          {/* Property features */}
          <div className="mt-4 flex items-center gap-4 border-t border-[#E5E0D7] pt-3.5 sm:mt-5 sm:gap-5 sm:pt-4">

            {/* Bedrooms */}
            <div className="flex items-center gap-1.5 text-[11px] text-[#6F6B63] sm:text-xs">

              <BedDouble
                size={15}
                strokeWidth={1.6}
                className="text-[#8A857C]"
              />

              <span>
                {property.bedrooms} Bed
              </span>

            </div>

            {/* Bathrooms */}
            <div className="flex items-center gap-1.5 text-[11px] text-[#6F6B63] sm:text-xs">

              <Bath
                size={15}
                strokeWidth={1.6}
                className="text-[#8A857C]"
              />

              <span>
                {property.bathrooms} Bath
              </span>

            </div>

            <span className="h-3 w-px bg-[#D9D3C8]" />

            {/* Furnishing */}
            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#8A857C] sm:text-[10px]">
              Furnished
            </span>

          </div>

          {/* Bottom information */}
          <div className="mt-3 flex items-center justify-between sm:mt-4">

            <span className="text-[11px] text-[#99938A] sm:text-xs">
              Representative example
            </span>

            {/* Desktop interaction */}
            <span className="hidden text-xs font-medium text-[#5C554C] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:inline">
              View details →
            </span>

            {/* Mobile interaction */}
            <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#8C6B3B] sm:hidden">
              View
              <ArrowUpRight
                size={13}
                strokeWidth={1.8}
              />
            </span>

          </div>

        </div>

      </article>
    </Link>
  )
}

export default PropertyCard