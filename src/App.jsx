import { useState } from "react";
import OurService from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <OurService />
      <WhyChooseUs/>
      <Footer/>
    </>
  );
}

export default App;
