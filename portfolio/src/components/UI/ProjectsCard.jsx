import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const categoryLabelMap = {
  coding: "Coding",
  design: "Design",
  pr: "PR",
}

export default function ProjectsCard({ project }) {
  const {
    slug,
    title,
    cardDescription,
    tags = [],
    categories = [],
    thumbnail,
  } = project

  return (
    <Link
      to={`/projects/${slug}`}
      className="group block overflow-hidden rounded-[22px] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)]"
    >
      <article className="flex h-full flex-col">
        <div className="relative h-60 overflow-hidden border-b border-[var(--card-border)] bg-[var(--panel-bg)]">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[var(--panel-bg)] px-6 text-center text-sm text-[var(--panel-text)]">
              Project Preview
            </div>
          )}

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm"
              >
                {categoryLabelMap[category] || category}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 py-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-[var(--text-main)]">
              {title}
            </h3>

            <span className="mt-0.5 shrink-0 text-[var(--text-soft)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={18} />
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-[var(--text-muted)] sm:text-[15px]">
            {cardDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] px-3 py-1 text-[11px] font-medium text-[var(--tag-text)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}