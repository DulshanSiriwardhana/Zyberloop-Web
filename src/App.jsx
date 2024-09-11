import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";

import "./App.css";

import ErpProject from "./pages/ErpProject.jsx";
import Services from "./pages/Services.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Pricing from "./pages/Pricing.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <Router>
      <div className="w-full h-full font-LexendDecaRegular bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/erp-project" element={<ErpProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
