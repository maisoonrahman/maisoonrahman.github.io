export default function ProjectNav({ sections = [] }) {
  const navSections = sections.map((section) => ({
    ...section,
    anchorId: section.id || section.title?.toLowerCase().replace(/\s+/g, "-"),
  }))

  return (
    <aside className="project-page-nav hidden md:block">
      <div className="project-page-nav-pill">
        <a href="#project-top" className="project-page-nav-link">
          Overview
        </a>

        {navSections.map((section) => (
          <a
            key={section.anchorId}
            href={`#${section.anchorId}`}
            className="project-page-nav-link"
          >
            {section.title}
          </a>
        ))}
      </div>
    </aside>
  )
}