import React from "react";
import About from "./componnets/about/About";
import Contact from "./componnets/contact/Contact";
import Experience from "./componnets/experience/Experience";
import Footer from "./componnets/footer/Footer";
import Header from "./componnets/header/Header";
import Nav from "./componnets/nav/Nav";
import Portfolio from "./componnets/portfolio/Portfolio";
import Services from "./componnets/services/Services";
import Testimonial from "./componnets/testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
