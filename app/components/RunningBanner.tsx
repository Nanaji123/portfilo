'use client'
import { motion } from 'framer-motion'

const RunningBanner = () => {
  const bannerItems = [
    "WEB DEVELOPER",
    "APP DEVELOPER",
    "FRONTEND EXPERT",
    "UI/UX DESIGNER",
    "REACT SPECIALIST",
    "NEXT.JS DEVELOPER"
  ]
  
  const cornerStar = "✦"
  const bannerText = bannerItems.map(item => `${item} ${cornerStar}`).join(" ") + " "
  const repeatedText = bannerText.repeat(3) // Repeat the text to create a continuous effect

  return (
    <div className="py-6 overflow-hidden border-t border-b border-gray-200">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="whitespace-nowrap"
      >
        <span className="text-3xl font-extrabold tracking-widest uppercase 
                       [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]
                       bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                       bg-clip-text text-transparent
                       font-mono"
        >
          {repeatedText}
        </span>
      </motion.div>
    </div>
  )
}

export default RunningBanner 