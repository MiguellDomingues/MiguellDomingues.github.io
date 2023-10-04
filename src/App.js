import About from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {



  return (
    <div>
      <Navbar />
      <Home />
      
      <Experience />
      {//  <About />
      }
      
      <Work />
    
      <Skills />
      
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
