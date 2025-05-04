'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Hero = () => {
  const titles = [
    "Frontend Developer",
    "Web Developer",
    "Application Developer",
    "React Native Developer",
    "UI/UX Designer"
  ]

  const [currentTitle, setCurrentTitle] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current title from array
      const fullTitle = titles[currentIndex]
      
      // If deleting, remove a character, else add a character
      if (isDeleting) {
        setCurrentTitle(prev => prev.substring(0, prev.length - 1))
      } else {
        setCurrentTitle(prev => fullTitle.substring(0, prev.length + 1))
      }
      
      // If completed typing current title
      if (!isDeleting && currentTitle === fullTitle) {
        // Wait a bit then start deleting
        setTimeout(() => setIsDeleting(true), 1500)
      } 
      // If deleted current title
      else if (isDeleting && currentTitle === '') {
        setIsDeleting(false)
        // Move to next title (loop back if at end)
        setCurrentIndex(prev => (prev + 1) % titles.length)
      }
      
    }, isDeleting ? 50 : 100) // Type slower, delete faster
    
    return () => clearTimeout(timeout)
  }, [currentTitle, currentIndex, isDeleting, titles])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-7xl"
      >
        {/* Gradient Border Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-gradient"></div>
        
        {/* Main Content Container */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                Hi, I'm Nanaji Gundapu
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-3xl text-gray-700 h-10 flex items-center"
              >
                <span className="mr-2">I'm a</span> 
                <span className="text-blue-600 font-medium">{currentTitle}</span>
                <span className="border-r-2 border-blue-600 h-8 ml-1 animate-blink"></span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-gray-600 max-w-lg"
              >
                Passionate about creating beautiful, intuitive digital experiences. I blend modern design with clean code to build responsive, accessible, and high-performance web applications that elevate brands and engage users.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gray-900 text-white rounded-full 
                           hover:bg-gray-800 transition-all duration-300 
                           transform hover:scale-105 hover:shadow-lg text-base"
                >
                  Get in Touch
                </a>
                <a
                  href="https://docs.google.com/document/d/1ZDRK3XhBYLXgpUQGMg8m0IuanGg6JBbM/edit?usp=drivesdk&ouid=117977221252992579771&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 rounded-full border-2 border-gray-900
                           hover:bg-gray-50 transition-all duration-300 
                           transform hover:scale-105 hover:shadow-lg text-base"
                >
                  Download CV
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex gap-6 pt-4"
              >
                <a
                  href="https://linkedin.com/in/nanaji-gundapu-5000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/nanaji0133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  title="GitHub"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:nanajigundapu@gmail.com"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  title="Email"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/nanaji_gundapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  title="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://nanaji-portfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  title="Website"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative h-[400px] w-full max-w-[400px] mx-auto">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-[2.5rem] blur opacity-75 transition duration-1000 animate-gradient"></div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] transform rotate-6 scale-95 opacity-20 blur-sm"></div>
                
                {/* Main Image Container */}
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl 
                              border-4 border-white bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                  <Image
                    src="/mypic.jpg"
                    alt="Nanaji Gundapu"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-[1.8rem] hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 