import { Github, Linkedin, FileText, Mail } from "lucide-react"
import resume from "../../assets/documents/MaisoonRahman_InternPT_SoftwareData.pdf";

export default function BioSection() {
  return (
    <section id="about" className="px-6 py-2">
      <div className="space-y-4 max-w-3xl">
        <p className="text-lg font-semibold tracking-tight text-[var(--text-main)] leading-7 sm:text-3xl">
          Hey, I'm Maisoon Rahman
        </p>

        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-[15px]">
          I'm a developer and designer interested in building playful, thoughtful,
          and accessible digital experiences. I like creative front-end work,
          interactive storytelling, and projects that feel polished, personal,
          and a little fun. </p>

          <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-[15px]" >Currently looking for Summer 2026 opportunities while I prepare to begin my 
          Masters in Computer Science at Stony Brook University (Fall 2026)
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--text-muted)]">
          <a
            href="https://github.com/maisoonrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[var(--text-main)]"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/maisoon-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[var(--text-main)]"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[var(--text-main)]"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>

          <a
            href="mailto:maisoon.a.rahman@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[var(--text-main)]"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  )
}