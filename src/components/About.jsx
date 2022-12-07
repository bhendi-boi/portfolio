import Title from "./Title";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiFirebase,
  SiReactrouter,
} from "react-icons/si";
const About = () => {
  return (
    <section className="min-h-screen leading-6 border-b-2 border-slate-50 border-opacity-20 text-slate-200">
      <Title name="about me" />
      <div className="px-4 mb-4">
        <p>
          Hello 👋, I am{" "}
          <span className="px-2 text-lg font-name">Jyothikrishna</span> from
          Chirala, AP. I love making interactive and responsive UI.
        </p>
      </div>
      <div className="px-4">
        <p className="mb-2 text-2xl font-medium text-slate-50">
          Frameworks and tools I use
        </p>
        <ul className="flex flex-col gap-4 pt-2 text-lg">
          <li className="inline-flex items-center gap-2">
            <FaReact size={36} className="text-blue-700" /> React
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
            <FaGitAlt size={36} className="text-red-500" /> Git
          </li>
          <li className="inline-flex items-center gap-2">
            <FaGithub size={36} color="white" /> GitHub
          </li>
          <li className="inline-flex items-center gap-2">
            <SiVite size={36} className="text-fuchsia-600" /> Vite
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
