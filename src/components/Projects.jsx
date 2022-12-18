import { motion } from "framer-motion";
import Title from "./Title";
import data from "../data/Projects";
import ProjectCard from "./ProjectCard";
const Projects = ({ scrollRef }) => {
  return (
    <motion.section
      ref={scrollRef}
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "20px 0px 0px 0px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="px-4  border-b-2 dark:border-slate-50 dark:border-opacity-20"
    >
      <Title name="projects" />
      <motion.section
        transition={{ staggerChildren: 0.5 }}
        className="grid gap-8 my-4 md:gap-4 md:mx-0 sm:place-items-center md:grid-cols-2 last:pb-4"
      >
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
      </motion.section>
    </motion.section>
  );
};

export default Projects;
