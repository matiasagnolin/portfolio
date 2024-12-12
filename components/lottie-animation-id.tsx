"use client";

import Lottie from 'lottie-react';
import animationData from "../public/id-animation.json";


export function LottieAnimationId() {
  return (
    <div style={{ width: '300px', height: '300px' }} className="relative overflow-visible">
      <Lottie
        animationData={animationData}
        alt="Portfolio animation"
        style={{ width: '100%', height: '100%' }}
      />
      </div>
  )
}
