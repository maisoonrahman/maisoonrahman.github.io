import { useEffect, useState } from "react"
import BioSection from "./BioSection"
import Projects from "./ProjectsPreview"
import ExtrasSection from "./ExtrasSection"

export default function HomePage({ theme, setTheme }) {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 py-8">
        <BioSection />
        <Projects />
        <ExtrasSection theme={theme} setTheme={setTheme} />
      </section>
    </>
  )
}