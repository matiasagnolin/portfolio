import Image from 'next/image'

export function GifAnimation() {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div 
        className="absolute inset-0 bg-background z-10" 
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 50%)'
        }}
      />
      <Image
        src="/api-animation.gif"
        alt="Portfolio animation"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  )
}

