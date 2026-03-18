import ProjectsCard from "../../../components/UI/ProjectsCard"
import projects from "../../../data/projects.json"


export default function Projects() {
    const loopProjects = [...projects, ...projects]

    return (
        <section id="projects" className="px-6 py-8">
            <div className="mx-auto max-w-7x1">
                <h2 className="text-2xl font-semibold text-[var(--text-main)] sm:text-4x1">
                    Projects
                </h2>

                <div className="project-marquee overflow-hidden rounded-[22px] px-4 py-4">
                    <div className="project-track flex w-max gap-6">
                    {loopProjects.map((projects, index) => (
                        <div 
                        key={`${projects.id}-${index}`}
                        className="w-[320px] shrink-0">
                            <ProjectsCard {...projects} />
                        </div>
                    ))}
                    </div>
                </div>

            </div>
        </section>
    )
}