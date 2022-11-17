import Title from "./Title";
import data from "../data/Projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section className="px-2 border-b border-slate-50">
      <Title name="projects" htmlID="projects" />
      <section className="mx-4 my-4 grid gap-6 sm:grid-cols-2 ">
        {data.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              stack={project.stack}
              url={project.url}
              details={project.details}
              imageURL={project.imageURL}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
