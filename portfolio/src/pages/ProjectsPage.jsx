import ProjectsCard from "../components/UI/ProjectsCard"
import { projectsData } from "../data/projectsData"

export default function ProjectsPage() {
  return (
    <section className="w-full text-[var(--text-main)]">
      <div className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-10 sm:px-8 lg:px-12">
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[var(--text-soft)]">
            Portfolio
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            A collection of my work across development, UI/UX, game design, and
            creative communications.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectsCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}