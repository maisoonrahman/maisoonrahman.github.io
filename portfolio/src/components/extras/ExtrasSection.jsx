import LocationCard from "./LocationCard"
import SpotifyCard from "./SpotifyCard"
import ManhwaCard from "./ManhwaCard"
import PreferencesCard from "./PreferencesCard"
import GithubCard from "./GithubCard"
import ConnectCard from "./ConnectCard"

export default function ExtrasSection({ theme, setTheme }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <p className="text-lg font-semibold tracking-tight text-[var(--text-main)] leading-7 sm:text-3xl">
          Extras
        </p>

      <div className="grid gap-6
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
      ">

        <LocationCard />
        <SpotifyCard />
        <ManhwaCard />
        <PreferencesCard theme={theme} setTheme={setTheme} />

        <GithubCard />
        <ConnectCard />

      </div>

    </section>
  )
}