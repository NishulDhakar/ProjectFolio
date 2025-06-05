import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Github, Layers, Star } from "lucide-react";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900/80 z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating code blocks */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/10 rounded-lg blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-600/10 rounded-lg blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-indigo-600/10 rounded-lg blur-xl animate-float-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
      </div>
      
      {/* Background image */}
      <img
        src="/images/result3.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-10"
      />
      
      {/* Content */}
      <div className="container mx-auto relative z-20 mt-10">
        <motion.div 
          className="flex flex-col items-center text-center mt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          {/* <motion.div 
               variants={itemVariants}
               className="mt-32 inline-flex items-center px-3 py-1 rounded-full bg-gray-800/70 backdrop-blur-sm border border-gray-700 text-sm text-gray-300 mb-6 cursor-pointer"
               onClick={() => window.open("https://github.com/NishulDhakar/Typing-Practice-Web", "_blank")}
                        >
           <Star size={14} className="mr-1 text-yellow-500" />
           <span>Portfolio Collection</span>
           </motion.div> */}

          
          {/* Main heading with gradient */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              PROJECT
            </span>
            <span className="text-white">FOLIO</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-3"
          >
            Minor & Major Projects with clean code 
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-xl mb-8"
          >
            Explore, Learn, and Build with React, Node.js, Express, MongoDB, Next.js, Typescript and Modern Web Technologies & Framworks.
          </motion.p>
          
          {/* Feature highlights */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <FeatureItem icon={<Code size={20} />} text="Clean Code" />
            <FeatureItem icon={<Layers size={20} />} text="Modern Stack" />
            <FeatureItem icon={<Github size={20} />} text="Open Source" />
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://github.com/NishulDhakar/ProjectFolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-600/20 hover:scale-105"
              style={{ backgroundColor: "rgba(84, 59, 177, 1)" }}
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
            
            {/* <a
              href="/allprojects"
              className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </a> */}

          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </div>
  );
};

// Feature item component
const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
    <span className="text-purple-400">{icon}</span>
    <span className="text-gray-300">{text}</span>
  </div>
);

export default Hero;