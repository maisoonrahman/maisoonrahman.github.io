import { useEffect, useState } from "react"
import BioSection from "./BioSection"
import Projects from "./ProjectsPreview"
import ExtrasSection from "./ExtrasSection"

export default function HomePage({ theme, setTheme }) {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 py-8">
        <BioSection />

        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent my-16" />

        <Projects />

        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent my-16" />

        <ExtrasSection />
      </section>
    </>
  )
}