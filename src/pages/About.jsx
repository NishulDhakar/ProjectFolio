import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Code, Server, Database, Shield, Cloud } from "lucide-react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    // Enhanced parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (containerRef.current) {
        const decorativeElements = containerRef.current.querySelectorAll('.decorative-circle');
        decorativeElements.forEach((el, index) => {
          const speed = (index % 3 === 0) ? 0.15 : (index % 3 === 1) ? -0.08 : 0.05;
          const rotationSpeed = (index % 2 === 0) ? 0.02 : -0.01;
          el.style.transform = `translateY(${scrollPosition * speed}px) rotate(${scrollPosition * rotationSpeed}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techCategories = {
    frontend: [
      { name: "React.js", description: "Build interactive UI components" },
      { name: "Next.js", description: "Server-side rendering and routing" },
      { name: "Tailwind CSS", description: "Fast and responsive styling" },
      { name: "Redux", description: "State management for large apps" },
      { name: "Framer Motion", description: "Smooth animations" },
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime for server-side" },
      { name: "Express.js", description: "Backend framework for APIs" },
      { name: "GraphQL", description: "Query language for APIs" },
      { name: "WebSockets", description: "Real-time communication" },
    ],
    database: [
      { name: "MongoDB", description: "NoSQL database for flexibility" },
      { name: "PostgreSQL", description: "SQL database for structured data" },
      { name: "Redis", description: "Caching and fast data retrieval" },
    ],
    security: [
      { name: "JWT", description: "Secure user authentication" },
      { name: "OAuth", description: "Third-party login integration" },
      { name: "bcrypt.js", description: "Encrypt passwords" },
      { name: "Helmet.js", description: "Secure HTTP headers" },
    ],
    devops: [
      { name: "Docker", description: "Containerization for scalability" },
      { name: "Vercel", description: "Deploy frontend applications" },
      { name: "Netlify", description: "Hosting static websites" },
      { name: "Railway", description: "Easy backend deployment" },
      { name: "Render", description: "Full-stack application hosting" },
      { name: "GitHub Actions", description: "Automate CI/CD workflows" },
    ]
  };

  // Get all technologies for "all" category
  const allTech = Object.values(techCategories).flat();

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const categoryIcons = {
    frontend: <Code size={20} />,
    backend: <Server size={20} />,
    database: <Database size={20} />,
    security: <Shield size={20} />,
    devops: <Cloud size={20} />,
    all: <Code size={20} />
  };

  // Display technologies based on active category
  const displayTech = activeCategory === "all" ? allTech : techCategories[activeCategory];

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white py-32 overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* More vibrant gradient orbs */}
        <div className="decorative-circle absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="decorative-circle absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="decorative-circle absolute top-1/4 right-1/4 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="decorative-circle absolute bottom-1/3 left-1/3 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="decorative-circle absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        {/* Enhanced animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 80 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                y: [0, Math.random() * 150 - 75],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
        
        {/* Enhanced grid lines */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-800/5 to-transparent" 
          style={{ 
            backgroundSize: '50px 50px', 
            backgroundImage: 'linear-gradient(to right, rgba(168,85,247,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.05) 1px, transparent 1px)' 
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={headingVariants}
          className="mb-24 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-purple-500 opacity-80"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-purple-500 opacity-80"></div>
            <h2 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <motion.p 
            className="text-2xl text-gray-200 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A passionate developer crafting immersive web experiences with cutting-edge technologies
          </motion.p>
          
          {/* Enhanced animated line */}
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mt-10 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.8, duration: 1 }}
          ></motion.div>
        </motion.div>

        {/* About Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Left Column - Introduction */}
          <div className="lg:col-span-2 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-900/20 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Introduction
            </h3>
            <div className="space-y-6 text-gray-200">
              <p className="leading-relaxed text-lg">
                Hi, I'm <span className="text-purple-400 font-medium">Nishul Dhakar</span>, a passionate developer with a focus on creating seamless web experiences. I specialize in building modern, responsive, and user-friendly applications using cutting-edge technologies.
              </p>
              <p className="leading-relaxed text-lg">
                With a strong foundation in both frontend and backend development, I enjoy tackling complex problems and delivering high-quality solutions. My goal is to continuously learn and grow while contributing to impactful projects.
              </p>
              
              {/* Quote */}
              <div className="relative mt-10 p-6 bg-gray-800/50 rounded-xl border-l-4 border-purple-500">
                <svg className="absolute -top-6 -left-6 h-12 w-12 text-purple-500/30" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 italic">
                  I believe in creating digital experiences that are not just functional, but delightful and memorable for users.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-3 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-900/20 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h3>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { id: "all", name: "All" },
                { id: "frontend", name: "Frontend" },
                { id: "backend", name: "Backend" },
                { id: "database", name: "Database" },
                { id: "security", name: "Security" },
                { id: "devops", name: "DevOps" }
              ].map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                      : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {categoryIcons[category.id]}
                  {category.name}
                </motion.button>
              ))}
            </div>
            
            {/* Skills Grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {displayTech.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={skillVariants}
                    className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-4 border border-gray-700/50 shadow-lg hover:shadow-purple-600/20 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">{tech.name}</h4>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-8 mt-20 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { href: "https://github.com/Nishuldhakar", Icon: Github, label: "GitHub", color: "group-hover:text-purple-400" },
            { href: "https://www.linkedin.com/in/Nishuldhakar/", Icon: Linkedin, label: "LinkedIn", color: "group-hover:text-blue-500" },
          
          ].map(({ href, Icon, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                <Icon size={24} className={`transition-colors duration-300 ${color}`} />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
