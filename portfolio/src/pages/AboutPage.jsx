import PolaroidShuffle from "../components/UI/PolaroidShuffle"
import DigiCam from "../components/UI/DigiCam"

// images
// polaroid
import polaroid1 from "../assets/polaroid-shuffle/img1.jpg"
import polaroid2 from "../assets/polaroid-shuffle/img2.jpeg"
import polaroid3 from "../assets/polaroid-shuffle/img3.JPG"
import polaroid4 from "../assets/polaroid-shuffle/img4.JPG"
import polaroid5 from "../assets/polaroid-shuffle/img5.JPG"
import polaroid6 from "../assets/polaroid-shuffle/img6.jpeg"

// digicam
import digi1 from "../assets/digicam-carousel/1.png"
import digi2 from "../assets/digicam-carousel/2.png"
import digi3 from "../assets/digicam-carousel/3.png"
import digi4 from "../assets/digicam-carousel/4.png"
import digi5 from "../assets/digicam-carousel/5.png"
import digi6 from "../assets/digicam-carousel/6.png"
import digi7 from "../assets/digicam-carousel/7.png"
import digi8 from "../assets/digicam-carousel/8.png"
import digi9 from "../assets/digicam-carousel/9.png"

// --- DATA ---

const polaroidImages = [
  { src: polaroid1, caption: "ME! BROOKLYN!" },
  { src: polaroid2, caption: "#graduATE" },
  { src: polaroid3, caption: "GHC24" },
  { src: polaroid4, caption: "a snowy evening" },
  { src: polaroid5, caption: "#shopping" },
  { src: polaroid6, caption: "my yearbook headshot" },
]

const cameraRollImages = [
  {
    src: digi1,
    description: "a small piece of my life outside classes",
  },
  {
    src: digi2,
    description: "fuchkas are always the best things in the world",
  },
  {
    src: digi3,
    description: "unpopular opinion: i'm not a huge fan of matcha",
  },
  {
    src: digi4,
    description: "my painting workspace",
  },
  {
    src: digi5,
    description: "a few illustrations i made of the Bengali siren",
  },
  {
    src: digi6,
    description: "my mom's garden in dhaka city",
  },
  {
    src: digi7,
    description: "bangladesh: the land of rivers",
  },
  {
    src: digi8,
    description: "the moon!",
  },
  {
    src: digi9,
    description: "sunsets in dhaka city are one of the best",
  },
]

// --- PAGE ---

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-app)] text-[var(--text-main)]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-16">

        {/* --- TOP SECTION --- */}
        <section className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT: POLAROIDS */}
          <div>
            <PolaroidShuffle images={polaroidImages} />
          </div>

          {/* RIGHT: TEXT */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">
              About Me
            </h1>

            <p className="text-[15px] leading-7 text-[var(--text-muted)]">
              I design and build digital experiences that feel intuitive, thoughtful, and a little personal.
            </p>

            <p className="text-[15px] leading-7 text-[var(--text-muted)]">
              My work sits between frontend engineering and UI/UX. I use tools like React, TypeScript, and Figma to take ideas from concept to polished, interactive products. I care about how things feel to use just as much as how they work.
            </p>

            <p className="text-[15px] leading-7 text-[var(--text-muted)]">
              I’m especially interested in roles where I can bridge design and engineering, whether that’s frontend development, UX engineering, or product-focused work.
            </p>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl">
            Experience
          </h2>

          <div className="mt-8 space-y-6 text-[15px]">
            
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-3">
              <span>Federal Reserve Bank of Cleveland / Frontend Developer Intern</span>
              <span className="text-[var(--text-muted)]">Aug 2024 - Nov 2024</span>
            </div>

            <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-3">
              <span>Noya Ventures / Software Engineer (Contract)</span>
              <span className="text-[var(--text-muted)]">Oct 2025 - April 2026</span>
            </div>

            <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-3">
              <span>Millennium Information Solution Ltd. / Frontend Developer Intern</span>
              <span className="text-[var(--text-muted)]">Jul 2025 - Oct 2025</span>
            </div>

            <div className="flex items-center justify-between">
              <span>SPiDLab (CWRU) / Backend Developer</span>
              <span className="text-[var(--text-muted)]">May 2023 – May 2024</span>
            </div>

          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl">
            Education
          </h2>

          <div className="mt-8 space-y-6 text-[15px]">
            
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-3">
              <span>Stony Brook University / M.S. Computer Science</span>
              <span className="text-[var(--text-muted)]">Sept 2026 – May 2028</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Case Western Reserve University / B.S. Computer Science, Math & Art</span>
              <span className="text-[var(--text-muted)]">Aug 2021 – May 2025</span>
            </div>

          </div>
        </section>

        {/* --- CAMERA ROLL --- */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl">
            See my camera roll
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
            Small moments, references, and things that shape how I think and design.
          </p>

          <div className="mt-10">
            <DigiCam images={cameraRollImages} />
          </div>
        </section>

      </div>
    </main>
  )
}