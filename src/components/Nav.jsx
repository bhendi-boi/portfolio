import { useState } from "react";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <nav className="h-20 sticky top-0 left-0 py-3 z-50 bg-nav-background backdrop-blur">
      <div className="flex items-center">
        <div className="flex mx-3 items-center gap-2 text-logo-text">
          <figure className="w-14 h-14 bg-yellow-300 rounded-full">
            {/* <!-- icon for my name --> */}
          </figure>
          <h1>Jyothikrishna</h1>
        </div>
        <div
          onClick={toggleVisible}
          className="m-3 ml-auto self-center cursor-pointer"
        >
          <div
            className={
              "h-[0.2rem] w-6  relative bg-white before:content-[''] after:content-[''] before:h-[0.2rem] after:h-[0.2rem] before:absolute after:absolute  before:right-0 after:right-0 before:top-2 after:top-[-0.5rem] before:w-full after:w-full before:bg-white after:bg-white" +
              " " +
              (visible
                ? "rotate-45 after:w-0 before:top-0 before:rotate-90"
                : "")
            }
          ></div>
        </div>
      </div>
      {visible && (
        <div className="sticky top-16 left-0 z-10 px-2 bg-nav-background">
          <ul className="list-none">
            <li className="capitalize mx-2 my-3 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
              skills
            </li>
            <li className="capitalize mx-2 my-3 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
              experience
            </li>
            <li className="capitalize mx-2 my-3 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
              accomplishments
            </li>
            <li className="capitalize mx-2 my-3 cursor-pointer opacity-60 font-semibold text-lg text-logo-text hover:opacity-100 focus:opacity-100 transition-opacity duration-500 pb-3">
              contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
