import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
} from 'lucide-react'

import { createWhatsAppUrl } from '../utils/whatsapp'

function Footer() {
  const year = new Date().getFullYear()

  const whatsappUrl = createWhatsAppUrl(
    'Hello IConnect Qatar, I would like to enquire about apartments and rooms.'
  )

  return (
    <footer className="bg-[#171717] px-6 pb-8 pt-20 text-white md:px-10 lg:px-14">

      <div className="mx-auto max-w-[1440px]">

        {/* TOP */}
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B08A4A]/50">
                <span className="text-sm font-semibold tracking-[-0.05em]">
                  IC
                </span>
              </div>

              <div>

                <div className="text-lg font-semibold tracking-[-0.03em]">
                  ICONNECT
                </div>

                <div className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/35">
                  Qatar
                </div>

              </div>

            </div>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
              Connecting people with apartments, studios and rooms
              across Qatar — simply, directly and personally.
            </p>

            <a
              href="#find-property"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#171717] transition-all duration-300 hover:bg-[#B08A4A] hover:text-white"
            >
              Find My Property

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

          {/* EXPLORE */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#B08A4A]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">

              <a
                href="#properties"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Properties
              </a>

              <a
                href="#find-property"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Find a Property
              </a>

              <a
                href="#list-property"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                List Your Property
              </a>

              <a
                href="#about"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                About IConnect
              </a>

            </nav>

          </div>

          {/* SERVICES */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#B08A4A]">
              For you
            </p>

            <div className="mt-6 flex flex-col gap-4">

              <span className="text-sm text-white/50">
                Apartments
              </span>

              <span className="text-sm text-white/50">
                Studios
              </span>

              <span className="text-sm text-white/50">
                Rooms
              </span>

              <span className="text-sm text-white/50">
                Property Owners
              </span>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#B08A4A]">
              Connect
            </p>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#B08A4A]"
                />

                <div>

                  <p className="text-sm text-white/70">
                    Qatar
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/35">
                    Apartments & rooms across Qatar
                  </p>

                </div>

              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <MessageCircle
                  size={17}
                  className="text-[#B08A4A]"
                />

                WhatsApp IConnect
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col justify-between gap-5 pt-7 text-xs text-white/30 md:flex-row md:items-center">

          <p>
            © {year} IConnect Qatar. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <span>
              Apartments
            </span>

            <span>
              Studios
            </span>

            <span>
              Rooms
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer