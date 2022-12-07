import ScrollButton from "./ScrollButton";

const Footer = ({ handleScrollToTop }) => {
  return (
    <footer className="flex items-center justify-center gap-1 py-4 text-gray-300 bg-background opacity-60">
      <p>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="font-medium">Jyothikrishna</span>{" "}
        <span className="hidden sm:inline">All rights reserved.</span>{" "}
      </p>
      <ScrollButton handleScrollToTop={handleScrollToTop} />
    </footer>
  );
};

export default Footer;
