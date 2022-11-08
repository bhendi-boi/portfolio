import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Intro />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
