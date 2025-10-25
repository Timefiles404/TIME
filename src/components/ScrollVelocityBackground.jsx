import React, { useMemo, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValue, useAnimationFrame } from 'framer-motion';

// Utility to wrap a value between min and max (for seamless looping)
const wrap = (min, max, v) => {
  const range = max - min;
  return ((v - min) % range + range) % range + min;
};

const ParallaxLine = ({
  text,
  baseVelocity = 100,
  reverse = false,
  style,
}) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);

  const baseX = useMotionValue(0);
  const directionFactor = useMotionValue(reverse ? -1 : 1);

  // measure container and single segment width to determine copies and wrap width
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const [innerGapPx, setInnerGapPx] = useState(8);
  const [copyCount, setCopyCount] = useState(8);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const seg = measureRef.current;
      if (!container || !seg) return;
      const gapStr = window.getComputedStyle(container).gap;
      const gapVal = parseFloat(gapStr) || 8;
      setInnerGapPx(gapVal);
      const segWidth = seg.offsetWidth;
      setSegmentWidth(segWidth);
      const containerWidth = container.offsetWidth;
      const needed = Math.ceil(containerWidth / (segWidth + gapVal)) + 4; // extra copies for seamlessness
      setCopyCount(Math.max(needed, 8));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.get() * baseVelocity * (delta / 1000);
    moveBy += directionFactor.get() * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Loop x position in pixel space to create a seamless marquee based on one segment width
  const x = useTransform(baseX, (v) => {
    const width = segmentWidth + innerGapPx;
    if (!width || !isFinite(width) || width <= 0) {
      // fallback to percentage wrap when width not measured yet
      return `${wrap(-20, -45, v)}%`;
    }
    return `${wrap(-width, 0, v)}px`;
  });

  const copies = useMemo(() => Array.from({ length: copyCount }, () => text), [text, copyCount]);

  return (
    <motion.div
      aria-hidden
      ref={containerRef}
      style={{
        x,
        display: 'flex',
        whiteSpace: 'nowrap',
        gap: '0.5rem',
        ...style,
      }}
    >
      {copies.map((t, i) => (
        <span
          key={i}
          ref={i === 0 ? measureRef : undefined}
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            letterSpacing: '0.02em',
            lineHeight: 0.9,
            color: 'rgba(200, 200, 200, 0.14)',
            filter: 'blur(0.8px)',
            textShadow: '0 0 2px rgba(255,255,255,0.08)',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            willChange: 'transform',
            transform: 'translateZ(0)',
            userSelect: 'none',
          }}
        >
          {t}
        </span>
      ))}
    </motion.div>
  );
};

export default function ScrollVelocityBackground({
  text = 'TIMEFILES SURVIVAL 生存',
  baseVelocity = 80,
  numLines = 5,
  style,
}) {
  const lines = Array.from({ length: numLines }, (_, i) => i);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          opacity: 0.85,
        }}
      >
        {lines.map((i) => (
          <ParallaxLine
            key={i}
            text={text}
            baseVelocity={baseVelocity * (0.8 + 0.1 * i)}
            reverse={i % 2 === 1}
            style={{ paddingLeft: '10%' }}
          />
        ))}
      </div>
    </div>
  );
}