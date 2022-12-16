import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

// import LOGO from "../assets/logo.png";

const Nav = ({ refs, handleScrollToSection }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };
  const links = ["projects", "timeline", "contact"];
  const handleClick = (e) => {
    const element = e.target;
    const section = element.innerText.toLowerCase();
    handleScrollToSection(refs[section]);
    if (element.getAttribute("data-media") === "sm") {
      toggleVisible();
    }
  };
  return (
    <nav className="sticky top-0 left-0 z-50 min-h-[4rem] border-b-2 border-opacity-25 bg-nav-background drop-shadow-2xl border-slate-50">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center h-full gap-2 mx-4 text-white">
          {/* <picture className="w-10 h-10 overflow-hidden bg-yellow-300 rounded-full">
            <img src={LOGO} alt="jk logo" />
          </picture> */}
          <h1 className="text-3xl font-semibold font-logo">Jyothikrishna</h1>
        </div>
        <div
          onClick={toggleVisible}
          className="self-center m-4 ml-auto cursor-pointer md:hidden"
        >
          {visible ? (
            <AiOutlineClose color="white" size={30} />
          ) : (
            <CgMenuRight color="white" size={30} />
          )}
        </div>
        <ul className="items-center hidden mr-6 list-none md:flex">
          {links.map((link) => {
            return (
              <li
                key={link}
                onClick={(e) => handleClick(e)}
                className="py-1 mx-2 text-xl font-semibold capitalize transition-opacity duration-500 cursor-pointer opacity-60 text-logo-text hover:opacity-100 focus:opacity-100"
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      {/* mobile toggle */}
      {visible && (
        <ul role="list" className="flex flex-col bg-nav-background last:pb-2">
          {links.map((link) => {
            return (
              <li
                key={link}
                data-media="sm"
                onClick={(e) => handleClick(e)}
                className="px-4 py-2 text-2xl capitalize transition-opacity duration-500 cursor-pointer font-semi bold opacity-60 text-logo-text hover:opacity-100 focus:opacity-100"
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
