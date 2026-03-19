import albumArt from "../../assets/BTSalbumcover.jpg";
import BaseCard from "../../components/UI/BaseCard"
import { Music } from "lucide-react";

export default function SpotifyCard() {

  return (
    <BaseCard 
    title="Now Playing.."
    icon={<Music size={18} />}
    className="min-h-[260px]" 
    contentClassName="flex flex-col gap-4" >

      <iframe 
      data-testid="embed-iframe" 
      style={{  borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/6IKBYVLs7z0kD6N6gbSB1h?utm_source=generator" 
      width="100%" height="152" frameBorder="0" 
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"></iframe>

      <div className="flex items-center justify-between text-sm">
        <span className="text-sm text-[var(--text)]">
          Maisoon.exe  | Spotify
        </span> </div>

    </BaseCard>
  );
}