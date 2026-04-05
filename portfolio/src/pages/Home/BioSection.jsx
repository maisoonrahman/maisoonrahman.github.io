import { Github, Linkedin, FileText, Mail } from "lucide-react"
import resume from "../../assets/documents/MaisoonRahman_InternPT_SoftwareData.pdf";

export default function BioSection() {
  return (
    <section id="about" className="px-6 py-2">
      <div className="space-y-4 max-w-3xl">
        <p className="font-serif text-3xl md:text-4xl text-[var(--text-main)] leading-7 sm:text-3xl">
          Hey, I'm Maisoon Rahman
        </p>

        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-[15px]">
          I like building things that feel thoughtful, a little playful, and actually enjoyable to use.
          </p>

        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-[15px]">
          I work across frontend and design, using React, TypeScript, and Figma to create interfaces that are both functional and intentional. My background in CS and art pushes me to think about both how things work and how they feel.
           </p>
          

          <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-[15px]" >
            I’m currently looking for Summer 2026 roles in frontend, UX engineering, or product-focused teams 
            before starting my M.S. at Stony Brook.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">

        <a
          href="https://github.com/maisoonrahman"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--bg-card)] px-4 py-2 text-sm transition hover:border-[var(--text-main)] hover:text-[var(--text-main)]"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/maisoon-rahman/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--bg-card)] px-4 py-2 text-sm transition hover:border-[var(--text-main)] hover:text-[var(--text-main)]"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--bg-card)] px-4 py-2 text-sm transition hover:border-[var(--text-main)] hover:text-[var(--text-main)]"
        >
          <FileText className="h-4 w-4" />
          Resume
        </a>

        <a
          href="mailto:maisoon.a.rahman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--bg-card)] px-4 py-2 text-sm transition hover:border-[var(--text-main)] hover:text-[var(--text-main)]"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>

      </div>
      </div>
    </section>
  )
}