import img1 from "../../assets/gallerywall/img1.jpeg"
import img2 from "../../assets/gallerywall/img2.jpeg"
import img3 from "../../assets/gallerywall/img3.jpeg"
import img4 from "../../assets/gallerywall/img4.jpeg"
import img5 from "../../assets/gallerywall/img5.jpeg"
import img6 from "../../assets/gallerywall/img6.jpeg"
import img7 from "../../assets/gallerywall/img7.jpeg"
import img8 from "../../assets/gallerywall/img8.jpeg"
import img9 from "../../assets/gallerywall/img9.jpeg"
import img10 from "../../assets/gallerywall/img10.jpeg"
import img11 from "../../assets/gallerywall/img11.jpeg"
import img12 from "../../assets/gallerywall/img12.jpeg"
import img13 from "../../assets/gallerywall/img13.jpeg"

const galleryImages = [
  { src: img1, alt: "Geometric still life painting" },
  { src: img2, alt: "Black, white, and red ink illustration" },
  { src: img3, alt: "Detailed black and white ink drawing" },
  { src: img4, alt: "Figure sketch reclining" },
  { src: img5, alt: "Back figure drawing on stool" },
  { src: img6, alt: "Landscape painting by the water" },
  { src: img7, alt: "Portrait sketch with dramatic shading" },
  { src: img8, alt: "Profile charcoal study" },
  { src: img9, alt: "Profile portrait drawing" },
  { src: img10, alt: "Impasto skull still life painting" },
  { src: img11, alt: "Purple monochrome still life" },
  { src: img12, alt: "Figure drawing on toned paper" },
  { src: img13, alt: "Red and black surreal illustration" },
]

export default function ExtrasSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-4 px-6 py-2">
      <p className="font-serif text-3xl md:text-4xl text-[var(--text-main)] leading-7 sm:text-3xl">
        Art Gallery
      </p>
      <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-[15px]">
          Aside from programming and designing, I also paint, and draw. Here are some of my illustrations 
          and paintings I've done in college. Hope you like it!
          </p>

      <div className="py-8">
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
          {galleryImages.map((image, index) => (
            <figure
              key={index}
              className="break-inside-avoid overflow-hidden rounded-[20px] bg-[var(--card-bg)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition duration-500 hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}