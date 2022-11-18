import ScrollButton from "./ScrollButton";

const Footer = ({ handleScrollToTop }) => {
  return (
    <footer className="bg-background py-4 flex justify-center gap-1 text-gray-300 opacity-60 items-center">
      <p>&copy;{new Date().getFullYear()} Jyothikrishna</p>
      <p> All rights reserved.</p>
      <ScrollButton handleScrollToTop={handleScrollToTop} />
    </footer>
  );
};

export default Footer;
