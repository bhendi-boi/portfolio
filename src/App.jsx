import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <>
      <Nav />
      <main className="bg-background sm:w-7/12 mx-2 sm:mx-auto">
        <Intro />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </>
  );
};

export default App;
