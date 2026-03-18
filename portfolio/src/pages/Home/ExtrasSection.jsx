import LocationCard from "../../features/extras/LocationCard"
import SpotifyCard from "../../features/extras/SpotifyCard"
import ManhwaCard from "../../features/extras/ManhwaCard"
import PreferencesCard from "../../features/extras/PreferencesCard"
import GithubCard from "../../features/extras/GithubCard"
import ConnectCard from "../../features/extras/ConnectCard"

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