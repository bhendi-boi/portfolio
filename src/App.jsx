// components
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

const App = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <>
      <Nav />
      <main className="bg-background md:w-9/12 mx-2 sm:mx-auto">
        <Intro />
        <Projects />
        <Timeline />
      </main>
      <Footer handleScrollToTop={handleScrollToTop} />
    </>
  );
};

export default App;
