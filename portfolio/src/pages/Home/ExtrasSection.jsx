import LocationCard from "../../features/extras/LocationCard"
import SpotifyCard from "../../features/extras/SpotifyCard"
import ManhwaCard from "../../features/extras/ManhwaCard"
import PreferencesCard from "../../features/extras/PreferencesCard"
import GithubCard from "../../features/extras/GithubCard"
import ConnectCard from "../../features/extras/ConnectCard"

export default function ExtrasSection({ theme, setTheme }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-2">

      <h1 className="text-lg font-semibold tracking-tight text-[var(--text-main)] leading-7 sm:text-3xl">
          Extras
        </h1>

      <div className="py-8">

        <SpotifyCard />
        

      </div>

    </section>
  )
}