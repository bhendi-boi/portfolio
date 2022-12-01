import { FaAngleUp } from "react-icons/fa";

const ScrollButton = ({ handleScrollToTop }) => {
  return (
    <button
      onClick={handleScrollToTop}
      aria-label="scroll to top button"
      className="z-50 rounded-full opacity-70 hover:opacity-100 hover:scale-110"
    >
      <FaAngleUp size={36} color="white" className="" />
    </button>
  );
};

export default ScrollButton;
