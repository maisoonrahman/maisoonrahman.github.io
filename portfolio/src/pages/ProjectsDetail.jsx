import { Link, Navigate, useParams } from "react-router-dom"
import ProjectNav from "../components/UI/ProjectNav"
import { projectsData } from "../data/projectsData"
import "../styles/projects.css"
import "../styles/mobile.css"

function getSectionId(section) {
  return section.id || section.title?.toLowerCase().replace(/\s+/g, "-")
}

function MetaColumn({ label, value, pills = false }) {
  const values = Array.isArray(value) ? value : value ? [value] : []

  return (
    <div className="project-meta-col">
      <h3 className="project-meta-label">{label}</h3>

      {values.length === 0 ? (
        <p className="project-meta-text">—</p>
      ) : pills ? (
        <div className="project-pill-list">
          {values.map((item) => (
            <span key={item} className="project-pill">
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div className="project-meta-values">
          {values.map((item) => (
            <p key={item} className="project-meta-text">
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

function SectionRenderer({ section }) {
  const sectionId = getSectionId(section)

  if (section.type === "list") {
    return (
      <section id={sectionId} className="project-section">
        <h2 className="project-section-title">{section.title}</h2>
        <ul className="project-list">
          {section.items?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    )
  }

  if (section.type === "before-after") {
    return (
      <section id={sectionId} className="project-section">
        <h2 className="project-section-title">{section.title}</h2>

        <div className="project-compare-grid">
          <div className="project-subcard">
            <h3 className="project-subcard-title">Before</h3>
            <ul className="project-list">
              {section.before?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-subcard">
            <h3 className="project-subcard-title">After</h3>
            <ul className="project-list">
              {section.after?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id={sectionId} className="project-section">
      <h2 className="project-section-title">{section.title}</h2>
      <p className="project-section-text">{section.content}</p>
    </section>
  )
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projectsData.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const page = project.page || {}
  const meta = page.meta || {}
  const sections = page.sections || []

  return (
    <main className="w-full px-6 py-8">
     <div className="w-full md:grid md:grid-cols-[220px_minmax(0,7fr)] md:gap-6 md:items-start">
        <ProjectNav sections={sections} />

        <article className="project-card" id="project-top">
          <div className="project-image-wrap">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-image"
            />
          </div>

          <header className="project-header">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">
              {page.overview || project.cardDescription}
            </p>
          </header>

          <section className="project-meta-grid">
            <MetaColumn label="Timeline" value={meta.timeline} />
            <MetaColumn label="Role" value={meta.role} />
            <MetaColumn label="Collaborators" value={meta.collaborators} />
            <MetaColumn label="Tools" value={meta.tools || meta.tech} pills />
          </section>

          <div className="project-content">
            {sections.map((section, index) => (
              <SectionRenderer
                key={`${section.title}-${index}`}
                section={section}
              />
            ))}
          </div>

          <div className="project-back-row">
            <Link to="/projects" className="project-back-link">
              ← Back to Projects
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}