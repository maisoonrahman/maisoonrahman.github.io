import { useMemo, useRef, useState } from "react"

const SCATTER_PRESETS = [
  { x: 0, y: 0, rotation: -2, scale: 1, opacity: 1 },
  { x: -26, y: 14, rotation: -9, scale: 0.96, opacity: 0.92 },
  { x: 24, y: 10, rotation: 8, scale: 0.94, opacity: 0.88 },
  { x: -12, y: 24, rotation: -5, scale: 0.91, opacity: 0.8 },
]

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function PolaroidShuffle({ images = [], className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const startXRef = useRef(0)
  const pointerIdRef = useRef(null)

  const safeImages = images.slice(0, 12)

  const goNext = () => {
    if (safeImages.length <= 1) return
    setActiveIndex((prev) => (prev + 1) % safeImages.length)
  }

  const goPrev = () => {
    if (safeImages.length <= 1) return
    setActiveIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length)
  }

  const handlePointerDown = (event) => {
    if (safeImages.length <= 1) return
    pointerIdRef.current = event.pointerId
    startXRef.current = event.clientX
    setIsDragging(true)
    setDragX(0)
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!isDragging || event.pointerId !== pointerIdRef.current) return
    setDragX(event.clientX - startXRef.current)
  }

  const handlePointerEnd = () => {
    if (!isDragging) return

    if (dragX <= -70) {
      goNext()
    } else if (dragX >= 70) {
      goPrev()
    }

    setIsDragging(false)
    setDragX(0)
    pointerIdRef.current = null
  }

  const visibleStack = useMemo(() => {
    if (!safeImages.length) return []

    const stackSize = Math.min(4, safeImages.length)
    const stack = []

    for (let i = 0; i < stackSize; i++) {
      const imageIndex = (activeIndex + i) % safeImages.length
      stack.push({
        ...safeImages[imageIndex],
        stackIndex: i,
        preset: SCATTER_PRESETS[i] || SCATTER_PRESETS[SCATTER_PRESETS.length - 1],
      })
    }

    return stack.reverse()
  }, [activeIndex, safeImages])

  const swipeRotation = clamp(dragX / 14, -16, 16)

  if (!safeImages.length) {
    return (
      <div className={`flex min-h-[420px] items-center justify-center ${className}`}>
        <p className="text-sm text-[var(--text-muted)]">Add some photos here.</p>
      </div>
    )
  }

  return (
    <div
      className={`relative min-h-[440px] w-full overflow-visible bg-transparent ${className}`}
      style={{ touchAction: "pan-y", userSelect: "none" }}
    >
      <div className="relative mx-auto h-[420px] w-full max-w-[420px]">
        {visibleStack.map((item) => {
          const isTopCard = item.stackIndex === 0

          const transform = isTopCard
            ? `translate(-50%, -50%) translateX(${item.preset.x + dragX}px) translateY(${item.preset.y}px) rotate(${item.preset.rotation + swipeRotation}deg) scale(${item.preset.scale})`
            : `translate(-50%, -50%) translateX(${item.preset.x}px) translateY(${item.preset.y}px) rotate(${item.preset.rotation}deg) scale(${item.preset.scale})`

          return (
            <article
              key={`${item.src}-${item.stackIndex}`}
              className="absolute left-1/2 top-1/2"
              style={{
                zIndex: 20 - item.stackIndex,
                opacity: item.preset.opacity,
                transform,
                transition:
                  isTopCard && isDragging
                    ? "none"
                    : "transform 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 320ms ease",
                cursor: isTopCard ? "grab" : "default",
              }}
              onPointerDown={isTopCard ? handlePointerDown : undefined}
              onPointerMove={isTopCard ? handlePointerMove : undefined}
              onPointerUp={isTopCard ? handlePointerEnd : undefined}
              onPointerCancel={isTopCard ? handlePointerEnd : undefined}
            >
              <div
                className="relative w-[320px] p-3"
                style={{
                  background: "#ffffff", // always white
                  boxShadow:
                    "0 18px 35px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >

                <div className="overflow-hidden bg-[#eaeaea]">
                  <img
                    src={item.src}
                    alt={item.alt || item.caption || "Polaroid photo"}
                    draggable={false}
                    className="h-[320px] w-full object-cover"
                  />
                </div>

                <div className="px-3 pb-2 pt-4">
                  <p
                    className="m-0 text-left leading-none"
                    style={{
                      fontSize: "1.35rem",
                      color: "#212121",
                    }}
                  >
                    {item.caption || "memory"}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}