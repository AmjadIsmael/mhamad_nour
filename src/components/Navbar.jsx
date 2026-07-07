import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map(({ href }) => href.slice(1))

export default function Navbar() {
  const scrollActive = useActiveSection(sectionIds)
  const [pinnedActive, setPinnedActive] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const clearTimer = useRef(null)

  useEffect(() => () => clearTimeout(clearTimer.current), [])

  const activeSection = pinnedActive ?? scrollActive

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    setPinnedActive(id)
    setMobileOpen(false)
    el.scrollIntoView({ behavior: 'smooth' })

    clearTimeout(clearTimer.current)
    if ('onscrollend' in window) {
      const onScrollEnd = () => {
        setPinnedActive(null)
        window.removeEventListener('scrollend', onScrollEnd)
      }
      window.addEventListener('scrollend', onScrollEnd)
    } else {
      clearTimer.current = setTimeout(() => setPinnedActive(null), 1000)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <a
          className="font-display-lg-mobile text-headline-md text-primary tracking-tighter uppercase"
          href="#"
        >
          ELITE CREATIVE
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              className={`font-button text-button uppercase tracking-widest transition-colors ${
                href.slice(1) === activeSection
                  ? 'text-primary border-b border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
          <a
            className="bg-primary text-on-primary px-8 py-3 rounded-full font-button uppercase tracking-widest hover:scale-105 transition-transform duration-300"
            href="#contact"
          >
            Inquire
          </a>
        </div>
        <button
          className="md:hidden text-primary cursor-pointer"
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-6 px-margin-mobile py-8 bg-surface-container-lowest border-t border-primary/10">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              className={`font-button text-button uppercase tracking-widest transition-colors ${
                href.slice(1) === activeSection
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
          <a
            className="bg-primary text-on-primary px-8 py-3 rounded-full text-center font-button uppercase tracking-widest"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Inquire
          </a>
        </div>
      )}
    </nav>
  )
}
