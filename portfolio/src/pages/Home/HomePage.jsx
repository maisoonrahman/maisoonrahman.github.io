import { useEffect, useState } from "react"
import BioSection from "./BioSection"
import Projects from "./ProjectsPreview"
import ExtrasSection from "./ExtrasSection"

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

      <main className="mx-auto w-full max-w-6xl px-6 py-8">

        <BioSection />
        <Projects />
        <ExtrasSection theme={theme} setTheme={setTheme} />

      </main>
    </div>
  )
}