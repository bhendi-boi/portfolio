import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Intro = () => {
  return (
    <section className="h-[calc(100vh-4.5rem)] flex flex-col justify-evenly items-center border-b border-slate-50">
      <div className="flex flex-col items-center gap-4">
        <figure className="h-44 w-44 bg-yellow-300 rounded-full"></figure>
        <div>
          <p className="font-medium capitalize text-center text-3xl text-white pb-2">
            Jyothikrishna
          </p>
          <p className="font-medium capitalize text-center text-3xl text-white">
            ReactJS developer
          </p>
        </div>
      </div>
      <ul className="flex gap-4">
        <li>
          <a target="_blank" href="https://github.com/bhendi-boi">
            <BsGithub size={36} color="white" className="" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/"
          >
            <BsLinkedin size={36} color="white" className="" />
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:bhendiboi@gmail.com">
            <SiGmail size={36} color="white" className="" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
