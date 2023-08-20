import { useState } from 'react'
import Header from "./components/Header.jsx"
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import OurService from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/footer";

function App() {
  return (
    <>

      <Header />
      <Hero />
      <OurService />
      <WhyChooseUs/>
      <About />
      <Contact />
      <Footer/>  
      </>    
  );
}

export default App;
