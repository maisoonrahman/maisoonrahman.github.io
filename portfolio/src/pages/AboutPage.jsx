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

const experience = [
  {
    title: "Frontend + UI",
    text: "I build interfaces that focus on interaction, clarity, and visual feel rather than just functionality.",
  },
  {
    title: "Design Thinking",
    text: "I care about how things feel to use. Not just if they work, but if they make sense and feel natural.",
  },
  {
    title: "Creative Development",
    text: "Most of my work sits between code and art—interactive, slightly experimental, and narrative-driven.",
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
              I started in computer science, but the parts I kept coming back to
              were always the visual and interactive ones—how something feels to
              use, how it looks, and how people move through it.
            </p>

            <p className="text-[15px] leading-7 text-[var(--text-muted)]">
              A lot of my work sits between development and design. I like
              building things that are functional, but also have personality,
              intention, and a sense of narrative.
            </p>

            <p className="text-[15px] leading-7 text-[var(--text-muted)]">
              Right now I’m focused on frontend development, UX engineering, and
              creating experiences that feel a little more human and less rigid.
            </p>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl">
            Experience
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {experience.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6"
              >
                <h3 className="mb-3 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
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