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
      top: name.current.offsetTop - 84,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Nav refs={refs} handleScrollToSection={handleScrollToSection} />
      <main ref={co} className="bg-background md:w-9/12 mx-2 sm:mx-auto">
        <Intro scrollRef={contact} />
        <About />
        <Projects scrollRef={projects} />
        <Timeline scrollRef={timeline} />
      </main>
      <Footer handleScrollToTop={handleScrollToTop} />
    </>
  );
};

export default App;
