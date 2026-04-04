import { Github, Linkedin, Mail, File } from "lucide-react"
import resume from "../../assets/documents/MaisoonRahman_InternPT_SoftwareData.pdf"

export default function FooterBar() {
  return (
    <footer className="w-full mt-20 border-t border-white/10 bg-[#0d0d0d] text-[var(--footer-text)]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left */}
          <div className="space-y-5">
            <p className="max-w-md font-serif text-3xl italic leading-tight text-white md:text-5xl">
              “Design is where science and art break even.”
            </p>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--footer-text)]/70">
              Made with coffee, &lt;3, and more coffee
            </p>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--footer-text)]/70">
              Follow along to see how I evolve...
            </p>
          </div>

          {/* Middle */}
          <div className="space-y-4">

            <ul className="space-y-3 font-mono text-lg text-right">
              <li>
                <a
                  href="https://linkedin.com/in/maisoon-rahman"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[var(--footer-text)] transition hover:text-orange-400"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/maisoonrahman"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[var(--footer-text)] transition hover:text-orange-400"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="mailto:maisoon.a.rahman@gmail.com"
                  className="inline-flex items-center gap-3 text-[var(--footer-text)] transition hover:text-orange-400"
                >
                  <Mail size={18} />
                  Email
                </a>
              </li>

              <li>
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[var(--footer-text)] transition hover:text-orange-400"
                >
                  <File size={18} />
                  Resume
                </a>
              </li>
            </ul>
          </div>

          
        </div>
      </div>
    </footer>
  )
}