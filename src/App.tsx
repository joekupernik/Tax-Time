import { Routes, Route } from "react-router-dom";
import ButtonAppBar from "./ButtonAppBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";




function App() {
  return (
    <div className="App">
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
