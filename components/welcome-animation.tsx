'use client'

import { motion } from 'framer-motion'

export function WelcomeAnimation() {
  return (
    <motion.div
      className="w-full h-64 bg-primary/10 rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"
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
    </motion.div>
  )
}

