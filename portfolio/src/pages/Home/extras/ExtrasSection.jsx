import LocationCard from "./LocationCard"
import SpotifyCard from "./SpotifyCard"
import ManhwaCard from "./ManhwaCard"
import PreferencesCard from "./PreferencesCard"
import GithubCard from "./GithubCard"
import ConnectCard from "./ConnectCard"

export default function ExtrasSection({ theme, setTheme }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-2">

      <h2 className="text-2xl font-semibold text-[var(--text-main)] sm:text-4x1">
          Extras
        </h2>

      <div className="grid gap-6
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4 py-4
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