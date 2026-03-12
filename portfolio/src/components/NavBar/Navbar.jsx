export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Extra", href: "#extra" },
  ]

  return (
    <nav className="fixed inset-x-0 top-4 z-50 flex justify-end px-6 sm:px-8">
      <div
        className="
          flex items-center gap-8
          rounded-full
          px-6 py-2
          text-lg font-medium tracking-wide
          backdrop-blur-md
          border
          shadow-lg
          
          /* LATTE (light mode) */
          bg-black/70 text-white border-black/20
          
          /* MOCHA (dark mode) */
          dark:bg-white/25 dark:text-white dark:border-white/20
        "
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="
              transition
              hover:opacity-80
            "
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}