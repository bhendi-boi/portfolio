import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const Contact = ({ scrollRef }) => {
  return (
    <div ref={scrollRef} className="mt-4 mb-6">
      <p className="mb-4 text-3xl font-semibold text-center capitalize text-slate-50">
        My socials 👇
      </p>
      <ul role="list" className="flex justify-center gap-4">
        <li>
          <a
            aria-label="github-icon"
            target="_blank"
            href="https://github.com/bhendi-boi"
          >
            <BsGithub
              size={36}
              color="white"
              className="transition duration-200 ease-in-out hover:scale-110 focus:scale-110 "
            />
          </a>
        </li>
        <li>
          <a
            aria-label="linkedin-icon"
            target="_blank"
            href="https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/"
          >
            <BsLinkedin
              size={36}
              className="transition duration-200 ease-in-out hover:scale-110 focus:scale-110 :text-sky-600"
            />
          </a>
        </li>
        <li>
          <a
            aria-label="gmail-icon"
            target="_blank"
            href="mailto:bhendiisgreen@gmail.com"
          >
            <SiGmail
              size={36}
              color="white"
              className="transition duration-200 ease-in-out hover:scale-110 focus:scale-110"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
