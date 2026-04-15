'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function InteractiveProfile({ src }: { src: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = document.getElementById('profile-img-container');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 300) {
        const force = (300 - distance) / 10;
        mouseX.set(-dx * force / 20);
        mouseY.set(-dy * force / 20);
      } else {
        mouseX.set(0);
        mouseY.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      id="profile-img-container"
      className="profile-container"
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
    >
      <Image 
        src={src} 
        alt="Froaky" 
        width={400} 
        height={400} 
        className="profile-img"
        priority 
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
      />
    </motion.div>
  );
}
