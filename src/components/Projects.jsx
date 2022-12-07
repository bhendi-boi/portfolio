import Title from "./Title";
import data from "../data/Projects";
import ProjectCard from "./ProjectCard";
const Projects = ({ scrollRef }) => {
  return (
    <section
      ref={scrollRef}
      className="px-2 border-b-2 border-slate-50 border-opacity-20"
    >
      <Title name="projects" />
      <section className="grid gap-6 my-4 md:gap-4 md:mx-0 sm:place-items-center md:grid-cols-2 ">
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
