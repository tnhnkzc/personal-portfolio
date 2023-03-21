import React from "react";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <AnimatedRoutes />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
