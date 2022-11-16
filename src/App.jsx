import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <>
      <Nav />
      <main className="bg-background">
        <Intro />
        <Timeline />
      </main>
      <Footer />
    </>
  );
};

export default App;
