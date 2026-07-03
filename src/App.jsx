import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <Background />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;