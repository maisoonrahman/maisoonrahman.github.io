import { useEffect, useState } from "react"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import BioSection from "./components/BioSection/BioSection"
import Projects from "./components/Projects/Projects"
import ExtrasSection from "./components/extras/ExtrasSection"
import FooterBar from "./components/FooterBar"

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "latte"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-main)]">
      <HeroBanner />

      <main className="mx-auto w-full max-w-6xl px-6 py-8">

        <BioSection />
        <Projects />
        <ExtrasSection theme={theme} setTheme={setTheme} />
        <FooterBar />

      </main>
    </div>
  )
}