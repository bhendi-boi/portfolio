import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";
// components
import Title from "./Title";
import viteSVG from "../assets/vite.svg";
const About = () => {
  return (
    <motion.section
      aria-labelledby="about me"
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "20px 0px 0px 0px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="px-4 mb-4 min-h-[calc(100vh-5rem)] leading-6 border-b-2 dark:border-slate-50 dark:border-opacity-20 dark:text-gray-200"
    >
      <Title name="about me" />
      <p>
        Hello 👋, I am{" "}
        <span className="text-lg font-name px-2">Jyothikrishna</span> from
        Chirala, AP. I love making interactive and responsive UI.
      </p>
      <div className="mt-4">
        <p className="mb-2 text-2xl font-medium dark:text-neutral-50">
          Frameworks and tools I use
        </p>
        <ul className="flex flex-col gap-4 pt-2 text-lg">
          <li className="inline-flex items-center gap-2">
            <FaReact size={36} color="rgb(20,158,202)" /> React
          </li>
          <li className="inline-flex items-center gap-2">
            <SiReactrouter size={36} className="text-red-500" /> React Router
          </li>
          <li className="inline-flex items-center gap-2">
            <SiFirebase size={36} className="text-amber-300" /> Firebase
          </li>
          <li className="inline-flex items-center gap-2">
            <SiTailwindcss size={36} className="text-cyan-500" /> Tailwind CSS
          </li>
          <li className="inline-flex items-center gap-2">
            <FaGitAlt size={36} className="text-red-600" /> Git
          </li>
          <li className="inline-flex items-center gap-2">
            <FaGithub size={36} className="dark:text-white" /> GitHub
          </li>
          <li className="inline-flex items-center gap-2 mb-2">
            <img src={viteSVG} alt="vite svg" /> Vite
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default About;
