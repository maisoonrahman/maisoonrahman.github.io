import SpotifyCard from "../../features/extras/SpotifyCard"

export default function ExtrasSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-2">

      <h1 className="font-serif text-3xl md:text-4xl text-[var(--text-main)] leading-7 sm:text-3xl">
          Art Gallery
        </h1>

      <div className="py-8">

        <SpotifyCard />
        

      </div>

    </section>
  )
}