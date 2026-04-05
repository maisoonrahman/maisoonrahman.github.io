import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import digicamFrame from "../../assets/digicam-frame.svg"

export default function DigiCam({ images = [], className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const startXRef = useRef(0)
  const isPointerDownRef = useRef(false)

  const goPrev = () => {
    if (images.length <= 1) return
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goNext = () => {
    if (images.length <= 1) return
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") goPrev()
      if (event.key === "ArrowRight") goNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [images.length])

  const handlePointerDown = (event) => {
    if (images.length <= 1) return
    isPointerDownRef.current = true
    startXRef.current = event.clientX
  }

  const handlePointerUp = (event) => {
    if (!isPointerDownRef.current || images.length <= 1) return

    const deltaX = event.clientX - startXRef.current
    const swipeThreshold = 50

    if (deltaX > swipeThreshold) {
      goPrev()
    } else if (deltaX < -swipeThreshold) {
      goNext()
    }

    isPointerDownRef.current = false
  }

  const handlePointerCancel = () => {
    isPointerDownRef.current = false
  }

  if (!images.length) {
    return (
      <div className={`rounded-[2rem] p-6 ${className}`}>
        <p className="text-sm text-[var(--text-muted)]">
          Add camera roll images here.
        </p>
      </div>
    )
  }

  const activeImage = images[currentIndex]

  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center">
        <div
          className="relative w-full max-w-[820px]"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{ touchAction: "pan-y" }}
        >
          <div
            className="absolute overflow-hidden bg-black"
            style={{
              left: "17.15%",
              top: "30.12%",
              width: "42.08%",
              height: "53.95%",
              borderRadius: "0.3rem",
              zIndex: 1,
            }}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt || "Camera roll image"}
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-3 top-2 rounded bg-black/45 px-2 py-0.5 text-[11px] font-semibold tracking-[0.18em] text-white">
                REC
              </div>

              <div className="absolute bottom-3 right-3 rounded bg-black/45 px-2 py-1 text-[11px] text-white">
                {currentIndex + 1}/{images.length}
              </div>
            </div>
          </div>

          <img
            src={digicamFrame}
            alt="Digital camera frame"
            className="relative z-10 block w-full select-none"
            draggable={false}
          />
        </div>

        <div className="mt-5 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 w-full max-w-[700px] rounded-[1.4rem] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-5">
          <p className="text-sm leading-7 text-[var(--text-main)] md:text-base">
            {activeImage.description ||
              activeImage.caption ||
              "Add a caption."}
          </p>
        </div>
      </div>
    </section>
  )
}