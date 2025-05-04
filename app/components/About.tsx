'use client'
import { motion, useInView, useAnimation } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef, useState } from 'react'

const CountingNumber = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const elementRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(elementRef)
  const controls = useAnimation()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      let animationFrame: number | null = null
      
      const updateNumber = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        
        if (progress < duration * 1000) {
          const nextCount = Math.min(
            Math.floor((progress / (duration * 1000)) * target),
            target
          )
          setCount(nextCount)
          animationFrame = requestAnimationFrame(updateNumber)
        } else {
          setCount(target)
        }
      }
      
      animationFrame = requestAnimationFrame(updateNumber)
      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, target, duration])

  return <span ref={elementRef}>{count}</span>
}

const About = () => {
  const stats = [
    {
      number: 25,
      label: "Projects Completed",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 10,
      label: "Happy Clients",
      icon: "😊",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 50,
      label: "Cups of Coffee",
      icon: "☕",
      color: "from-amber-500 to-orange-500"
    }
  ]

  const skills = [
    {
      name: "Frontend Development",
      icon: "💻",
      description: "React, Next.js, HTML5, CSS3",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "UI/UX Design",
      icon: "🎨",
      description: "Figma, Adobe XD, User Research",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "React & React Native",
      icon: "⚛️",
      description: "Cross-platform Mobile Development",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      name: "Next.js",
      icon: "🔥",
      description: "Server-side Rendering, API Routes",
      color: "from-gray-500/20 to-gray-700/20"
    },
    {
      name: "Mobile Development",
      icon: "📱",
      description: "iOS & Android Apps",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "JavaScript/TypeScript",
      icon: "🟨",
      description: "ES6+, Type Safety",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ]

  return (
    <section id="about" className="py-24 pt-32 md:pt-36 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* About Me Section */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              About Me
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 space-y-6"
            >
              <div className="h-20 flex items-center justify-center">
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Mobile App Developer',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                />
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className={`relative group overflow-hidden rounded-2xl p-6 
                              bg-gradient-to-br ${stat.color} bg-clip-padding backdrop-filter backdrop-blur-sm 
                              border border-white/50 shadow-lg`}
                  >
                    <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                      <span className="text-4xl mb-2">{stat.icon}</span>
                      <h4 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        <CountingNumber target={stat.number} />+
                      </h4>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="leading-relaxed">
                Frontend Developer specializing in creating modern web applications. 
                Experienced in React and Next.js with a strong focus on user experience.
              </p>
              
              {/* Experience Box */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-left space-y-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Experience</h3>
                <div className="space-y-8">
                  {/* Freelance Experience */}
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2 ring-4 ring-blue-50"></div>
                    <h4 className="text-lg font-medium text-gray-900">Freelance Web Developer & UI Designer</h4>
                    <p className="text-blue-600 font-medium">Self-employed • 2024-25 - Present</p>
                    <div className="mt-4 text-gray-600 space-y-3">
                      <p>• Successfully managed client relationships and delivered custom web solutions that exceeded expectations.</p>
                      <p>• Developed a deep understanding of client needs through effective communication and requirement analysis.</p>
                      <p>• Implemented modern design principles and best practices to create engaging user experiences.</p>
                      <p>• Maintained clear communication channels and provided regular project updates to ensure client satisfaction.</p>
                    </div>
                  </div>

                  {/* Company Experience */}
                  <div className="relative pl-6 border-l-2 border-purple-500">
                    <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-2 ring-4 ring-purple-50"></div>
                    <h4 className="text-lg font-medium text-gray-900">Frontend App Developer & UI/UX Designer</h4>
                    <p className="text-purple-600 font-medium">Nest India</p>
                    <div className="mt-4 text-gray-600 space-y-3">
                      <p>• Developed fully functional mobile applications using React Native, combining frontend development expertise with UI/UX design principles.</p>
                      <p>• Actively participated in team meetings, contributing to project planning and development strategies.</p>
                      <p>• Gained valuable experience in company workflows and professional team collaboration.</p>
                      <p>• Created responsive websites using React framework, ensuring optimal user experience across devices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Bento Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-2xl shadow-lg hover:shadow-xl 
                           transition-all duration-300 
                           bg-gradient-to-br ${skill.color}
                           backdrop-blur-sm border border-white/20`}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{skill.icon}</span>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 