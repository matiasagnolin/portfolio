import Image from 'next/image'

interface GifAnimationProps {
  className?: string;
}

export function GifAnimation({ className = '' }: GifAnimationProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src="/your-animation.gif"
        alt="Portfolio animation"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
}

