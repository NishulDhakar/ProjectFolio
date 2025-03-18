import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, FolderKanban, Menu, X, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  // Enhanced theme colors with gradients
  const themeColors = {
    dark: {
      primary: "rgba(124, 58, 237, 1)",      // Vibrant purple
      secondary: "rgba(236, 72, 153, 1)",    // Pink
      accent: "rgba(6, 182, 212, 1)",        // Cyan
      gradientStart: "rgba(124, 58, 237, 1)",
      gradientEnd: "rgba(236, 72, 153, 1)"
    },
    light: {
      primary: "rgba(124, 58, 237, 0.9)",
      secondary: "rgba(236, 72, 153, 0.9)",
      accent: "rgba(6, 182, 212, 0.9)",
      gradientStart: "rgba(124, 58, 237, 0.9)",
      gradientEnd: "rgba(236, 72, 153,.9)"
    }
  };

  const currentTheme = isDarkMode ? themeColors.dark : themeColors.light;

  // Handle scroll effect with enhanced behavior
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Animation variants
  const navbarVariants = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    closed: { 
      opacity: 0, 
      y: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? "bg-gray-900/95 shadow-lg shadow-purple-500/10 backdrop-blur-md py-2 border-b border-purple-950/30" 
            : "bg-white/95 shadow-lg shadow-purple-500/10 backdrop-blur-md py-2 border-b border-purple-200/30"
          : "bg-transparent py-4"
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Animation */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <motion.div 
              className="p-2 rounded-lg mr-3 shadow-lg transform group-hover:shadow-purple-500/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: `linear-gradient(135deg, ${currentTheme.gradientStart} 0%, ${currentTheme.gradientEnd} 100%)` 
              }}
            >
              <FolderKanban size={24} className="text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span 
                className="text-2xl font-bold text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${currentTheme.gradientStart}, ${currentTheme.gradientEnd})` 
                }}
              >
                ProjectFolio
              </span>
              <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Building the future one line at a time.</span>
            </div>
          </Link>

          {/* Desktop Menu - Enhanced */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink 
              to="/" 
              isActive={isActive("/")} 
              themeColor={currentTheme}
              isDarkMode={isDarkMode}
            >
              <Home size={18} className="mr-2" />
              <span>Home</span>
            </NavLink>
            
            <NavLink 
              to="/about" 
              isActive={isActive("/about")} 
              themeColor={currentTheme}
              isDarkMode={isDarkMode}
            >
              <User size={18} className="mr-2" />
              <span>About</span>
            </NavLink>

            {/* GitHub button with animation */}
            <motion.a 
              href="https://github.com/nishuldhakar"
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 flex items-center text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, ${currentTheme.gradientStart} 0%, ${currentTheme.gradientEnd} 100%)`,
                boxShadow: `0 4px 14px 0 ${currentTheme.gradientStart}30`
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 6px 20px 0 ${currentTheme.gradientStart}40`
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} className="mr-2" />
              <span>GitHub</span>
              <ExternalLink size={14} className="ml-1" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle with Animation */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg text-white shadow-md focus:outline-none focus:ring-2 transition-all`}
              style={{ 
                background: `linear-gradient(135deg, ${currentTheme.gradientStart} 0%, ${currentTheme.gradientEnd} 100%)`,
                boxShadow: `0 4px 10px 0 ${currentTheme.gradientStart}30`
              }}
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className={`md:hidden mt-4 rounded-xl p-4 shadow-lg overflow-hidden ${
                isDarkMode 
                  ? 'bg-gray-800/90 backdrop-blur-md border border-gray-700/50' 
                  : 'bg-white/90 backdrop-blur-md border border-gray-200/50'
              }`}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div variants={itemVariants}>
                <MobileNavLink 
                  to="/" 
                  onClick={toggleMobileMenu} 
                  isActive={isActive("/")} 
                  themeColor={currentTheme}
                  isDarkMode={isDarkMode}
                >
                  <Home size={20} className="mr-3" />
                  <span>Home</span>
                </MobileNavLink>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <MobileNavLink 
                  to="/about" 
                  onClick={toggleMobileMenu} 
                  isActive={isActive("/about")} 
                  themeColor={currentTheme}
                  isDarkMode={isDarkMode}
                >
                  <User size={20} className="mr-3" />
                  <span>About</span>
                </MobileNavLink>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <a 
                  href="https://github.com/nishuldhakar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white p-3 rounded-xl font-medium w-full shadow-md"
                  style={{ 
                    background: `linear-gradient(135deg, ${currentTheme.gradientStart} 0%, ${currentTheme.gradientEnd} 100%)`,
                    boxShadow: `0 4px 10px 0 ${currentTheme.gradientStart}30`
                  }}
                >
                  <Github size={20} className="mr-2" />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Enhanced Desktop navigation link component with animations
const NavLink = ({ to, children, isActive, themeColor, isDarkMode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      className={`px-4 py-2 rounded-xl flex items-center font-medium transition-all duration-300 ${
        isActive 
          ? "text-white shadow-md" 
          : isDarkMode
            ? "text-gray-300 hover:text-white hover:bg-gray-800"
            : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
      }`}
      style={isActive 
        ? { 
            background: `linear-gradient(135deg, ${themeColor.gradientStart} 0%, ${themeColor.gradientEnd} 100%)`,
            boxShadow: `0 4px 10px 0 ${themeColor.gradientStart}30`
          } 
        : {}
      }
    >
      {children}
    </Link>
  </motion.div>
);

// Enhanced Mobile navigation link component with animations
const MobileNavLink = ({ to, children, onClick, isActive, themeColor, isDarkMode }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center p-3 mb-3 rounded-xl font-medium transition-all ${
      isActive 
        ? "text-white shadow-md" 
        : isDarkMode
          ? "text-gray-300 hover:text-white hover:bg-gray-700"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
    }`}
    style={isActive 
      ? { 
          background: `linear-gradient(135deg, ${themeColor.gradientStart} 0%, ${themeColor.gradientEnd} 100%)`,
          boxShadow: `0 4px 10px 0 ${themeColor.gradientStart}30`
        } 
      : {}
    }
  >
    {children}
  </Link>
);

export default Navbar;