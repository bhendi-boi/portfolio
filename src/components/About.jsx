import Title from "./Title";
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiFirebase,
  SiReactrouter,
} from "react-icons/si";
const About = () => {
  return (
    <section className="min-h-[30rem] border-b-2 leading-6 border-slate-50 border-opacity-20 text-slate-200">
      <Title name="about me" />
      <div className="mb-4 px-4">
        <p>
          Hello 👋, I am{" "}
          <span className="font-name text-lg px-2">Jyothikrishna</span> from
          Chirala, AP. I love making interactive and responsive UI.
        </p>
      </div>
      <div className="px-4">
        <p className="mb-2 text-2xl text-slate-50 font-medium">
          Frameworks and tools I use
        </p>
        <ul className="flex flex-col gap-4 text-lg">
          <li className="inline-flex gap-2 items-center">
            <FaReact size={36} color="white" /> React
          </li>
          <li className="inline-flex gap-2 items-center">
            <SiFirebase size={36} color="white" /> Firebase
          </li>
          <li className="inline-flex gap-2 items-center">
            <SiTailwindcss size={36} color="white" /> Tailwind CSS
          </li>
          <li className="inline-flex gap-2 items-center">
            <SiReactrouter size={36} color="white" /> React Router
          </li>

          <li className="inline-flex gap-2 items-center">
            <FaGitAlt size={36} color="white" /> Git
          </li>
          <li className="inline-flex gap-2 items-center">
            <SiVite size={36} color="white" /> Vite
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
