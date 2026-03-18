export default function BaseCard({
  title,
  icon,
  children,
  className = "",
  contentClassName = "",
}) {
  return (
    <div className={`
        rounded-[15px]
        px-4 py-4
        flex flex-col
        bg-[var(--card-bg)]
        border border-[var(--card-border)]
        shadow-[var(--card-shadow)]
        transition
        hover:-translate-y-1
        hover:shadow-[var(--card-shadow-hover)]
        ${className}
    `}>
      <div className="mb-2 flex items-start gap-3">
        {icon && (
          <span className="mt-1 shrink-0 text-[var(--accent)]">
            {icon}
          </span>
        )}
        <h3 className="text-sm font-bold text-[var(--text)]">
          {title}
        </h3>
      </div>

      <div className={`text-[var(--text-muted)] ${contentClassName}`} >
        {children}
      </div>
    </div>
  );
}