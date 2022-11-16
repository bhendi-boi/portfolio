import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <>
      <Nav />
      <main className="bg-background w-7/12 mx-auto">
        <Intro />
        <Timeline />
      </main>
      <Footer />
    </>
  );
};

export default App;
