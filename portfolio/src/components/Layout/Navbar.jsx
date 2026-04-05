import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Extra", href: "#extra" },
  ]

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Desktop navbar */}
      <nav className="desktop-navbar fixed inset-x-0 top-4 z-50 hidden md:flex justify-end px-6 sm:px-8">
        <div
          className="
            flex items-center gap-8
            rounded-full
            px-6 py-2
            text-lg font-medium tracking-wide
            backdrop-blur-md
            border shadow-lg
            bg-[var(--navbar-bg)]
            text-[var(--navbar-text)]
            border-[var(--navbar-border)]
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:opacity-80"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu button */}
      <div className="mobile-menu-button-wrap fixed top-4 right-4 z-[70] md:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
        >
          <span className="mobile-menu-line line-1" />
          <span className="mobile-menu-line line-2" />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`mobile-menu-backdrop md:hidden ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <aside className={`mobile-menu-panel md:hidden ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Menu</span>
          </div>

          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="mobile-menu-link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}