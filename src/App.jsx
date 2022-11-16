import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <main className="bg-background">
        <Intro />
      </main>
      <Footer />
    </>
  );
};

export default App;
