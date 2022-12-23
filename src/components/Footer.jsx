import Contact from "./Contact";
const Footer = ({ handleScrollToTop, scrollRef }) => {
  return (
    <footer className="flex flex-col gap-4 py-4 bg-background dark:bg-dark-background">
      <Contact scrollRef={scrollRef} handleScrollToTop={handleScrollToTop} />
      <p className="inline-flex items-center justify-center text-center text-zinc-400 dark:text-zinc-50">
        &copy; {new Date().getFullYear()}{" "}
        <span className="px-1">Jyothikrishna.</span>All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
