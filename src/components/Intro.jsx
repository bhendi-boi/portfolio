import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Intro = () => {
  return (
    <section className="h-[calc(100vh-4.5rem)] flex flex-col items-center gap-4 bg-intro-background border-b border-slate-50 relative">
      <div className="my-auto">
        <figure className="h-44 w-44 bg-yellow-300 rounded-full"></figure>
        <div>
          <p className="font-medium capitalize text-center text-3xl text-white">
            Jyothikrishna
          </p>
          <p className="font-medium capitalize text-center text-3xl text-white">
            ReactJS developer
          </p>
        </div>
      </div>
      <ul className="absolute bottom-12 flex gap-3">
        <li>
          <a href="">
            <BsLinkedin size={36} color="white" />
          </a>
        </li>
        <li>
          <a href="https://github.com/bhendi-boi">
            <BsGithub size={36} color="white" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kittusjk/">
            <BsInstagram size={36} color="white" />
          </a>
        </li>
        <li>
          <a href="https://www.google.com">
            <SiGmail size={36} color="white" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
