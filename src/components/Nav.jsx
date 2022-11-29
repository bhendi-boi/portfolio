import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Nav = ({ refs, handleScrollToSection }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };
  const links = ["projects", "timeline", "contact"];
  const handleClick = (e) => {
    const element = e.target;
    const section = element.innerText.toLowerCase();
    // console.log(refs[section]);
    handleScrollToSection(refs[section]);
    if (element.getAttribute("data-media") === "sm") {
      toggleVisible();
    }
  };
  return (
    <nav className="sticky top-0 left-0 z-50 h-20 border-b-2 border-opacity-25 bg-nav-background drop-shadow-2xl border-slate-50">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center gap-2 mx-3 text-white">
          <figure className="w-12 h-12 bg-yellow-300 rounded-full">
            {/* <!-- icon for my name --> */}
          </figure>
          <h1 className="text-2xl font-semibold font-logo">Jyothikrishna</h1>
        </div>

        <div
          onClick={toggleVisible}
          className="self-center m-4 ml-auto cursor-pointer md:hidden"
        >
          {!visible ? (
            <CgMenuRight color="white" size={36} />
          ) : (
            <AiOutlineClose color="white" size={36} />
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
        <div className="sticky left-0 z-10 transition border-b-2 border-opacity-25 top-16 md:hidden border-slate-50 duration-250">
          <ul className="flex flex-col items-center h-screen gap-10 list-none py-14 bg-nav-background">
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
        </div>
      )}
    </nav>
  );
};

export default Nav;
