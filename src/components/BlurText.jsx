import React, { useEffect, useRef } from 'react';
import { animate } from 'motion';

/**
 * BlurText component
 * Props:
 * - text: string to display
 * - delay: number (ms) delay before starting animation
 * - duration: number (ms) per-piece animation duration
 * - animateBy: 'words' | 'letters'
 * - direction: 'top' | 'bottom' | 'left' | 'right'
 * - className: string
 * - onAnimationComplete: function
 */
const BlurText = ({
  text = '',
  delay = 0,
  duration = 800,
  animateBy = 'letters',
  direction = 'top',
  className = '',
  onAnimationComplete,
}) => {
  const containerRef = useRef(null);

  // 视口进入时才触发动画（一次）
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    let started = false;

    const offset = (() => {
      switch (direction) {
        case 'bottom':
          return { x: 0, y: 10 };
        case 'left':
          return { x: -10, y: 0 };
        case 'right':
          return { x: 10, y: 0 };
        case 'top':
        default:
          return { x: 0, y: -10 };
      }
    })();

    const runAnimation = () => {
      const pieces = Array.from(el.querySelectorAll('.blur-piece'));
      const base = delay / 1000; // seconds
      const perPiece = 0.06; // seconds

      const animations = pieces.map((piece, index) => {
        piece.style.filter = 'blur(12px)';
        piece.style.opacity = '0';
        piece.style.transform = `translate(${offset.x}px, ${offset.y}px)`;

        return animate(
          piece,
          {
            filter: ['blur(12px)', 'blur(0px)'],
            opacity: [0, 1],
            transform: [
              `translate(${offset.x}px, ${offset.y}px)`,
              'translate(0, 0)'
            ],
          },
          {
            duration: duration / 1000,
            delay: base + index * perPiece,
            easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
          }
        );
      });

      Promise.all(animations.map(a => a.finished)).then(() => {
        if (typeof onAnimationComplete === 'function') {
          onAnimationComplete();
        }
      });
    };

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started) {
            started = true;
            runAnimation();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, duration, direction, animateBy, onAnimationComplete]);

  const renderPieces = () => {
    const parts =
      animateBy === 'words' ? text.split(/(\s+)/) : text.split('');

    return parts.map((part, idx) => {
      // Keep spaces unanimated
      if (/^\s+$/.test(part)) {
        return (
          <span key={`space-${idx}`} style={{ whiteSpace: 'pre' }}>
            {part}
          </span>
        );
      }

      return (
        <span
          key={`piece-${idx}`}
          className="blur-piece"
          style={{
            display: 'inline-block',
            // Text clarity optimizations
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            backfaceVisibility: 'hidden',
            willChange: 'filter, opacity, transform',
          }}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        zIndex: 1,
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        backfaceVisibility: 'hidden',
      }}
    >
      {renderPieces()}
    </span>
  );
};

export default BlurText;