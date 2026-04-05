import { useState } from "react"
import { motion } from "framer-motion"
import ProjectsCard from "../../components/UI/ProjectsCard"
import { projectsData } from "../../data/projectsData"
import "../../styles/projects.css"

export default function ProjectsPreview() {
  const featuredProjects = projectsData.filter((project) => project.featured)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!featuredProjects.length) return null

  const total = featuredProjects.length

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  const getRelativePosition = (index) => {
    const diff = (index - currentIndex + total) % total

    if (diff === 0) return "center"
    if (diff === 1) return "right"
    if (diff === total - 1) return "left"
    return "hidden"
  }

  const cardPositions = {
    left: {
      x: "-68%",
      scale: 0.84,
      opacity: 0.38,
      zIndex: 1,
      filter: "blur(0.4px)",
    },
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 3,
      filter: "blur(0px)",
    },
    right: {
      x: "68%",
      scale: 0.84,
      opacity: 0.38,
      zIndex: 1,
      filter: "blur(0.4px)",
    },
    hidden: {
      x: "0%",
      scale: 0.7,
      opacity: 0,
      zIndex: 0,
      filter: "blur(1px)",
    },
  }

  return (
    <section id="projects" className="px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-serif text-3xl md:text-4xl text-[var(--text-main)] leading-7 sm:text-3xl">
          Featured Projects
        </p>

        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center">
          <div className="relative h-[560px] w-full overflow-hidden sm:h-[600px]">
            <button
              type="button"
              onClick={prevProject}
              aria-label="Previous project"
              className="absolute left-[3%] top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-main)] shadow-md backdrop-blur-sm transition hover:scale-105"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="absolute right-[3%] top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-main)] shadow-md backdrop-blur-sm transition hover:scale-105"
            >
              →
            </button>

            <div className="relative h-full w-full">
              {featuredProjects.map((project, index) => {
                const position = getRelativePosition(index)
                const isCenter = position === "center"

                return (
                  <motion.div
                    key={project.slug || project.title}
                    className="absolute left-1/2 top-1/2 w-[78%] max-w-[260px] -translate-x-1/2 -translate-y-1/2 sm:max-w-[320px] md:max-w-[380px]"
                    initial={false}
                    animate={cardPositions[position]}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                      mass: 0.9,
                    }}
                    style={{
                      pointerEvents: isCenter ? "auto" : "none",
                    }}
                  >
                    <ProjectsCard project={project} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}