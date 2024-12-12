'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute top-1/3 -left-5 w-72 h-72 mix-blend-multiply filter opacity-70 ${
          theme === 'dark' ? 'bg-purple-700' : 'bg-purple-300'
        }`}
        style={{
          borderRadius: '42% 56% 72% 28% / 42% 42% 56% 48%',
        }}
        animate={{
          x: [0, 100, -100, 0],    // Move horizontally in a wider range
          y: [0, -100, 100, 0],    // Move vertically in a wider range
          scale: [1, 1.1, 0.9, 1], // Optional: add some size variation
          borderRadius: [
            '42% 56% 72% 28% / 42% 42% 56% 48%',
            '72% 28% 48% 48% / 28% 28% 72% 72%',
            '100% 56% 56% 100% / 100% 100% 56% 56%',
            '42% 56% 72% 28% / 42% 42% 56% 48%',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,            // Longer duration for smoother movement
          ease: "easeInOut",
          times: [0, 0.333, 0.667, 1], // Optional: control timing of keyframes
        }}
      />
      <motion.div
        className={`absolute top-3/4 -right-8 w-72 h-72 rounded-full mix-blend-multiply filter  opacity-70 ${
          theme === 'dark' ? 'bg-yellow-700' : 'bg-yellow-300'
        }`}
        animate={{
          x: [0, -80, 0],
          y: [0, -10, 0],
          borderRadius: [
            '42% 56% 72% 28% / 42% 42% 56% 48%',
            '72% 28% 48% 48% / 28% 28% 72% 72%',
            '100% 56% 56% 100% / 100% 100% 56% 56%',
            '42% 56% 72% 28% / 42% 42% 56% 48%',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter  opacity-70 ${
          theme === 'dark' ? 'bg-pink-700' : 'bg-pink-300'
        }`}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
          borderRadius: [
            '42% 56% 72% 28% / 42% 42% 56% 48%',
            '72% 28% 48% 48% / 28% 28% 72% 72%',
            '100% 56% 56% 100% / 100% 100% 56% 56%',
            '42% 56% 72% 28% / 42% 42% 56% 48%',
          ],
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

