'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <motion.div
        className="absolute w-72 h-72"
        style={{
          top: '60vh', // Use viewport height for positioning
          left: '-10%',
          borderRadius: '42% 56% 72% 28% / 42% 42% 56% 48%',
          opacity: 0.7,
          backgroundColor: 'rgb(255, 181, 132)',
          transform: 'translateY(-50%)',
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
          borderRadius: [
            '42% 56% 72% 28% / 42% 42% 56% 48%',
            '72% 28% 48% 48% / 28% 28% 72% 72%',
            '100% 56% 56% 100% / 100% 100% 56% 56%',
            '42% 56% 72% 28% / 42% 42% 56% 48%',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-72 overflow-hidden"
        style={{
          top: '-5%',
          right: '5%',
          borderRadius: '42% 56% 72% 28% / 42% 42% 56% 48%',
          opacity: 0.7,
          backgroundColor: 'rgb(242, 225, 255)',
          transform: 'translateY(-50%)',
        }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 30, -30, 0],
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
        className="absolute w-72 h-96"
        style={{
          top: '0',
          left: '0',
          borderRadius: '42% 56% 72% 28% / 42% 42% 56% 48%',
          opacity: 0.7,
          backgroundColor: 'rgb(255, 229, 166)',
          transform: 'translateX(20%)',
        }}
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 20, -20, 0],
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

