import currentRead from "../../data/currentRead";
import { Book } from "lucide-react";
import BaseCard from "./BaseCard";

export default function ManhwaCard() {
  return (
    <BaseCard
    title="Current Manhwa"
    icon={<Book size={18} />}
    className="min-h-[260px]">

      <div className="flex flex-col items-center gap-2">
        <img src={currentRead.cover} alt={currentRead.title} 
             className="w-35 h-35 rounded-[18px] object-cover shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
             />

        <div className="flex flex-col items-center">   
          <div className="text-sm font-bold">
            {currentRead.title}
          </div>

          <div className="text-sm opacity-70">
            ⭐ {currentRead.rating}/5
          </div>

        </div>   
        
      </div>

    </BaseCard>
  );
}