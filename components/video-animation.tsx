'use client'

import { useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'

export function VideoAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div 
        className="absolute inset-0 bg-background z-10" 
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 50%)'
        }}
      />
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/your-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

