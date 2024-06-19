import React from "react";
import "./App.css"
import { BrowserRouter as Router} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App =()=> {
  return (
   <Router>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
    <Toaster/>
   </Router>
  )
}

export default App
