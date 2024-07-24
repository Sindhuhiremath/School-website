import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Academics from "./Components/Academics/Academics";
import Faculty from "./Components/Faculty/Faculty";
import Students from "./Components/Students/Students";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Admissions from "./Components/Admissions/Admissions"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/Faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
