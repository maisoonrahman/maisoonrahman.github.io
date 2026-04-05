import { useState, useEffect, useRef } from "react"
import { Coffee, Globe } from "lucide-react"

export default function Navbar({
  theme,
  setTheme,
  language,
  setLanguage,
}) {

  if (typeof setTheme !== "function") {
    throw new Error("Navbar did not receive setTheme prop")
  }

  if (typeof setLanguage !== "function") {
    throw new Error("Navbar did not receive setLanguage prop")
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const settingsRef = useRef(null)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ]

  const isDark = theme === "mocha"
  const isBangla = language === "BN"

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    function handleClickOutside(e) {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleNavClick = () => {
    setMenuOpen(false)
    setSettingsOpen(false)
  }

  const handleThemeToggle = (e) => {
    e.stopPropagation()
    console.log("theme toggle clicked")
    console.log("theme before:", theme)
    setTheme((prevTheme) => {
      console.log("updater saw prevTheme:", prevTheme)
      return prevTheme === "mocha" ? "latte" : "mocha"
    })
  }

  const handleLanguageToggle = (e) => {
    e.stopPropagation()
    setLanguage((prevLanguage) => (prevLanguage === "BN" ? "EN" : "BN"))
  }

const ToggleSwitch = ({
  checked,
  onClick,
  leftLabel,
  rightLabel,
  ariaLabel,
  knobIcon,
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    aria-pressed={checked}
    className="
      relative inline-flex h-10 w-[110px] shrink-0 items-center rounded-full
      border-2 border-[var(--navbar-text)]/70 bg-transparent px-1
      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    "
  >
    <span className="pointer-events-none absolute left-2 text-[11px] font-medium text-[var(--navbar-text)]/85">
      {leftLabel}
    </span>

    <span className="pointer-events-none absolute right-2 text-[11px] font-medium text-[var(--navbar-text)]/85">
      {rightLabel}
    </span>

    <span
      className={`absolute top-1 left-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--navbar-text)]/80 bg-[var(--bg-app)] text-[var(--navbar-text)] shadow transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        checked ? "translate-x-[66px]" : "translate-x-0"
      }`}
    >
      {knobIcon}
    </span>
  </button>
)

  return (
    <>
      <nav className="fixed inset-x-0 top-4 z-50 hidden justify-end px-6 md:flex sm:px-8">
        <div
          className="
            flex items-center gap-8
            rounded-full px-6 py-2
            text-lg font-medium tracking-wide
            border shadow-lg backdrop-blur-md
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

          <div ref={settingsRef} className="relative">
            <button
              type="button"
              onClick={() => setSettingsOpen((prev) => !prev)}
              aria-expanded={settingsOpen}
              className="flex items-center gap-2 transition hover:opacity-80"
            >
              <span>Settings</span>
              <span
                className={`inline-block transition-transform duration-300 ${
                  settingsOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ↓
              </span>
            </button>

            <div
              className={`absolute right-0 top-full mt-3 w-64 rounded-2xl border shadow-lg backdrop-blur-md bg-[var(--navbar-bg)] border-[var(--navbar-border)] text-[var(--navbar-text)] transition-all duration-300 ${
                settingsOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-4 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm">Theme</span>
                  <ToggleSwitch
                    checked={isDark}
                    onClick={handleThemeToggle}
                    leftLabel="Latte"
                    rightLabel="Mocha"
                    ariaLabel="Toggle theme"
                    knobIcon={<Coffee size={16} strokeWidth={2.2} />}
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm">Language</span>
                  <ToggleSwitch
                    checked={isBangla}
                    onClick={handleLanguageToggle}
                    leftLabel="E"
                    rightLabel="বা"
                    ariaLabel="Toggle language"
                    knobIcon={<Globe size={15} strokeWidth={2.2} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed top-4 right-4 z-[70] md:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((prev) => !prev)
            setSettingsOpen(false)
          }}
          className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
        >
          <span className="mobile-menu-line line-1" />
          <span className="mobile-menu-line line-2" />
        </button>
      </div>

      <div
        className={`mobile-menu-backdrop md:hidden ${menuOpen ? "is-open" : ""}`}
        onClick={() => {
          setMenuOpen(false)
          setSettingsOpen(false)
        }}
      />

      <aside className={`mobile-menu-panel md:hidden ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-inner">
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

            <div className="mobile-menu-link">
              <button
                type="button"
                onClick={() => setSettingsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between"
                aria-expanded={settingsOpen}
              >
                <span>Settings</span>
                <span
                  className={`inline-block transition-transform duration-300 ${
                    settingsOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ↓
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  settingsOpen ? "mt-4 max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="rounded-2xl border p-4 backdrop-blur-md bg-[var(--navbar-bg)] border-[var(--navbar-border)]">
                  <div className="flex items-center justify-between gap-4 pb-4">
                    <span className="text-sm text-[var(--navbar-text)]">Theme</span>
                    <ToggleSwitch
                      checked={isDark}
                      onClick={handleThemeToggle}
                      leftLabel="LT"
                      rightLabel="DK"
                      ariaLabel="Toggle theme"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-[var(--navbar-text)]">Language</span>
                    <ToggleSwitch
                      checked={isBangla}
                      onClick={handleLanguageToggle}
                      leftLabel="EN"
                      rightLabel="BN"
                      ariaLabel="Toggle language"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}