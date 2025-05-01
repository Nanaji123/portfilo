'use client'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Projects = () => {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  const baseProjects = [
    {
      title: "daybreak",
      image: "/design.png",
      link: "https://www.daybreak.studio/"
    },
    {
      title: "nest",
      image: "/nest.png",
      link: "https://www.nestsindia.com/"
    },
    {
      title: "kia",
      image: "/kio.png",
      link: "https://codeselkio.framer.website/"
    },
    {
      title: "codesel",
      image: "/codesel.png",
      link: "https://codesel.com/"
    }
  ]

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: "-100%",
        transition: {
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }
      })
    }
  }, [controls, isHovered])

  return (
    <section id="projects" className="py-20 relative overflow-hidden w-full bg-gray-50">
      <div className="w-full px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#1a2b3c] mb-4">
            My Work Examples
          </h2>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div 
          className="relative overflow-hidden w-screen -mx-4"
          onMouseEnter={() => {
            setIsHovered(true)
            controls.stop()
          }}
          onMouseLeave={() => {
            setIsHovered(false)
            controls.start({
              x: "-100%",
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            })
          }}
        >
          <motion.div
            animate={controls}
            className="flex gap-6 min-w-max py-8 px-4"
          >
            {/* First set of projects */}
            {[...baseProjects, ...baseProjects, ...baseProjects, ...baseProjects].map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="group relative w-[600px] h-[400px] flex-shrink-0 rounded-[32px] overflow-hidden 
                         bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100
                         transform transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full p-1">
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Cross Arrow Link */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full
                               flex items-center justify-center opacity-0 group-hover:opacity-100
                               transition-all duration-300 hover:bg-white z-20"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 45
                      }}
                    >
                      <svg 
                        className="w-6 h-6 text-gray-800" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.a>

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects

// Add these styles to your globals.css
/*
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
*/ 