import React, { useState } from 'react'
import { MapPinIcon, MenuIcon, XIcon } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('ABOUT')

  const links = ['HOME', 'ABOUT', 'SERVICES', 'CONTACT']

  return (
    <header className="w-full bg-[#0b1633]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <MapPinIcon
            className="w-7 h-7 sm:w-8 sm:h-8 text-[#f5b400]"
            strokeWidth={2.5}
            fill="#f5b400"
            stroke="#f5b400"
          />
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight">
            <span className="text-[#f5b400]">වැඩ</span>
            <span className="text-white underline underline-offset-4 decoration-[1.5px]">
              hub
            </span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`text-sm xl:text-base font-semibold tracking-wide transition-colors ${
                  active === link
                    ? 'text-[#f5b400]'
                    : 'text-white hover:text-[#f5b400]'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            className="px-6 xl:px-8 py-2 rounded-md border border-white/70 text-white text-sm xl:text-base font-medium hover:bg-white/10 transition-colors"
          >
            Log In
          </button>
          <button
            type="button"
            className="px-6 xl:px-8 py-2 rounded-md bg-[#f5b400] text-[#0b1633] text-sm xl:text-base font-semibold hover:bg-[#e0a500] transition-colors"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 px-4 sm:px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => {
                    setActive(link)
                    setIsOpen(false)
                  }}
                  className={`block text-base font-semibold tracking-wide transition-colors ${
                    active === link
                      ? 'text-[#f5b400]'
                      : 'text-white hover:text-[#f5b400]'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2 rounded-md border border-white/70 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Log In
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2 rounded-md bg-[#f5b400] text-[#0b1633] text-sm font-semibold hover:bg-[#e0a500] transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}