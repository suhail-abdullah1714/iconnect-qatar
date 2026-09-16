import {
  ArrowUpRight,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navigation = [
    { label: 'Properties', href: '#properties' },
    { label: 'Find a Property', href: '#find-property' },
    { label: 'List Your Property', href: '#list-property' },
    { label: 'About', href: '#about' },
  ]

  const whatsappUrl = createWhatsAppUrl(
    'Hello IConnect Qatar, I would like to enquire about apartments and rooms.'
  )

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header className="absolute left-0 top-0 z-50 w-full">

      {/* Navbar */}
      <div className="mx-auto max-w-[1440px] px-4 pt-4 md:px-8 md:pt-5 lg:px-12">
        <div
          className={`relative flex items-center justify-between border border-white/50 bg-white/60 px-4 py-3 shadow-[0_8px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 md:px-5 ${
            open
              ? 'rounded-[24px] rounded-b-[12px] border-b-white/20'
              : 'rounded-full'
          }`}
        >

          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#B08A4A]/35 bg-white/80 transition-all duration-300 group-hover:border-[#B08A4A]">
              <span className="text-[12px] font-semibold tracking-[-0.08em] text-[#171717]">
                IC
              </span>

              <span className="absolute bottom-1.5 h-0.5 w-3 rounded-full bg-[#B08A4A]" />
            </div>

            <div className="leading-none">
              <div className="text-[15px] font-semibold tracking-[-0.035em] text-[#171717] md:text-[16px]">
                ICONNECT
              </div>

              <div className="mt-1 text-[7px] font-medium uppercase tracking-[0.32em] text-[#8A857C]">
                Qatar
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-[#E6E1D8]/70 bg-white/45 px-2 py-1.5 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-[13px] text-[#555049] transition-all duration-300 hover:bg-white hover:text-[#171717]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-[#171717] px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#B08A4A] lg:flex"
          >
            <MessageCircle
              size={14}
              strokeWidth={1.8}
            />

            <span>WhatsApp Us</span>

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white/80 text-[#292622] transition-all duration-300 hover:border-[#B08A4A] ${
              open
                ? 'border-[#B08A4A]/60'
                : 'border-[#D8D2C7]'
            } lg:hidden`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X
                size={19}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={19}
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-4 overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open
            ? 'mt-1 max-h-[520px] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="rounded-[22px] border border-[#E5DFD5] bg-white/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">

          {/* Navigation links */}
          <nav className="flex flex-col">

            {navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={`group flex min-h-[52px] items-center justify-between text-[14px] text-[#33302B] transition-colors duration-200 hover:text-[#B08A4A] ${
                  index !== navigation.length - 1
                    ? 'border-b border-[#EEEAE2]'
                    : ''
                }`}
              >
                <span>{item.label}</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5DFD5] bg-[#F7F5F0] transition-all duration-200 group-hover:border-[#B08A4A]/40 group-hover:bg-[#EFE8DA]">
                  <ArrowUpRight
                    size={14}
                    className="text-[#B08A4A]"
                  />
                </span>
              </a>
            ))}

          </nav>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#171717] px-5 py-3.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#B08A4A]"
          >
            <MessageCircle
              size={16}
              strokeWidth={1.8}
            />

            WhatsApp Us

            <ArrowUpRight
              size={15}
            />
          </a>

          {/* Small trust line */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.18em] text-[#9A958C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />
            Qatar Property Assistance
          </div>

        </div>
      </div>

    </header>
  )
}

export default Navbar