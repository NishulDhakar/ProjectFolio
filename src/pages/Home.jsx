import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      
      {/* Projects Section with negative margin to remove gap */}
      <div className="-mt-8">
        <Projects />
      </div>
    </div>
  );
};

export default Home;