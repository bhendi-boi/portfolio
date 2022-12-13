import { FaAngleUp } from "react-icons/fa";

const ScrollButton = ({ handleScrollToTop }) => {
  return (
    <button
      onClick={handleScrollToTop}
      aria-label="scroll to top button"
      className="z-50 rounded-full"
    >
      <FaAngleUp
        size={36}
        className="text-white transition duration-200 hover:scale-110 hover:text-blue-500"
      />
    </button>
  );
};

export default ScrollButton;
