import { AnimatePresence, motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import useTheme from "../useTheme";

const Nav = ({
  refs,
  handleScrollToSection,
  handleScrollToTop,
  visible,
  toggleVisible,
}) => {
  const links = ["Projects", "Timeline", "Contact"];
  const handleClick = (e) => {
    const element = e.target;
    const section = element.innerText.toLowerCase();
    handleScrollToSection(refs[section]);
    if (element.getAttribute("data-media") === "sm") {
      toggleVisible();
    }
  };

  //
  const [theme, toggleTheme] = useTheme();
  //
  return (
    <motion.nav
      className={
        "sticky top-0 left-0 z-50 shadow-xl backdrop-blur-sm " +
        (visible
          ? "bg-neutral-50 dark:bg-nav-background"
          : "bg-neutral-50/70 dark:bg-nav-background/70")
      }
    >
      {/* wrapper so that nav also has 3/4 width */}
      <div className="flex items-center justify-around h-16 md:w-3/4 md:mx-auto">
        <div className="flex items-center justify-between w-full h-full mx-4 md:m-0 dark:text-white">
          <h1
            onClick={handleScrollToTop}
            className="text-4xl font-medium tracking-wide font-name decoration-1 text-emerald-600 dark:text-white hover:cursor-pointer"
          >
            Jyothikrishna
          </h1>
          <div className="mx-2">
            {theme === "dark" ? (
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
        <ul className="items-center hidden mr-6 tracking-wider list-none md:flex">
          {links.map((link) => {
            return (
              <li
                key={link}
                onClick={(e) => handleClick(e)}
                className="py-1 mx-2 text-xl font-semibold transition-opacity duration-500 cursor-pointer opacity-60 dark:text-logo-text hover:opacity-100 focus:opacity-100"
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      {/* mobile toggle */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            onClick={toggleVisible}
            className="absolute right-0 min-h-screen  bg-gray-700/50 w-full"
          >
            <motion.ul
              initial={{
                x: "100%",
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.12,
              }}
              role="list"
              className="flex flex-col absolute right-0 w-1/3 min-h-full bg-neutral-50 dark:bg-nav-background last:pb-2"
            >
              {links.map((link) => {
                return (
                  <li
                    key={link}
                    data-media="sm"
                    onClick={(e) => {
                      handleClick(e);
                      toggleVisible();
                    }}
                    className="px-4 py-2 text-2xl transition-colors duration-500 cursor-pointer font-semi bold text-blue-600 hover:text-blue-500"
                  >
                    {link}
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
