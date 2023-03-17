import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import useStyles from "./styles";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <AnimatedRoutes />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
