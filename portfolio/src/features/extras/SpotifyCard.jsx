import albumArt from "../../assets/BTSalbumcover.jpg";
import BaseCard from "../../components/UI/BaseCard"
import { Music } from "lucide-react";

export default function SpotifyCard() {
  const song = {
    title: "Blood Sweat & Tears",
    artist: "BTS",
    albumArt: albumArt,
  }

  return (
    <BaseCard 
    title="Now Playing.."
    icon={<Music size={18} />}
    className="min-h-[260px]" >

      <div className="flex flex-col items-center gap-2">

        <img src={albumArt} className="w-35 h-35 rounded-xl object-cover" />

        <div className="text-center">
          <div className="font-bold text-sm">
            Blood Sweat & Tears
          </div>

          <div className="text-sm opacity-70">
            BTS
          </div>
        </div>

      </div>

    </BaseCard>
  );
}