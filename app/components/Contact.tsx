'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false)
  const email = "Codesel.Labs@Gmail.Com"

  const handleContactClick = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="max-w-7xl w-full mx-auto text-center space-y-12">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-[#CCFF00] text-6xl md:text-7xl lg:text-8xl font-bold">
            Let's Talk
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
              {email}
            </h3>
          </motion.div>
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <button
            onClick={handleContactClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden bg-transparent border-2 border-white hover:border-[#CCFF00] px-12 py-4 text-xl font-medium"
          >
            <div className={`absolute inset-0 bg-white transition-transform duration-300 ease-out transform 
              ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
            />
            <span className={`relative z-10 transition-colors duration-300 ${
              isHovered ? 'text-black' : 'text-white'
            }`}>
              CONTACT
              <motion.span
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block ml-2"
              >
                ↗
              </motion.span>
            </span>
          </button>
        </motion.div>

       
      </div>
    </section>
  )
}

export default Contact 