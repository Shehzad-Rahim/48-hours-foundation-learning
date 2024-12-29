import { projectsData } from "@/data/data"
import ProjectsCard from "./ProjectsCard"
function Projects() {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
     {projectsData.map((project , i) => (
        <div key={i}>
        <ProjectsCard
        image={project.image}
        title={project.title}
        liveLink={project.liveLink}
        details={project.details}
        />
        </div>
     ))}
     
    </div>
  )
}

export default Projects