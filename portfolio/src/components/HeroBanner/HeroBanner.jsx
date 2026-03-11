import Navbar from "../NavBar/Navbar"
import "./HeroBanner.css"
import bannerStrip from "../../assets/herobanner.png"

export default function HeroBanner({ theme, setTheme }) {
  const isMocha = theme === "mocha"

  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[180px] overflow-hidden sm:h-[220px] lg:h-[260px]">

        <Navbar />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/20 via-white/5 to-[#fff7ed]/35" />

        <div className="marquee-track h-full">
          <img
            src={bannerStrip}
            alt="Portfolio collage strip"
            className="block h-full w-auto max-w-none shrink-0"
          />
          <img
            src={bannerStrip}
            alt="Portfolio collage strip duplicate"
            className="block h-full w-auto max-w-none shrink-0"
          />
        </div>

        {/* THEME SWITCH */}
        <div className="absolute bottom-4 right-4 z-30 sm:bottom-5 sm:right-6">
          <button
            type="button"
            role="switch"
            aria-checked={isMocha}
            aria-label="Toggle theme"
            onClick={() => setTheme(isMocha ? "latte" : "mocha")}
            className="relative inline-flex h-7 w-12 items-center rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] transition-colors duration-300"
          >
            <span
              className={`absolute left-1 h-5 w-5 rounded-full transition-transform duration-300 ${
                isMocha
                  ? "translate-x-5 bg-[var(--ctp-lavender)]"
                  : "translate-x-0 bg-[var(--ctp-yellow)]"
              }`}
            />
          </button>
        </div>

      </div>
    </section>
  )
}