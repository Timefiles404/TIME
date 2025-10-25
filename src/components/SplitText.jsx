import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SplitText = ({ 
  children, 
  delay = 0, 
  duration = 1, 
  stagger = 0.1, 
  ease = "power2.out" 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.split-char');
    
    // Set initial state - only opacity, no transforms
    gsap.set(chars, { 
      opacity: 0
    });

    // Animate in - only opacity
    gsap.to(chars, {
      opacity: 1,
      duration: duration,
      stagger: stagger,
      ease: ease,
      delay: delay
    });
  }, [delay, duration, stagger, ease]);

  const splitTextIntoChars = (text) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className="split-char"
        style={{ 
          display: 'inline-block',
          opacity: 0,
          // 专门的文字渲染优化
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontSmooth: 'always',
          WebkitTextStroke: '0.01em transparent'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <span 
      ref={containerRef}
      style={{ 
        // 专门的文字渲染优化
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        fontSmooth: 'always',
        WebkitTextStroke: '0.01em transparent'
      }}
    >
      {splitTextIntoChars(children)}
    </span>
  );
};

export default SplitText;