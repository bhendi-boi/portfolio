import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";
// components
import Title from "./Title";
import viteSVG from "../assets/vite.svg";
const About = () => {
  return (
    <motion.section
      aria-labelledby="About me"
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "20px 0px 0px 0px" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="px-4 mb-4 min-h-[calc(100vh-5rem)] leading-6 border-b-2 dark:border-slate-50 dark:border-opacity-20 dark:text-neutral-200"
    >
      <Title name="About me" />
      <p>
        Hello 👋, I am{" "}
        <span className="px-2 text-lg font-semibold tracking-wide uppercase font-title">
          Jyothikrishna
        </span>{" "}
        from Chirala, AP. I love making interactive and responsive UI.
      </p>
      <div className="mt-2">
        <p className="mb-2 font-medium">Frameworks and tools I use :</p>
        <ul className="flex flex-col gap-4 pt-2 text-lg md:text-xl">
          <li className="inline-flex items-center gap-2 md:gap-3">
            <FaReact size={36} color="rgb(20,158,202)" /> React
          </li>
          <li className="inline-flex items-center gap-2 md:gap-3">
            <SiReactrouter size={36} className="text-red-500" /> React Router
          </li>
          <li className="inline-flex items-center gap-2 md:gap-3">
            <SiFirebase size={36} className="text-amber-300" /> Firebase
          </li>
          <li className="inline-flex items-center gap-2 md:gap-3">
            <SiTailwindcss size={36} className="text-cyan-500" /> Tailwind CSS
          </li>
          <li className="inline-flex items-center gap-2 md:gap-3">
            <FaGitAlt size={36} className="text-red-600" /> Git
          </li>
          <li className="inline-flex items-center gap-2 md:gap-3">
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
