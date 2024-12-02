'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

export function DiagonalImage() {
  const { resolvedTheme } = useTheme()

  const imageSrc = resolvedTheme === 'dark' 
    ? "/placeholder.svg?height=256&width=512&text=Dark+Mode+Image"
    : "/placeholder.svg?height=256&width=512&text=Light+Mode+Image"

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 bg-background z-10" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 50%)'
      }}></div>
      <Image
        src={imageSrc}
        alt="Profile image that changes based on theme"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  )
}

