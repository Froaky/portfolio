'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

type GlareStyle = React.CSSProperties & {
  '--mouse-x': MotionValue<string>;
  '--mouse-y': MotionValue<string>;
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
}

export default function TiltCard({ 
  children, 
  className = '', 
  style = {}, 
  maxTilt = 10 
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Normalizados de 0 a 1 (0.5 es el centro)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Springs suaves para la rotación 3D
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), { 
    stiffness: 150, 
    damping: 25 
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), { 
    stiffness: 150, 
    damping: 25 
  });

  // Interpolación de coordenadas para el brillo (0% a 100%)
  const glareX = useTransform(x, [0, 1], [0, 100]);
  const glareY = useTransform(y, [0, 1], [0, 100]);

  // Transformaciones dinámicas mapeadas a strings listos para CSS custom properties
  const cssMouseX = useTransform(glareX, (val) => `${val}%`);
  const cssMouseY = useTransform(glareY, (val) => `${val}%`);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    // Retorna suavemente al centro
    x.set(0.5);
    y.set(0.5);
  };

  const glareStyle: GlareStyle = {
    '--mouse-x': cssMouseX,
    '--mouse-y': cssMouseY,
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glass-card-3d-wrap ${className}`}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Brillo holográfico dinámico */}
      <motion.div
        className="glare-sheen"
        style={glareStyle}
      />
      
      {/* Contenedor del contenido interno que preserva la escena 3D */}
      <div style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
}
