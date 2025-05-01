'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Santosh",
    role: "Tunibasket",
    image: "/t1.jpg",
    quote: "The innovative approach to problem-solving and attention to detail in every project truly sets this team apart.",
    rating: 5
  },
  {
    id: 2,
    name: "Satya",
    role: "studysnap.ai",
    image: "/t2.jpg",
    quote: "Exceptional talent in creating seamless user experiences. Their work consistently demonstrates a perfect blend of creativity and functionality.",
    rating: 5
  },
  {
    id: 3,
    name: "shashi",
    role: "codesel",
    image: "/t3.jpg",
    quote: "Outstanding ability to deliver elegant solutions. The quality of work and attention to detail is remarkable.",
    rating: 5
  },
  {
    id: 4,
    name: "praveen",
    role: "Tech Leader",
    image: "/t4.jpg",
    quote: "Innovative thinking combined with technical excellence. Every project is handled with utmost professionalism and creativity.",
    rating: 5
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 3
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex >= testimonials.length) nextIndex = 0
      if (nextIndex < 0) nextIndex = testimonials.length - 1
      return nextIndex
    })
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b  to-black">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Background Cards */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-[2.5rem] transform -rotate-6 border border-gray-700/50" />
            <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-[2.5rem] transform rotate-3 border border-gray-700/50" />
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full max-w-3xl"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] border border-gray-700/50 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex-shrink-0
                                border-4 border-gray-700 shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 112px, 144px"
                      priority
                    />
                  </div>
                  <blockquote className="text-gray-200 text-lg md:text-xl font-medium mb-8 max-w-2xl leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="font-bold text-white text-2xl mb-2">{testimonials[currentIndex].name}</div>
                  <div className="text-blue-400 font-medium bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 md:-left-12 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg
                     flex items-center justify-center text-white hover:scale-110 border border-gray-700/50
                     transition-all duration-200 hover:border-blue-500/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 md:-right-12 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg
                     flex items-center justify-center text-white hover:scale-110 border border-gray-700/50
                     transition-all duration-200 hover:border-blue-500/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress Dots */}
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-blue-500/20
                           ${index === currentIndex 
                             ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-10' 
                             : 'bg-gray-800 hover:bg-gray-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 