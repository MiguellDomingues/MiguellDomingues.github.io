
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {


  return (
    <div>
      <Navbar />
      <Home />  
      <Experience />
      <Work /> 
      <Skills />   
      <Education/> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
