import { useEffect, useState } from "react"
import { Github, Linkedin, File } from "lucide-react"
import resume from "../../assets/documents/MaisoonRahman_InternPT_SoftwareData.pdf";

function LiveTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const formatTime = () => {
      const now = new Date()
      return now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    }

    setTime(formatTime())

    const interval = setInterval(() => {
      setTime(formatTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <span className="text-pink-400">◷ {time}</span>
}

export default function FooterBar() {
  return (
    <footer className="w-full px-6 pb-6 mt-12">
      <div
        className="
          flex items-center justify-center
          rounded-[20px]
          bg-[var(--footer-bg)]
          border-[var(--footer-border)]
          shadow-[var(--card-shadow)]
          px-5 py-4
          text-sm font-mono
          text-[var(--footer-text)]
        "
      >
        <div className="flex items-center justify-center gap-15">
          <span>© 2026 Maisoon Rahman</span>

          <span className="opacity-50">-</span>

          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            All Systems Nominal
          </span>

          <span className="opacity-50">-</span>

          <LiveTime />

          <span className="opacity-50">-</span>

          <a href="https://github.com/maisoonrahman" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/maisoon-rahman" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>
          <a href={resume} target="_blank" rel="noreferrer">
            <File size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}