import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import About from "./pages/About"; // ✅ Make sure About is imported
import Contact from "./pages/Contact";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      {/* 🌍 3D Earth Background */}
      <Model />

      {/* 📦 Content sits on top of Earth */}
      <div className="relative z-10">
        <Navbar />
        <Intro />
        <About />
        <Skills/>
        <Projects/>
        <Contact />
       <Footer/>
        {/* Add more sections here later */}
      </div>
    </BrowserRouter>
  );
};

export default App;
