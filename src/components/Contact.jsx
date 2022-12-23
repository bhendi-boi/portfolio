import ScrollButton from "./ScrollButton";

const Contact = ({ scrollRef, handleScrollToTop }) => {
  return (
    <div className="flex justify-center gap-6">
      <ul
        role="list"
        ref={scrollRef}
        className="flex self-center justify-center col-span-2 gap-4 font-medium text-lg text-gray-900 dark:text-white"
      >
        <li>
          <a
            aria-label="github-icon"
            target="_blank"
            href="https://github.com/bhendi-boi"
            title="Github Profile"
            className="transition duration-200 text-gray-900 hover:scale-110 hover:text-blue-400"
          >
            Github
          </a>
        </li>
        <li>
          <a
            aria-label="linkedin-icon"
            target="_blank"
            href="https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/"
            title="Linked-in Profile"
            className="transition duration-200 text-gray-900 hover:scale-110 hover:text-blue-400"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            aria-label="gmail-icon"
            target="_blank"
            href="mailto:bhendiisgreen@gmail.com"
            title="mail me"
            className="transition duration-200 text-gray-900 hover:scale-110 hover:text-blue-400"
          >
            Gmail
          </a>
        </li>
      </ul>
      <ScrollButton handleScrollToTop={handleScrollToTop} />
    </div>
  );
};

export default Contact;
