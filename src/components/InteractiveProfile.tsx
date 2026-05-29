'use client';

import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useRef, useState } from 'react';

type GlareStyle = CSSProperties & {
  '--mouse-x': MotionValue<string>;
  '--mouse-y': MotionValue<string>;
};

export default function InteractiveProfile({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Normalized mouse position (0 to 1, with 0.5 as center)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Very soft springs for subtle 3D tilt
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { 
    stiffness: 100, 
    damping: 20 
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { 
    stiffness: 100, 
    damping: 20 
  });

  // Reactive coordinates for glare sheen
  const glareX = useTransform(x, [0, 1], [0, 100]);
  const glareY = useTransform(y, [0, 1], [0, 100]);
  const cssGlareX = useTransform(glareX, (val) => `${val}%`);
  const cssGlareY = useTransform(glareY, (val) => `${val}%`);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  const glareStyle: GlareStyle = {
    zIndex: 6,
    '--mouse-x': cssGlareX,
    '--mouse-y': cssGlareY,
    opacity: hovered ? 1 : 0,
    borderRadius: '24px',
  };

  return (
    <motion.div 
      ref={containerRef}
      id="profile-img-container"
      className="profile-container"
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background Soft Spotlight Behind Card */}
      <div 
        style={{
          position: 'absolute',
          inset: '20px',
          background: 'rgba(99, 102, 241, 0.08)',
          filter: 'blur(40px)',
          borderRadius: '24px',
          transform: 'translateZ(-15px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Clean Portrait Container */}
      <div 
        style={{ 
          transform: 'translateZ(0px)', 
          transformStyle: 'preserve-3d', 
          zIndex: 3, 
          position: 'relative', 
          width: '100%', 
          height: '100%',
          overflow: 'hidden',
          borderRadius: '24px',
          border: '1px solid var(--border)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          background: '#121218',
        }}
      >
        <Image 
          src={src} 
          alt="Froaky" 
          width={400} 
          height={400} 
          className="profile-img"
          priority 
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            border: 'none',
            boxShadow: 'none',
          }}
        />

        {/* Soft Dynamic Glare Sheen */}
        <motion.div
          className="glare-sheen"
          style={glareStyle}
        />
      </div>
    </motion.div>
  );
}
