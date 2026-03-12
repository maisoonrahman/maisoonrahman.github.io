import { useState } from "react"
import { Palette } from "lucide-react"
import BaseCard from "./BaseCard"
import coffeeIcon from "../../assets/coffee.png"

function PreferenceToggle({
  label,
  checked,
  onToggle,
  leftText,
  rightText,
  thumbContent,
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-[var(--text)]">
        {label}
      </span>

      <div className="flex items-center gap-3">
        <span
          className={`text-sm transition ${
            !checked ? "text-[var(--text)] font-semibold" : "text-[var(--text-muted)] opacity-70"
          }`}
        >
          {leftText}
        </span>

        <button
          type="button"
          onClick={onToggle}
          aria-pressed={checked}
          className={`
            relative h-11 w-[92px] rounded-full border
            border-[rgba(255,255,255,0.28)]
            bg-[rgba(10,10,20,0.28)]
            transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-[rgba(255,255,255,0.18)]
          `}
        >
          <span
            className={`
              absolute top-1 h-9 w-9 rounded-full
              bg-[rgb(193,194,255)]
              shadow-[0_4px_12px_rgba(0,0,0,0.25)]
              transition-all duration-300
              flex items-center justify-center overflow-hidden
              ${checked ? "left-[48px]" : "left-1"}
            `}
          >
            {thumbContent}
          </span>
        </button>

        <span
          className={`text-sm transition ${
            checked ? "text-[var(--text)] font-semibold" : "text-[var(--text-muted)] opacity-70"
          }`}
        >
          {rightText}
        </span>
      </div>
    </div>
  )
}

export default function PreferencesCard({ theme, setTheme }) {
  const [language, setLanguage] = useState("en")

  const isMocha = theme === "mocha"
  const isBangla = language === "bn"

  return (
    <BaseCard
      title="Preferences"
      icon={<Palette size={18} />}
      className="min-h-[260px]"
    >
      <div className="flex flex-col gap-6">
        <PreferenceToggle
          label="Theme"
          checked={isMocha}
          onToggle={() => setTheme(isMocha ? "latte" : "mocha")}
          leftText="Latte"
          rightText="Mocha"
          thumbContent={
            <img
              src={coffeeIcon}
              alt="Coffee"
              className="h-5 w-5 object-contain"
            />
          }
        />

        <PreferenceToggle
          label="Language"
          checked={isBangla}
          onToggle={() => setLanguage(isBangla ? "en" : "bn")}
          leftText="EN"
          rightText="বো"
          thumbContent={
            <span className="text-xs font-bold text-[rgb(35,35,60)]">
              {isBangla ? "বো" : "EN"}
            </span>
          }
        />
      </div>
    </BaseCard>
  )
}