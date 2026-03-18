import BaseCard from "../../components/UI/BaseCard"
import { Mail } from "lucide-react"

export default function ConnectCard() {
  return (
    <BaseCard
      title="Let's Connect"
      icon={<Mail size={18} />}
      className="xl:col-span-2"
    >

      <div className="text-xs flex flex-col gap-4">

       

        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

       <div class="badge-base LI-profile-badge" 
       data-locale="en_US" data-size="medium" 
       data-theme="light" data-type="VERTICAL" 
       data-vanity="maisoon-rahman" data-version="v1">
        <a class="badge-base__link LI-simple-link" 
        href="https://www.linkedin.com/in/maisoon-rahman?trk=profile-badge"></a></div>
              

      </div>

    </BaseCard>
  )
}