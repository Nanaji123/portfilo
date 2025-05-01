'use client'
import { motion } from 'framer-motion'
import RunningBanner from './RunningBanner'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern web applications using Next.js, React, and other cutting-edge technologies.",
      experience: "5+ Projects",
      highlights: [
        "Full-stack web applications",
        "E-commerce solutions",
        "Portfolio websites"
      ],
      icon: (
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </motion.div>
      ),
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Development",
      description: "Creating native-like mobile applications using React Native with smooth animations and excellent user experience.",
      experience: "2+ Apps",
      highlights: [
        "Cross-platform applications",
        "Native performance",
        "Offline capabilities"
      ],
      icon: (
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </motion.div>
      ),
      gradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "from-purple-500 to-pink-500"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces with focus on user experience and modern design principles.",
      experience: "5+ Designs",
      highlights: [
        "User-centered design",
        "Interactive prototypes",
        "Design systems"
      ],
      icon: (
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17a4 4 0 01-4 4h-4zm2-16H6v16h4V7.414L7.414 5z" />
          </svg>
        </motion.div>
      ),
      gradient: "from-amber-500/10 to-orange-500/10",
      iconBg: "from-amber-500 to-orange-500"
    },
    {
      title: "Frontend Development",
      description: "Professional experience in implementing pixel-perfect, responsive designs with clean and maintainable code.",
      experience: "1+ Year",
      highlights: [
        "2 months full-time role",
        "1 internship completed",
        "Freelance projects"
      ],
      icon: (
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </motion.div>
      ),
      gradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <>
      <RunningBanner />
      <section id="services" className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-3">
              Services & Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Delivering comprehensive web and mobile solutions with a proven track record 
              of creating exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-6 rounded-xl border border-gray-100 
                         hover:border-gray-200 shadow-md hover:shadow-lg transition-all duration-300
                         overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                              group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Experience Badge */}
                <div className="absolute top-3 right-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold
                              bg-white border border-gray-900 text-gray-900
                              shadow-sm`}
                  >
                    {service.experience}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center
                                bg-gradient-to-br ${service.iconBg} bg-opacity-10
                                group-hover:scale-110 transform transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-gray-600 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          className="mr-2 text-gray-900 text-xs"
                        >
                          ◆
                        </motion.div>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services 