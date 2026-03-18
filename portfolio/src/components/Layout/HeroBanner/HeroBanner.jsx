import Navbar from "../Navbar"
import "./HeroBanner.css"
import bannerStrip from "../../../assets/herobanner.png"

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

      </div>
    </section>
  )
}