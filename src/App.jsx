import { useRef } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import About from "./components/About";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

const App = () => {
  // vars
  const timeline = useRef(null);
  const projects = useRef(null);
  const co = useRef(null);
  const contact = useRef(null);
  const refs = {
    timeline: timeline,
    projects: projects,
    contact: contact,
  };

  // functions
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  const handleScrollToSection = (name) => {
    window.scrollTo({
      top: name.current.offsetTop - 230,
      left: 0,
      behavior: "smooth",
    });
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Nav
        refs={refs}
        handleScrollToSection={handleScrollToSection}
        handleScrollToTop={handleScrollToTop}
      />
      {/* px-2 exists so that border will now to till the end of screen */}
      <main ref={co} className="relative px-2 md:w-3/4 md:mx-auto">
        <motion.div
          className="fixed inset-0 z-50 h-1 bg-blue-600 dark:bg-neutral-50 top-16"
          style={{ scaleX: scaleX, transformOrigin: "left" }}
        />
        <Intro />
        <About />
        <Projects scrollRef={projects} />
        <Timeline scrollRef={timeline} />
      </main>
      <Footer handleScrollToTop={handleScrollToTop} scrollRef={contact} />
    </>
  );
};

export default App;
