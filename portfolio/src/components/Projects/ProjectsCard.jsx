import { Tag } from "lucide-react"

export default function ProjectCard({
  owner = "",
  name = "",
  description = "",
  tags = [],
  github = "",
  demo = "",
}) {
  return (
    <article className="flex h-[220px] flex-col overflow-hidden rounded-[16px] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      <div className="flex h-[143px] flex-col bg-[var(--panel-bg)] p-3">

        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--window-red)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--window-yellow)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--window-green)]" />
        </div>

        <p className="mb-2 text-[12px] text-[var(--panel-text)]">
          <span className="text-[var(--repo-owner)]">{owner}</span>
          <span className="px-1 text-[var(--panel-muted)]">/</span>
          <span className="text-[var(--repo-name)]">{name}</span>
        </p>

        <p className="line-clamp-4 text-[10px] leading-5 text-[var(--panel-text)]">
          {description}
        </p>

      </div>

      <div className="flex flex-1 items-center justify-between bg-[var(--bg-secondary)] px-3 py-2">

        <div className="flex items-center gap-2">


          <div className="flex flex-wrap gap-1.5">
            <Tag size={12} strokeWidth={2} className="text-[var(--tag-icon)]" />
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[5px] border border-[var(--tag-border)] bg-[var(--tag-bg)] px-2 py-[2px] text-[9px] text-[var(--tag-text)]"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {(github || demo) && (
          <div className="flex gap-2">

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-[9px] text-[var(--link-primary)] hover:underline"
              >
                GitHub
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="text-[9px] text-[var(--link-secondary)] hover:underline"
              >
                Demo
              </a>
            )}

          </div>
        )}

      </div>

    </article>
  )
}