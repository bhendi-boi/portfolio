import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const Contact = ({ scrollRef }) => {
  return (
    <ul
      role="list"
      ref={scrollRef}
      className="flex justify-center gap-4 self-center col-span-2"
    >
      <li>
        <a
          aria-label="github-icon"
          target="_blank"
          href="https://github.com/bhendi-boi"
        >
          <BsGithub
            size={36}
            className="text-white transition duration-200 ease-in-out hover:scale-110 focus:scale-110 hover:text-blue-500"
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
            className="text-white transition duration-200 ease-in-out hover:scale-110 focus:scale-110 hover:text-blue-500"
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
            className="text-white transition duration-200 ease-in-out hover:scale-110 focus:scale-110 hover:text-blue-500"
          />
        </a>
      </li>
    </ul>
  );
};

export default Contact;
