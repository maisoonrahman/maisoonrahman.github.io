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
        <h2 className="project-section-title font-serif text-xl md:text-2xl text-[var(--text-main)] leading-6">{section.title}</h2>
        <ul className="project-list">
          {section.items?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    )
  }

  if (section.type === "video") {
  return (
    <section id={sectionId} className="project-section font-serif text-xl md:text-2xl text-[var(--text-main)] leading-6">
      {section.title && (
        <h2 className="project-section-title">{section.title}</h2>
      )}

      <div className="project-video-wrap">
        {section.embed ? (
          <iframe
            src={section.embed}
            title={section.title || "Project video"}
            className="project-video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={section.video}
            controls
            autoPlay={section.autoplay || false}
            muted={section.muted ?? true}
            loop={section.loop || false}
            playsInline
            className="project-video"
          />
        )}
      </div>

      {section.caption && (
        <p className="project-image-caption">{section.caption}</p>
      )}
    </section>
  )
}

  if (section.type === "before-after") {
    return (
      <section id={sectionId} className="project-section">
        <h2 className="project-section-title font-serif text-xl md:text-2xl text-[var(--text-main)] leading-6">{section.title}</h2>

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
            <h3 className="project-subcard-title font-serif text-xl md:text-2xl text-[var(--text-main)] leading-6">After</h3>
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

  if (section.type === "image") {
  return (
    <section id={sectionId} className="project-section">
      {section.title && <h2 className="project-section-title font-serif text-xl md:text-2xl text-[var(--text-main)] leading-6">{section.title}</h2>}

      <div
        className={`project-inline-image-wrap ${
          section.size === "small"
            ? "project-inline-image-wrap--small"
            : section.size === "medium"
            ? "project-inline-image-wrap--medium"
            : ""
        }`}
      >
        <img
          src={section.image}
          alt={section.alt || section.title || "Project image"}
          className="project-inline-image"
        />
      </div>

      {section.caption && (
        <p className="project-image-caption">{section.caption}</p>
      )}
    </section>
  )
}

if (section.type === "image-group") {
  return (
    <div key={section.id} className="space-y-8">
      <h3 className="font-serif text-2xl text-[var(--text-main)]">
        {section.title}
      </h3>

      {section.images.map((img, i) => (
        <figure key={i} className="space-y-3">
          <img
            src={img.image}
            alt={img.alt}
            className="w-full rounded-2xl"
          />
          <figcaption className="text-sm text-[var(--text-muted)] italic">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

  if (section.type === "image-grid") {
    return (
      <section id={sectionId} className="project-section">
        {section.title && <h2 className="project-section-title font-serif text-xl md:text-2xl text-[var(--text-main)] leading-6">{section.title}</h2>}

        <div className="project-image-grid">
          {section.images?.map((img) => (
            <figure key={img.alt || img.src} className="project-image-grid-item">
              <img
                src={img.src}
                alt={img.alt || "Project image"}
                className="project-inline-image"
              />
              {img.caption && (
                <figcaption className="project-image-caption">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>
    )
  }

  return (
  <section id={sectionId} className="project-section">
    <h2 className="project-section-title font-serif text-xl md:text-2xl text-[var(--text-main)] leading-6">
      {section.title}
    </h2>

    <p className="project-section-text">{section.content}</p>

    {section.link && (
      <a
        href={section.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-sm text-[var(--text-muted)] underline underline-offset-4 hover:text-[var(--text-main)] transition"
      >
        {section.link.label} →
      </a>
    )}
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

  const navSections = sections.filter((section) =>
        ["overview", "problem", "design-approach", "reflection"].includes(
          getSectionId(section)
        )
      )

  return (
    <main className="w-full px-6 py-8">
     <div className="w-full md:grid md:grid-cols-[220px_minmax(0,7fr)] md:gap-6 md:items-start">
        <ProjectNav sections={navSections} />

        <article className="project-card" id="project-top">
          <div className="project-image-wrap">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-image"
            />
          </div>

          <header className="project-header">
            <h1 className="project-title font-serif text-3xl md:text-4xl sm:text-3xl text-[var(--text-main)] leading-7">{project.title}</h1>
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