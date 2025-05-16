import React, { useState, useEffect } from "react";
import { Github, Twitter, Linkedin, Instagram, Mail, ArrowUp, Code, Heart } from "lucide-react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    {
      href: "https://github.com/nishuldhakar",
      icon: <Github size={20} />,
      label: "GitHub",
      hoverColor: "hover:text-white group-hover:bg-gray-800",
    },
    {
      href: "https://www.linkedin.com/in/nishuldhakar/",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-500 group-hover:bg-blue-900/20",
    },
    {
      href: "mailto:nishuldhakar123@gmail.com",
      icon: <Mail size={20} />,
      label: "Email",
      hoverColor: "hover:text-yellow-400 group-hover:bg-yellow-900/20",
    },
  ];

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/#Resume", label: "Resume" },

  ];

  const legalLinks = [
    { href: "/#privacy", label: "Privacy Policy" },
    { href: "/#terms", label: "Terms of Service" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 to-black text-gray-200 pt-16 pb-8 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
      <div className="absolute top-0 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Nishul Dhakar</h3>
              <p className="text-gray-400">
                Creating innovative web solutions with modern technologies. Let's build something amazing together.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 text-gray-400 ${link.hoverColor} transition-all duration-300 hover:scale-110`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="h-[1px] w-0 bg-purple-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <textarea
                  placeholder="Your message"
                  rows="3"
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <p className="text-gray-400 text-sm">
                © {year} Nishul Dhakar. All rights reserved.
              </p>
              <span className="mx-2 text-gray-600">•</span>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart size={14} className="mx-1 text-red-500" /> and <Code size={14} className="mx-1 text-blue-400" />
              </p>
            </div>
            <nav className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-purple-500/20"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}

export default Footer;
