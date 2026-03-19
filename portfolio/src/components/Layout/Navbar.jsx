import { Link } from "react-router-dom"

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "/projects" },
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
          
          bg-[var(--navbar-bg)]
          text-[var(--navbar-text)]
          border-[var(--navbar-border)]
        "
      >
        {navItems.map((item) =>
  item.type === "route" ? (
    <Link
      key={item.label}
      to={item.path}
      className="transition hover:opacity-80"
    >
      {item.label}
    </Link>
  ) : (
    <a
      key={item.label}
      href={item.href}
      className="transition hover:opacity-80"
    >
      {item.label}
    </a>
  )
)}
      </div>
    </nav>
  )
}