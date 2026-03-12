import BaseCard from "./BaseCard"
import { MapPin, Sun, Clock } from "lucide-react"

export default function LocationCard() {

  const nyTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit"
  })

  return (
    <BaseCard
      title="Currently Based In"
      icon={<MapPin size={18} />}
      className="min-h-[260px]"
    >

      <div className="flex flex-col gap-3">

        <div className="rounded-xl overflow-hidden border border-[rgba(0,0,0,0.08)]">
          <iframe
            src="https://maps.google.com/maps?q=New%20York%20City&t=&z=11&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>

        <div className="flex items-center justify-between text-sm">

          <span className="text-sm text-[var(--text)]">
            New York, NY
          </span>

          <span className="flex items-center gap-2 text-[var(--text-muted)]">

            <Sun size={14} />

            <span className="text-xs flex items-center gap-1">
              <Clock size={14} />
              {nyTime}
            </span>

          </span>

        </div>

      </div>

    </BaseCard>
  )
}