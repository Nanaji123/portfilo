'use client'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

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
      title: "nestsindia",
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
        x: "-50%",
        transition: {
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      })
    }
  }, [isHovered])

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
          <h2 className="text-5xl md:text-5xl text-3xl font-bold text-[#1a2b3c] mb-4">
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
          }}
        >
          <motion.div
            animate={controls}
            className="flex gap-6 min-w-max py-8 px-4"
          >
            {[...baseProjects, ...baseProjects].map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="group relative w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] 
                         h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] 
                         flex-shrink-0 rounded-[20px] md:rounded-[32px] overflow-hidden 
                         bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-black/80
                         transform transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)]"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-full h-full p-1 md:p-1.5">
                  <div className="relative w-full h-full rounded-[18px] md:rounded-[28px] overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project Title Overlay with Arrow */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-4 shadow-lg flex items-center justify-between">
                        <h3 className="text-black text-lg md:text-xl font-semibold capitalize">
                          {project.title}
                        </h3>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full
                                   flex items-center justify-center
                                   transition-all duration-300 hover:bg-black/90"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: -15
                          }}
                        >
                          <svg 
                            className="w-4 h-4 md:w-5 md:h-5 rotate-[-45deg]"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
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