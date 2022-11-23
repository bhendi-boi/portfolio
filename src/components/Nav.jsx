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
    <nav className="h-20 sticky top-0 left-0 z-50 bg-nav-background drop-shadow-2xl border-b-2 border-slate-50 border-opacity-25">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex mx-3 items-center gap-2 text-white">
          <figure className="w-12 h-12 bg-yellow-300 rounded-full">
            {/* <!-- icon for my name --> */}
          </figure>
          <h1 className="text-2xl font-semibold font-logo">Jyothikrishna</h1>
        </div>

        <div
          onClick={toggleVisible}
          className="m-4 ml-auto self-center cursor-pointer md:hidden"
        >
          {!visible ? (
            <CgMenuRight color="white" size={36} />
          ) : (
            <AiOutlineClose color="white" size={36} />
          )}
        </div>
        <ul className="hidden md:flex list-none items-center mr-6">
          {links.map((link) => {
            return (
              <li
                key={link}
                onClick={(e) => handleClick(e)}
                className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500"
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      {/* mobile toggle */}
      {visible && (
        <div className="sticky top-16 left-0 z-10 px-2 bg-nav-background md:hidden border-b-2 border-slate-50 border-opacity-25 transition duration-250">
          <ul className="list-none">
            {links.map((link) => {
              return (
                <li
                  key={link}
                  data-media="sm"
                  onClick={(e) => handleClick(e)}
                  className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500 last-of-type:py-2"
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
