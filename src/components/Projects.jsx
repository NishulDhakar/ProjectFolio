import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  useEffect(() => {
    setIsLoaded(true);
    
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (containerRef.current) {
        const decorativeElements = containerRef.current.querySelectorAll('.decorative-circle');
        decorativeElements.forEach((el, index) => {
          const speed = index % 2 === 0 ? 0.1 : -0.05;
          el.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "DrumKit",
      date: "Sep 2024",
      description: "An interactive web application that allows users to play drums using keyboard keys or mouse clicks, showcasing DOM manipulation and audio integration.",
      longDescription: "DrumKit is a fun and interactive web-based drum simulator that enables users to play different drum sounds with their keyboard or mouse. This project demonstrates essential web development concepts like event listeners, audio control, and user interaction. The application features real-time visual feedback when drums are played, a volume control slider, and a responsive design for seamless performance across devices.",
      tags: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
      category: "Frontend",
      image: "/images/DrumKit.jpg",
      githubLink: "https://github.com/NishulDhakar/DrumKit",
      liveLink: "https://nishuldhakar.github.io/DrumKit/",
      color: "from-yellow-500 to-red-600",
      features: [
        "Interactive drum sounds triggered by keyboard keys",
        "Responsive mouse click interactions",
        "Visual feedback when keys/drums are pressed",
        "Multiple drum sound effects",
        "Volume control slider",
        "Responsive design for all devices"
      ],
      testimonial: {
        text: "DrumKit is a super fun way to explore web interactivity. The real-time feedback and sound effects make it feel like a real drum set!",
        author: "John D., Music Enthusiast"
      }
    },
    {
      title: "Typing Game",
      date: "Mar 2025",
      description: "A lightning-fast typing speed and accuracy tracker built with React + Vite. Challenge yourself, track progress, and become a typing champion!",
      longDescription: "Typing Game is an engaging and interactive web-based typing speed and accuracy tracker. It allows users to practice and enhance their typing skills with real-time Words Per Minute (WPM) and accuracy tracking. The app features an intuitive UI, progress analytics, achievement tracking, and dark mode support. Whether you're a beginner looking to improve or a pro aiming for the top, this game provides a fun and competitive typing experience.",
      tags: ["React", "Vite", "JavaScript", "CSS3", "HTML5"],
      category: "Frontend",
      image: "/images/TypingGame.png",
      githubLink: "https://github.com/NishulDhakar/Typing-Game",
      liveLink: "https://typing-game-lyart.vercel.app/",
      color: "from-blue-500 to-indigo-600",
      features: [
        "Real-time Words Per Minute (WPM) and accuracy tracking",
        "Clean, distraction-free interface with dark mode support",
        "Detailed performance analytics with historical stats tracking",
        "Achievement system and accuracy streaks for gamification",
        "Customizable difficulty levels and text input options",
        "Mobile-friendly, responsive design for all devices"
      ],
      testimonial: {
        text: "This typing game is a fantastic way to improve speed and accuracy! The real-time stats and achievement system keep me engaged and motivated.",
        author: "Sarah T., Typing Enthusiast"
      }
    },
    {
      title: "Midnight Restaurant",
      date: "Apr 2025",
      description: "An elegant restaurant website featuring a sophisticated nocturnal theme, combining modern web technologies with an immersive dining experience.",
      longDescription: "Midnight Restaurant is a high-end dining establishment website that transports visitors into a nocturnal culinary experience. The site features a sophisticated dark theme with golden accents, AI-powered drink pairing suggestions, and lunar cycle-aligned reservation system. Built with React and Vite, it offers an immersive gallery, dynamic menu presentation, and buttery smooth animations. The responsive design ensures an elegant experience across all devices, from mobile to desktop.",
      tags: ["React", "Vite", "JavaScript", "CSS3", "HTML5", "Framer Motion", "Netlify"],
      category: "Frontend",
      image: "/images/MidnightRestaurant.png",
      githubLink: "https://github.com/NishulDhakar/Restaurant-website",
      liveLink: "https://midnight-restaurant.netlify.app/",
      color: "from-gray-900 to-yellow-800",
      features: [
        "Sophisticated dark theme with dynamic golden accents",
        "AI-powered interactive sommelier for drink pairing",
        "Moon phase-aligned reservation booking system",
        "Immersive visual gallery with elegant photography",
        "Dynamic interactive menu with food presentations",
        "Responsive design for all device sizes",
        "Smooth animations with Framer Motion",
        "Customizable theme colors via CSS variables"
      ],
      testimonial: {
        text: "The Midnight Restaurant website perfectly captures the essence of fine dining after dark. The lunar reservation system is pure genius and the drink pairing AI is scarily accurate!",
        author: "Chef Antoine, Michelin Starred"
      }
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Fullstack"];

  const filteredProjects = useMemo(() => {
    // First filter by category
    const categoryFiltered = selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
    
    // Then filter by search query
    return searchQuery
      ? categoryFiltered.filter(project => 
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      : categoryFiltered;
  }, [selectedCategory, projects, searchQuery]);

  // Sort projects if needed
  const sortedProjects = useMemo(() => {
    return isSorted 
      ? [...filteredProjects].sort((a, b) => new Date(b.date.split(' – ')[0]) - new Date(a.date.split(' – ')[0]))
      : filteredProjects;
  }, [filteredProjects, isSorted]);

  const categoryVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

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

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "visible"; // Re-enable scrolling
  };

  const detailVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  // Toggle between grid and list view
  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === "grid" ? "list" : "grid");
  };

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="decorative-circle absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="decorative-circle absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="decorative-circle absolute top-40 right-40 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="decorative-circle absolute bottom-40 left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/5 to-transparent" style={{ backgroundSize: '50px 50px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)' }}></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={headingVariants}
          className="mb-20 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-purple-500 opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-purple-500 opacity-60"></div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A showcase of my creative work and technical expertise
          </motion.p>
          
          {/* Animated line */}
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Search and filter controls */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Search bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800/60 text-white px-5 py-4 rounded-full pl-12 border border-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Additional controls */}
            <div className="flex gap-4 items-center">
              {/* Sort toggle */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Latest first</span>
                <button 
                  onClick={() => setIsSorted(!isSorted)}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isSorted ? 'bg-purple-600' : 'bg-gray-700'}`}
                >
                  <motion.div 
                    className="absolute top-1 w-4 h-4 rounded-full bg-white"
                    animate={{ left: isSorted ? '28px' : '4px' }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              {/* View toggle */}
              <div className="flex bg-gray-800/60 backdrop-blur-sm p-1 rounded-full border border-gray-700/50">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={categoryVariants}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 cursor-pointer ${
                selectedCategory === category
                  ? "text-white shadow-xl shadow-purple-500/20"
                  : "text-gray-300 hover:text-white hover:shadow-lg"
              }`}
              style={{ 
                backgroundColor: selectedCategory === category 
                  ? "rgba(124, 58, 237, 0.95)" 
                  : "rgba(45, 55, 72, 0.5)",
                borderWidth: selectedCategory === category ? "2px" : "0px",
                borderColor: selectedCategory === category ? "rgba(167, 139, 250, 0.5)" : "transparent",
                backdropFilter: "blur(10px)"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" 
              }}
              whileTap={{ scale: 0.97 }}
              variants={categoryVariants}
            >
              {category}
              {category === "All" ? null : (
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs bg-white text-purple-600 rounded-full">
                  {projects.filter(project => project.category === category).length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects View (Grid or List) */}
        <AnimatePresence mode="wait">
  {viewMode === "grid" ? (
    <motion.div 
      key="grid-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {sortedProjects.map((project, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={projectVariants}
          whileHover={{ 
            y: -10,
            rotate: 2,
            transition: { duration: 0.3 }
          }}
          onMouseEnter={() => setHoveredProject(project.title)}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => {
            document.body.style.overflow = "hidden"; // Prevent scrolling
            handleProjectClick(project);
          }}
          className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl group cursor-pointer hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700/50"
          style={{ 
            transform: "perspective(1000px)",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Project Image with Parallax Effect */}
          <div className="relative h-56 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              style={{
                filter: hoveredProject === project.title ? "saturate(1.2)" : "saturate(1)"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            {/* Interactive Category badge */}
            <motion.div 
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {project.category}
            </motion.div>
            
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-sm text-gray-300 flex items-center">
                <motion.span 
                  className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                ></motion.span>
                {project.date}
              </p>
            </div>
          </div>

          <div className="p-6">
            {/* Project Details with line clamp */}
            <p className="text-gray-300 mb-5 line-clamp-3">{project.description}</p>

            {/* Animated Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.slice(0, 4).map((tag, idx) => (
                <motion.span
                  key={idx}
                  className="text-white px-3 py-1 text-xs rounded-full bg-gradient-to-r"
                  style={{ backgroundImage: `linear-gradient(to right, ${project.color.split(' ')[0].replace('from-', '')} , ${project.color.split(' ')[1].replace('to-', '')})` }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3
                  }}
                >
                  {tag}
                </motion.span>
              ))}
              {project.tags.length > 4 && (
                <motion.span 
                  className="text-white px-3 py-1 text-xs rounded-full bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                >
                  +{project.tags.length - 4}
                </motion.span>
              )}
            </div>

            {/* View project overlay - visible on hover with improved animation */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 flex items-center justify-center group-hover:opacity-90 transition-opacity duration-300`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.9 }}
            >
              <div className="text-white text-center px-6">
                <motion.p 
                  className="text-xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  View Project Details
                </motion.p>
                <motion.p 
                  className="text-sm mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Click to explore more
                </motion.p>
                <motion.div 
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mx-auto"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  ) : (
    <motion.div
      key="list-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {sortedProjects.map((project, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={listItemVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)"
          }}
          onClick={() => {
            document.body.style.overflow = "hidden"; // Prevent scrolling
            handleProjectClick(project);
          }}
          className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700/50 group"
        >
          <div className="flex flex-col md:flex-row">
            {/* Project Image with shine effect */}
            <div className="md:w-1/4 relative h-40 md:h-auto overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
              
              {/* Interactive Category badge */}
              <motion.div 
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {project.category}
              </motion.div>
            </div>
            
            {/* Project details */}
            <div className="p-6 md:w-3/4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-purple-300 transition-colors">{project.title}</h3>
                  <motion.p 
                    className="text-sm text-gray-300 flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span 
                      className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    ></motion.span>
                    {project.date}
                  </motion.p>
                </div>
                
                <p className="text-gray-300 mb-5">{project.description}</p>
                
                {/* Animated Top features list with progress bars */}
                <div className="mb-5">
                  <p className="text-sm text-gray-400 mb-2">Top features:</p>
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="relative">
                        <motion.div
                          className={`h-8 rounded-md overflow-hidden bg-gray-700/60 flex items-center px-3`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${project.color} opacity-20`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(idx + 1) * 25}%` }}
                            transition={{ duration: 1, delay: idx * 0.2 }}
                          />
                          <span className="text-white text-xs z-10">{feature}</span>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                {/* Animated Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="text-white px-3 py-1 text-xs rounded-full bg-gradient-to-r"
                      style={{ backgroundImage: `linear-gradient(to right, ${project.color.split(' ')[0].replace('from-', '')} , ${project.color.split(' ')[1].replace('to-', '')})` }}
                      whileHover={{ 
                        scale: 1.1,
                        y: -3
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 3 && (
                    <motion.span 
                      className="text-white px-3 py-1 text-xs rounded-full bg-gray-700"
                      whileHover={{ scale: 1.1 }}
                    >
                      +{project.tags.length - 3}
                    </motion.span>
                  )}
                </div>
                
                {/* Animated View details button */}
                <motion.button 
                  className={`px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>
        
        {/* No results message */}
{sortedProjects.length === 0 && (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-16"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="text-gray-600">No results found.</p>
  </motion.div>
)}

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetails}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            >
              <motion.div
                variants={detailVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-900/90 backdrop-blur-lg rounded-xl max-w-4xl w-full overflow-hidden border border-gray-800/50 relative"
              >
                {/* Close button */}
                <button
                        onClick={closeProjectDetails} // No need for event parameter
                        className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>                      

                {/* Modal content */}
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Image */}
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Right side - Details */}
                  <div className="p-8 md:w-2/3">
                    <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                    <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    {selectedProject.testimonial && (
                      <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
                        <p className="text-gray-300 italic mb-4">"{selectedProject.testimonial.text}"</p>
                        <p className="text-gray-400 text-right">- {selectedProject.testimonial.author}</p>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-white"
                      >
                        View on GitHub
                      </a>
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
