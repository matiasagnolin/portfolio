"use client";

import Lottie from 'lottie-react';
import animationData from "../public/portfolio-animation.json";


export function LottieAnimation() {
  return (
    <div style={{ width: '500px', height: '600px' }} className="relative overflow-visible">
      <Lottie
        animationData={animationData}
        alt="Portfolio animation"
        style={{ width: '100%', height: '100%' }}
      />
      </div>
  )
}
