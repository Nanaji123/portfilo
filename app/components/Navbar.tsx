'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 flex justify-center px-4"
    >
      <motion.div 
        className={`rounded-2xl transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-lg shadow-xl shadow-black/20 w-[70%]' 
            : 'bg-black/80 backdrop-blur-md w-full'
        }`}
        initial={false}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <motion.div 
            className="flex items-center gap-3 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="#home" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <h1 className="text-2xl font-bold text-white">
                NANAJI GUNDAPU
              </h1>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="relative px-3 py-2 text-sm font-medium text-gray-100 rounded-lg group"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 h-full w-full bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="px-4 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-[70%] ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="mt-4 rounded-2xl bg-black/90 backdrop-blur-lg shadow-xl shadow-black/20 px-2 py-3">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-base font-medium text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2"
          >
            <Link
              href="#contact"
              className="block w-full text-center py-2 text-base font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar 