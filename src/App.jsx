import { useRef } from "react";
import About from "./components/About";
// components
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
  return (
    <>
      <Nav
        refs={refs}
        handleScrollToSection={handleScrollToSection}
        handleScrollToTop={handleScrollToTop}
      />
      {/* px-2 exists so that border will now to till the end of screen */}
      <main ref={co} className="px-2 md:w-3/4 md:mx-auto">
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
