import albumArt from "../../assets/BTSalbumcover.jpg";
import BaseCard from "../../components/UI/BaseCard"
import { Music } from "lucide-react";

export default function SpotifyCard() {

  return (
    

      <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} 
      src="https://open.spotify.com/embed/playlist/6IKBYVLs7z0kD6N6gbSB1h?utm_source=generator" 
      width="100%" height="352" frameBorder="0" allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"></iframe>

      
  );
}