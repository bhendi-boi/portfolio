import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Intro = () => {
  return (
    <section className="h-[calc(100vh-4.5rem)] flex flex-col justify-evenly items-center border-b-2 border-slate-50 border-opacity-20">
      <div className="flex flex-col items-center gap-4">
        <figure className="h-44 w-44 bg-yellow-300 rounded-full"></figure>
        <div>
          <p className="font-medium text-center text-3xl text-white pb-2">
            Jyothikrishna
          </p>
          <p className="font-medium text-center text-3xl text-white">
            ReactJS Developer
          </p>
        </div>
      </div>
      <ul className="flex gap-4" id="contact">
        <li>
          <a target="_blank" href="https://github.com/bhendi-boi">
            <BsGithub
              size={36}
              color="white"
              enableBackground={true}
              className="hover:scale-110 focus:scale-110 transition duration-200 ease-in-out "
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/"
          >
            <BsLinkedin
              size={36}
              color="white"
              className="hover:scale-110 focus:scale-110 transition duration-200 ease-in-out"
            />
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:bhendiboi@gmail.com">
            <SiGmail
              size={36}
              color="white"
              className="hover:scale-110 focus:scale-110 transition duration-200 ease-in-out"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
