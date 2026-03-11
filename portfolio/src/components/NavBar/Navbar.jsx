export default function Navbar() {
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Extra", href: "#extra" },
    ]

    return (
        <nav className="absolute inset-x-0 top-0 z-30 flex justify-end px-6 py-6 sm:px-8">
            <div className="flex items-center gap-8 rounded-full bg-white/30 backdrop-blur-md px-6 py-2 text-lg font-medium text-white tracking-wide drop-shadow-md">
            {navItems.map((item) => (
                <a
                key={item.label}
                href={item.href}
                className="transition hover:text-stone-950"
                > {item.label} </a>
            ))}
            </div>
        </nav>
    )
}