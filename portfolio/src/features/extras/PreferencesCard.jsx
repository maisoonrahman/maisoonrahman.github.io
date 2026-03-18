import { useState } from "react"
import { Palette } from "lucide-react"
import { Coffee } from "lucide-react"
import BaseCard from "../../components/UI/BaseCard"

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
        <span className={!checked ? "text-sm font-semibold text-[var(--text)]" : "text-sm opacity-70"}>
          {leftText}
        </span>

        <button
          type="button"
          onClick={onToggle}
          className="relative h-11 w-[92px] rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(10,10,20,0.28)] transition"
        >
          <span
            className={`absolute top-1 flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(193,194,255)] text-[rgb(35,35,60)] transition-all duration-300 ${
              checked ? "left-[48px]" : "left-1"
            }`}
          >
            {thumbContent}
          </span>
        </button>

        <span className={checked ? "text-sm font-semibold text-[var(--text)]" : "text-sm opacity-70"}>
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
            <Coffee
              size={16}
              strokeWidth={2.2}
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
            <span className="text-[11px] font-bold text-[rgb(35,35,60)]">
              {isBangla ? "বো" : "EN"}
            </span>
          }
        />
      </div>
    </BaseCard>
  )
}