import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Title from "./Title";
import data from "../assets/Projects";
import ProjectCard from "./ProjectCard";

const Projects = ({ scrollRef }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <motion.section
      aria-labelledby="Projects"
      ref={scrollRef}
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "20px 0px 0px 0px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="px-4 border-b-2 dark:border-slate-50 dark:border-opacity-20"
    >
      <Title name="Projects" />
      <motion.section
        transition={{ staggerChildren: 1 }}
        className="grid gap-8 my-4 md:mx-10 md:gap-12 sm:place-items-center md:grid-cols-2 last:pb-4"
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
              setSelectedId={setSelectedId}
            />
          );
        })}
        {/* <AnimatePresence>
          {selectedId && (
            <motion.article
              layoutId={data[selectedId].name}
              initial={{ x: "-100%", opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "15px" }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 1,
              }}
              className="mx-2 overflow-hidden text-gray-800 rounded-lg shadow-2xl dark:text-gray-200 sm:w-96 bg-neutral-50 dark:bg-gray-800 project__card"
            >
              <picture className="flex flex-col gap-2 overflow-hidden bg-yellow-300 h-60">
                <img
                  src={imageURL}
                  alt={`${data[selectedId].name} photo`}
                  className="object-cover"
                />
              </picture>
              <h3 className="my-2 text-2xl font-medium text-center text-gray-900 font-title dark:text-neutral-50">
                {data[selectedId].name}
              </h3>
              <span className="mx-6 text-sm">
                <a
                  href={data[selectedId].url}
                  className="text-blue-600 hover:underline hover:underline-offset-2"
                >
                  {data[selectedId].url}
                </a>
              </span>
              <p className="mx-6 min-h-[78px] project__card-details">
                {data[selectedId].details}
              </p>
              <ul className="flex gap-4 justify-center m-4 mb-6 px-4 min-h-[2rem]">
                {data[selectedId].stack.map((item) => {
                  return (
                    <li
                      key={item}
                      className="px-3 py-1 text-base font-medium bg-gray-800 rounded-sm shadow-md bg:opacity-90 text-neutral-50 dark:text-black md:text:xl dark:bg-neutral-50 font-chips ring-2 ring-gray-800 dark:ring-neutral-50 border-opacity-70"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          )}
        </AnimatePresence> */}
      </motion.section>
    </motion.section>
  );
};

export default Projects;
