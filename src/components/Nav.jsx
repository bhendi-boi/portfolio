import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <nav className="h-20 sticky top-0 left-0 z-50 bg-nav-background drop-shadow-2xl border-b-2 border-slate-300">
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
          <li className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
            <a href="#skills">skills</a>
          </li>
          <li className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
            <a href="#projects">projects</a>
          </li>
          <li className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
            <a href="#timeline">timeline</a>
          </li>
          <li className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
            <a href="#contact">contact me</a>
          </li>
        </ul>
      </div>
      {visible && (
        <div className="sticky top-16 left-0 z-10 px-2 bg-nav-background md:hidden border-b-2 border-slate-300 transition duration-250">
          <ul className="list-none">
            <li
              onClick={toggleVisible}
              className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500"
            >
              <a href="#skills">skills</a>
            </li>
            <li
              onClick={toggleVisible}
              className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500"
            >
              <a href="#projects">projects</a>
            </li>
            <li
              onClick={toggleVisible}
              className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500"
            >
              <a href="#timeline">timeline</a>
            </li>
            <li
              onClick={toggleVisible}
              className="capitalize mx-2 py-1 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500 pb-3"
            >
              <a href="#contact">contact me</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;