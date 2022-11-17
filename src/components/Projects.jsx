import Title from "./Title";
import data from "../data/Projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section className=" border-b border-slate-50">
      <Title name="projects" htmlID="projects" />
      <section className="mx-4 my-4 flex flex-col gap-6">
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
