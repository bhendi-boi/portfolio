import ScrollButton from "./ScrollButton";
import Contact from "./Contact";
const Footer = ({ handleScrollToTop, scrollRef }) => {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-1 py-4 bg-background">
      <p className="text-gray-300 opacity-60">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="font-medium">Jyothikrishna</span>{" "}
        <span className="hidden sm:inline">All rights reserved.</span>{" "}
      </p>
      <ScrollButton handleScrollToTop={handleScrollToTop} />
      <Contact scrollRef={scrollRef} />
    </footer>
  );
};

export default Footer;
