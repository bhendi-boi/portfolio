import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import useTheme from "../useTheme";

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

  //
  const [choosenTheme, toggleTheme] = useTheme();
  //
  return (
    <nav className="sticky top-0 left-0 z-50 border-b-2 border-opacity-25 bg-neutral-50 dark:bg-nav-background drop-shadow-2xl border-slate-50">
      <div className="flex items-center justify-around h-16 md:w-3/4 md:mx-auto">
        <div className="flex items-center justify-between w-full h-full mx-4 md:m-0 dark:text-white">
          <h1 className="text-3xl font-semibold font-logo">Jyothikrishna</h1>
          <div className="mx-2">
            {choosenTheme === "dark" ? (
              <MdOutlineDarkMode
                size={30}
                className="dark:text-white"
                onClick={toggleTheme}
              />
            ) : (
              <MdOutlineLightMode
                size={30}
                className="dark:text-white"
                onClick={toggleTheme}
              />
            )}
          </div>
        </div>
        <div
          onClick={toggleVisible}
          className="self-center m-4 ml-auto cursor-pointer md:hidden"
        >
          {visible ? (
            <AiOutlineClose size={30} className="dark:text-white" />
          ) : (
            <CgMenuRight size={30} className="dark:text-white" />
          )}
        </div>
        <ul className="items-center hidden mr-6 list-none md:flex">
          {links.map((link) => {
            return (
              <li
                key={link}
                onClick={(e) => handleClick(e)}
                className="py-1 mx-2 text-xl font-semibold capitalize transition-opacity duration-500 cursor-pointer opacity-60 dark:text-logo-text hover:opacity-100 focus:opacity-100"
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      {/* mobile toggle */}
      {visible && (
        <ul
          role="list"
          className="flex flex-col bg-neutral-50 dark:bg-nav-background last:pb-2 dark:text-white"
        >
          {links.map((link) => {
            return (
              <li
                key={link}
                data-media="sm"
                onClick={(e) => handleClick(e)}
                className="px-4 py-2 text-2xl capitalize transition-opacity duration-500 cursor-pointer font-semi bold opacity-60 hover:opacity-100 focus:opacity-100"
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
