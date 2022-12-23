import { TfiArrowUp } from "react-icons/tfi";
const ScrollButton = ({ handleScrollToTop }) => {
  return (
    <button
      onClick={handleScrollToTop}
      aria-label="scroll to top button"
      className="rounded-full inline"
      title="Scroll Up?"
    >
      <TfiArrowUp
        size={36}
        className="transition duration-200 text-gray-900 hover:scale-110 hover:text-blue-400"
      />
    </button>
  );
};

export default ScrollButton;
