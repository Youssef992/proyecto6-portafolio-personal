import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Proyects from "./components/Proyects/Proyects";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Proyects />
      <Contact />
    </div>
  );
};

export default App;