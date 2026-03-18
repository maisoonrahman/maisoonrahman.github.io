import BaseCard from "../../components/UI/BaseCard"
import { Github } from "lucide-react"

export default function GithubCard() {
  return (
    <BaseCard
      title="Recent Commits"
      icon={<Github size={18} />}
      className="xl:col-span-2"
    >

      <div className="flex flex-col gap-2 text-sm">

        <div>
          feat: integrate latest commits fetch
        </div>

        <div>
          merge pull request #4
        </div>

        <div>
          add author filtering
        </div>

      </div>

    </BaseCard>
  )
}