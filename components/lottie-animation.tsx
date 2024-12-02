"use client";

import Lottie from 'lottie-react';
import animationData from "../public/portfolio-animation.json";


export function LottieAnimation() {
  return (
    <div className="relative w-full h-85 overflow-hidden">
      <Lottie
        animationData={animationData}
        alt="Portfolio animation"
      />
      </div>
  )
}
