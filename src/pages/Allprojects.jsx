import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    category: "Beginner Projects (HTML + CSS + Basic JavaScript)",
    description: "Perfect for newcomers to web development",
    list: [
      { name: "Portfolio Website", description: "A sleek portfolio with a contact form" },
      { name: "Landing Page", description: "Modern business landing page" },
      { name: "Product Showcase", description: "Display products with hover effects" },
      { name: "Blog Layout", description: "A structured blog with comments section" },
      { name: "Resume Builder", description: "HTML template for resumes" },
    ],
  },
  {
    category: "Advanced UI Projects (HTML + CSS + JavaScript + Tailwind CSS)",
    description: "Enhance your frontend skills with these interactive projects",
    list: [
      { name: "To-Do List App", description: "Task management with local storage" },
      { name: "Image Gallery with Filters", description: "A responsive gallery with category filters" },
      { name: "Dark Mode Toggle", description: "Implement light/dark themes" },
      { name: "CSS Animations Hub", description: "Showcasing advanced CSS animations" },
      { name: "Modern Pricing Table", description: "A dynamic pricing component" },
    ],
  },
  {
    category: "React Projects (React + Tailwind + APIs)",
    description: "Build powerful applications with React and external data",
    list: [
      { name: "Weather App", description: "Fetch live weather using OpenWeather API" },
      { name: "Expense Tracker", description: "Track income and expenses with React State" },
      { name: "Blog CMS", description: "A blog with Markdown and user authentication" },
      { name: "Chat Application", description: "Real-time chat using Firebase" },
      { name: "Pomodoro Timer", description: "A productivity timer with sessions" },
    ],
  },
  {
    category: "Full-Stack Applications (MERN / Next.js / PostgreSQL / Firebase)",
    description: "Complete end-to-end solutions with frontend and backend integration",
    list: [
      { name: "E-Commerce Website", description: "Product listings, cart, and checkout" },
      { name: "Job Finder Platform", description: "Browse and apply for job postings" },
      { name: "Social Media App", description: "Posts, likes, and comments system" },
      { name: "AI-Powered Portfolio", description: "Suggests projects dynamically" },
      { name: "Real-Time Dashboard", description: "Data visualization for business insights" },
    ],
  },
  {
    category: "AI & ML-Powered Projects (Python + OpenAI + TensorFlow)",
    description: "Harness the power of artificial intelligence in your applications",
    list: [
      { name: "AI Chatbot", description: "GPT-powered chatbot for coding queries" },
      { name: "Food Nutrient Analyzer", description: "Scans images for nutritional data" },
      { name: "AI-Based Gym Trainer", description: "Suggests workouts based on user data" },
      { name: "Clothing Recommender", description: "AI for fashion styling" },
      { name: "Trading Insights Dashboard", description: "Analyzes market trends" },
    ],
  },
  {
    category: "Next-Level SaaS & Business Ideas",
    description: "Transform your coding skills into profitable ventures",
    list: [
      { name: "AI Resume Builder", description: "Generates ATS-friendly resumes" },
      { name: "AI Study Assistant", description: "Analyzes notes and creates quizzes" },
      { name: "Freelancer Marketplace", description: "Connects clients with freelancers" },
      { name: "Stock Market Tracker", description: "Analyzes and predicts trends" },
      { name: "Health & Diet Planner", description: "AI-based diet recommendations" },
    ],
  },
];

function ProjectFolio() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            ProjectFolio
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            A-Z Real-World Projects by Tech Stack
          </p>
        </motion.div>

        {/* Project Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {projects.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative backdrop-blur-lg bg-gray-800/90 rounded-xl p-8 border border-gray-700 hover:border-orange-500 shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-gradient-to-br from-gray-700/10 to-gray-900/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    {section.category}
                  </h2>
                  <p className="text-gray-400 mt-1 text-sm opacity-90">{section.description}</p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.list.map((project, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-3 border border-gray-600/20 hover:border-orange-500 transition-all"
                    >
                      <div className="flex flex-col text-white hover:text-orange-500 transition-colors">
                        <span className="font-medium flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                          {project.name}
                        </span>
                        <span className="text-gray-400 text-sm ml-4 mt-1">{project.description}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            🎯 Which project excites you the most? Let’s build something amazing! 🚀
          </p>
          <div className="mt-6">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all">
              Start Coding Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectFolio;