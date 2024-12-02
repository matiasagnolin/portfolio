'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export function AnimatedBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute top-1/4 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${
          theme === 'dark' ? 'bg-purple-700' : 'bg-purple-300'
        }`}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-3/4 -right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${
          theme === 'dark' ? 'bg-yellow-700' : 'bg-yellow-300'
        }`}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${
          theme === 'dark' ? 'bg-pink-700' : 'bg-pink-300'
        }`}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

