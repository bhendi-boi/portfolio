import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const Contact = ({ scrollRef }) => {
  return (
    <ul
      role="list"
      ref={scrollRef}
      className="flex self-center justify-center col-span-2 gap-4"
    >
      <li>
        <a
          aria-label="github-icon"
          target="_blank"
          href="https://github.com/bhendi-boi"
          title="Github Profile"
        >
          <BsGithub
            size={36}
            className="transition duration-200 ease-in-out dark:text-white hover:scale-110 focus:scale-110 hover:text-blue-500"
          />
        </a>
      </li>
      <li>
        <a
          aria-label="linkedin-icon"
          target="_blank"
          href="https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/"
          title="Linked-in Profile"
        >
          <BsLinkedin
            size={36}
            className="transition duration-200 ease-in-out dark:text-white hover:scale-110 focus:scale-110 hover:text-blue-500"
          />{" "}
        </a>
      </li>
      <li>
        <a
          aria-label="gmail-icon"
          target="_blank"
          href="mailto:bhendiisgreen@gmail.com"
          title="mail me"
        >
          <SiGmail
            size={36}
            className="transition duration-200 ease-in-out dark:text-white hover:scale-110 focus:scale-110 hover:text-blue-500"
          />
        </a>
      </li>
    </ul>
  );
};

export default Contact;
