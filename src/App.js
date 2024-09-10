import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Title from "./components/Title";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [Play, SetPlay] = useState(false);
  return (
    <div>
      <Navbar />
      {/* This is the header component of the application */}
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" Title="What we Offer!" />
        <Courses />
        <AboutUs SetPlay={SetPlay} />
        <Title subTitle="Gallery" Title="Campus Photos" />
        <Gallery />
        <Title subTitle="Testimonials" Title="Student Reviews" />
        {/* slider is in this component */}
        <Testimonials />
        <Title subTitle="Contact Us" Title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer Play={Play} SetPlay={SetPlay} />
    </div>
  );
}

export default App;
