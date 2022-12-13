import ScrollButton from "./ScrollButton";
import Contact from "./Contact";
const Footer = ({ handleScrollToTop, scrollRef }) => {
  return (
    <footer className="flex flex-col gap-4 py-4 bg-background">
      <p className="inline-flex items-center justify-center gap-2 text-center text-zinc-400">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="font-medium">Jyothikrishna</span>{" "}
        <span className="hidden sm:inline">All rights reserved.</span>{" "}
        <ScrollButton handleScrollToTop={handleScrollToTop} />
      </p>
      <Contact scrollRef={scrollRef} />
    </footer>
  );
};

export default Footer;
