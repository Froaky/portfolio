'use client';

import { motion, Variants, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

interface TerminalHeroProps {
  title: string;
  subtitle: string;
  desc: string;
}

const BOOT_TEXT = 'MATEO_COCA // PORTFOLIO_OPS.V3';

function useBootSequence(text: string) {
  const reducedMotion = useReducedMotion();
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 38);

    return () => clearInterval(interval);
  }, [text, reducedMotion]);

  // Con reduced-motion no se anima: el texto aparece completo.
  return {
    typed: reducedMotion ? text : typed,
    done: reducedMotion ? true : done,
  };
}

export default function TerminalHero({ title, subtitle, desc }: TerminalHeroProps) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const { typed, done } = useBootSequence(BOOT_TEXT);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom elegant ease-out
      },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex flex-col items-start text-left"
    >
      {/* Boot-sequence tag: se tipea como terminal al cargar */}
      <motion.div
        variants={itemVariants}
        className="mono text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase mb-5 flex items-center gap-2"
        style={{ minHeight: '1.2em' }}
        aria-label={BOOT_TEXT}
      >
        <span aria-hidden="true" style={{ color: 'var(--accent)' }}>&gt;</span>
        <span aria-hidden="true">{typed}</span>
        <span aria-hidden="true" className={`boot-cursor ${done ? 'boot-cursor-idle' : ''}`} />
      </motion.div>

      {/* Main High-Impact Typography Header */}
      <motion.h1 
        variants={itemVariants}
        className="leading-[1.1] tracking-tight font-extrabold text-white"
      >
        <span>{title}</span>
        <br />
        <span className="text-gradient block mt-1">
          {subtitle}
        </span>
      </motion.h1>

      {/* Sophisticated Smooth Description Reveal */}
      <motion.div 
        variants={itemVariants}
        className="relative mt-8 max-w-[520px]"
      >
        <p className="text-[1.05rem] text-zinc-400 font-sans leading-relaxed">
          {desc}
        </p>
      </motion.div>

      {/* Minimalistic Stack & Location Badges */}
      <motion.div 
        variants={itemVariants}
        className="mt-10 flex flex-wrap gap-3"
      >
        <div className="px-3 py-1 border border-[var(--border)] rounded-[4px] flex items-center gap-2 bg-[rgba(255,255,255,0.015)]">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
          <span className="mono text-[0.6rem] uppercase tracking-wide text-zinc-300">Full-Stack Dev</span>
        </div>
        <div className="px-3 py-1 border border-[var(--border)] rounded-[4px] flex items-center gap-2 bg-[rgba(255,255,255,0.015)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="mono text-[0.6rem] uppercase tracking-wide text-zinc-300">Salta, Argentina</span>
        </div>
      </motion.div>

      {/* Action & CV Buttons */}
      <motion.div 
        variants={itemVariants}
        className="mt-8 flex flex-wrap gap-6 items-center"
      >
        <Link href="#projects" className="btn-modern btn-primary-modern">
          {t.hero.initWork}
        </Link>
        <div className="flex flex-col items-center gap-1.5">
          <a 
            href={t.hero.cvPath} 
            download="cv mateo coca.pdf" 
            className="btn-modern"
          >
            {t.hero.getResume}
          </a>
          <a 
            href={t.hero.cvHtmlPath} 
            target="_blank" 
            className="mono text-[0.6rem] opacity-50 hover:opacity-100 transition-opacity"
            style={{ textDecoration: 'none' }}
          >
            [VERSION_WEB]
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
