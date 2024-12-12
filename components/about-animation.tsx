'use client'

import { motion } from 'framer-motion'

export function AboutAnimation() {
  return (
    <motion.div
      className="relative w-full h-full min-h-[300px] bg-primary/5 rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}

