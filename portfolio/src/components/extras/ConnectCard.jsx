import BaseCard from "./BaseCard"
import { Mail } from "lucide-react"

export default function ConnectCard() {
  return (
    <BaseCard
      title="Let's Connect"
      icon={<Mail size={18} />}
      className="xl:col-span-2"
    >

      <div className="flex flex-col gap-4">

        <p>
          Always open to interesting projects and conversations.
        </p>

        <a
          href="mailto:you@email.com"
          className="bg-pink-400 text-white px-4 py-2 rounded-xl w-fit"
        >
          Book a Chat
        </a>

      </div>

    </BaseCard>
  )
}