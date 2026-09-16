import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Bath,
  BedDouble,
  Check,
  MapPin,
  MessageCircle,
  X,
} from 'lucide-react'

import { properties } from '../data/properties'
import { createWhatsAppUrl } from '../utils/whatsapp'

function PropertyDetails() {
  const { id } = useParams()

  const property = properties.find(
    (item) => item.id === Number(id)
  )

  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!property) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F5F0] px-6">

        <div className="text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#B08A4A]">
            IConnect Qatar
          </p>

          <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em]">
            Property not found
          </h1>

          <p className="mt-4 text-[#6F6B63]">
            This example property could not be found.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-medium text-white"
          >
            <ArrowLeft size={16} />
            Back to IConnect
          </Link>

        </div>

      </main>
    )
  }

  const whatsappMessage = `
Hello IConnect Qatar,

I saw this example apartment on your website and would like to find something similar.

EXAMPLE PROPERTY

Property:
${property.title}

Location:
${property.location}

Type:
${property.type}

Bedrooms:
${property.bedrooms}

Bathrooms:
${property.bathrooms}

Furnishing:
${property.furnishing || 'Not specified'}

Indicative Monthly Budget:
QAR ${property.price.toLocaleString()}

Please help me find similar apartments or rooms that may currently be available.

Thank you.
  `.trim()

  const whatsappUrl = createWhatsAppUrl(whatsappMessage)

  const galleryImages = [
    property.image,
    property.image,
    property.image,
  ]

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#171717]">

      {/* HEADER */}
      <header className="border-b border-[#E5E0D7] bg-[#F7F5F0]">

        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 lg:px-14">

          <Link
            to="/"
            className="group flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B08A4A]/40 bg-white">
              <span className="text-sm font-semibold tracking-[-0.05em]">
                IC
              </span>
            </div>

            <div>

              <div className="text-[17px] font-semibold tracking-[-0.03em]">
                ICONNECT
              </div>

              <div className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#8A857C]">
                Qatar
              </div>

            </div>

          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#5F5A52] transition-colors hover:text-[#B08A4A]"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

        </div>

      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-10 md:py-12 lg:px-14">

        {/* BREADCRUMB */}
        <div className="mb-8 flex items-center gap-2 text-xs text-[#8A857C]">

          <Link
            to="/"
            className="transition-colors hover:text-[#B08A4A]"
          >
            Home
          </Link>

          <span>/</span>

          <span>Example Property</span>

          <span>/</span>

          <span className="text-[#35312C]">
            {property.area}
          </span>

        </div>

        {/* GALLERY */}
        <section className="grid gap-3 lg:grid-cols-[1.55fr_1fr]">

          {/* MAIN */}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group relative aspect-[16/10] overflow-hidden bg-[#E8E4DC] lg:aspect-auto lg:min-h-[600px]"
          >

            <img
              src={galleryImages[0]}
              alt={property.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#33302B] backdrop-blur-md">
                Example Residence
              </span>

            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-xs font-medium text-[#292622] backdrop-blur-md">
              View gallery
              <ArrowUpRight size={14} />
            </div>

          </button>

          {/* SIDE IMAGES */}
          <div className="hidden gap-3 lg:grid">

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative min-h-0 overflow-hidden bg-[#E8E4DC]"
            >
              <img
                src={galleryImages[1]}
                alt={`${property.title} interior`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </button>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative min-h-0 overflow-hidden bg-[#E8E4DC]"
            >
              <img
                src={galleryImages[2]}
                alt={`${property.title} living space`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </button>

          </div>

        </section>

        {/* INFORMATION */}
        <section className="mt-12 grid gap-14 lg:grid-cols-[1fr_380px]">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-2 text-sm text-[#777168]">

              <MapPin
                size={15}
                className="text-[#B08A4A]"
              />

              {property.location}

            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              {property.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#6F6B63] md:text-lg">
              {property.description}
            </p>

            {/* NOTICE */}
            <div className="mt-10 border border-[#E3DED5] bg-white p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFE8DA]">

                  <Check
                    size={17}
                    className="text-[#B08A4A]"
                  />

                </div>

                <div>

                  <h3 className="text-sm font-medium text-[#27231F]">
                    Example property
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#777168]">
                    This apartment is shown as an example of the
                    type of furnished residence IConnect can help
                    you find. Availability and pricing can change.
                  </p>

                </div>

              </div>

            </div>

            {/* FEATURES */}
            <div className="mt-12 border-y border-[#E5E0D7] py-7">

              <div className="grid gap-6 sm:grid-cols-4">

                <div className="flex items-center gap-4">

                  <BedDouble
                    size={20}
                    className="text-[#B08A4A]"
                  />

                  <div>

                    <p className="text-xs uppercase tracking-[0.15em] text-[#8A857C]">
                      Bedrooms
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {property.bedrooms}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <Bath
                    size={20}
                    className="text-[#B08A4A]"
                  />

                  <div>

                    <p className="text-xs uppercase tracking-[0.15em] text-[#8A857C]">
                      Bathrooms
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {property.bathrooms}
                    </p>

                  </div>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-[#8A857C]">
                    Property type
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    {property.type}
                  </p>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-[#8A857C]">
                    Furnishing
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    {property.furnishing || '—'}
                  </p>

                </div>

              </div>

            </div>

            {/* ABOUT */}
            <div className="mt-12">

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#B08A4A]">
                About this example
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                A glimpse of what we can connect you with.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6F6B63]">
                IConnect works around your requirements rather
                than asking you to search endlessly through
                listings. Share your preferred location, budget,
                apartment type and other requirements with our
                team.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6F6B63]">
                We can then help you explore suitable options
                and connect you directly through WhatsApp.
              </p>

            </div>

          </div>

          {/* RIGHT CARD */}
          <aside className="lg:sticky lg:top-8 lg:self-start">

            <div className="border border-[#E3DED5] bg-white p-7 shadow-[0_20px_70px_rgba(23,23,23,0.05)] md:p-8">

              <p className="text-xs uppercase tracking-[0.25em] text-[#B08A4A]">
                Looking for something similar?
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-[1] tracking-[-0.04em]">
                Let us find it
                <span className="font-serif italic text-[#B08A4A]">
                  {' '}for you.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-6 text-[#6F6B63]">
                This is an example residence. Tell us what you are
                looking for and our team can help you find suitable
                apartments, studios or rooms.
              </p>

              {/* PRICE */}
              <div className="mt-8 border-y border-[#E5E0D7] py-5">

                <p className="text-xs uppercase tracking-[0.15em] text-[#8A857C]">
                  Indicative monthly budget
                </p>

                <p className="mt-2 text-2xl font-medium">
                  QAR {property.price.toLocaleString()}
                </p>

                <p className="mt-1 text-xs text-[#9A948A]">
                  Example pricing only
                </p>

              </div>

              {/* WHATSAPP */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#B08A4A]"
              >
                Find Similar Property

                <MessageCircle
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <Link
                to="/#find-property"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-[#D8D2C7] px-6 py-4 text-sm font-medium text-[#35312C] transition-colors hover:border-[#B08A4A]"
              >
                Submit My Requirements
              </Link>

              <p className="mt-5 text-center text-[11px] leading-5 text-[#9A948A]">
                Your enquiry will open directly in WhatsApp with
                IConnect.
              </p>

            </div>

          </aside>

        </section>

      </div>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E5E0D7] bg-white/95 p-3 backdrop-blur-md lg:hidden">

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-medium text-white"
        >
          <MessageCircle size={17} />
          Find Similar Property
        </a>

      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">

          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#171717]"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          <img
            src={property.image}
            alt={property.title}
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />

        </div>

      )}

    </main>
  )
}

export default PropertyDetails