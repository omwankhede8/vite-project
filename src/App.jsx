import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import { Expertise } from "./components/Expertise";
import Work from "./components/Work";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header></Header>
      <Banner />
      <Services />
      <Projects />
      <Work></Work>
      <Expertise></Expertise>
      <About></About>
    </>
  );
}

export default App;
