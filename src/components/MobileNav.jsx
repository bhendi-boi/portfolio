import ReactDom from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const MobileNav = ({ links, handleClick, toggleVisible }) => {
  return ReactDom.createPortal(
    <>
      <AiOutlineClose
        onClick={toggleVisible}
        color="white"
        size={36}
        className="absolute cursor-pointer right-4 top-6"
      />
      <ul className="flex flex-col items-center h-screen gap-10 mt-6 list-none py-14 bg-nav-background">
        {links.map((link) => {
          return (
            <li
              key={link}
              data-media="sm"
              onClick={(e) => handleClick(e)}
              className="text-4xl font-semibold capitalize transition-opacity duration-500 cursor-pointer opacity-60 text-logo-text hover:opacity-100 focus:opacity-100"
            >
              {link}
            </li>
          );
        })}
      </ul>
    </>,
    document.querySelector("#portal")
  );
};

export default MobileNav;
