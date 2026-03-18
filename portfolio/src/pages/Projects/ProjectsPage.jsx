import { useMemo, useState } from "react"
import Navbar from "../components/Navbar"
import ProjectsCard from "../components/ProjectsCard"
import { projectCategories, projectsData } from "../data/projectsData"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("coding")

  const activeCategory = useMemo(
    () => projectCategories.find((category) => category.id === activeTab),
    [activeTab]
  )

  const filteredProjects = useMemo(
    () => projectsData.filter((project) => project.category === activeTab),
    [activeTab]
  )

  return (
    <main className="min-h-screen bg-[var(--bg-app)] text-[var(--text-main)]">
      <section className="relative border-b border-[var(--border-default)] bg-[var(--bg-secondary)]">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 pb-12 pt-28 sm:px-8 lg:px-12">
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[var(--text-soft)]">
            Portfolio
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            A collection of my work across development, design, and creative
            communications. Explore projects by category to see how I build,
            design, and present ideas.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projectCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[var(--card-shadow)]"
              >
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--heading-accent)]">
                  {category.label}
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {category.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-wrap gap-3">
          {projectCategories.map((category) => {
            const isActive = activeTab === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-[var(--heading-accent)] bg-[var(--heading-accent)] text-white shadow-[var(--card-shadow)]"
                    : "border-[var(--border-default)] bg-[var(--card-bg)] text-[var(--text-main)] hover:-translate-y-0.5 hover:shadow-[var(--card-shadow-hover)]"
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold tracking-tight">
            {activeCategory?.label}
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-muted)] sm:text-base">
            {activeCategory?.shortDescription}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}