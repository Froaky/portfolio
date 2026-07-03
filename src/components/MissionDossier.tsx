'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import SystemArchitecture from './SystemArchitecture';

interface Decision {
  problem: string;
  decision: string;
}

interface Project {
  id: string;
  title: string;
  desc: string;
  challenge: string;
  impact: string;
  tech: string[];
  features: string[];
  link: string;
  decisions: Decision[];
}

export default function MissionDossier({ project, index }: { project: Project, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  const isEn = lang === 'en';
  const isInternalLink = project.link.startsWith('/');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative mb-24 last:mb-0"
    >
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr",
        gap: "3.5rem",
        alignItems: "center"
      }} className="lg-grid-2-cols">
        
        {/* Project Info */}
        <div>
          <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "1.25rem", letterSpacing: "-0.03em" }}>
            {project.title}
          </h3>
          
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2rem" }}>
            {project.desc}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.25rem" }}>
            <div style={{ paddingLeft: "1.25rem", borderLeft: "1.5px solid var(--accent)" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--foreground)", opacity: 0.85 }}>{project.challenge}</div>
            </div>
            <div style={{ paddingLeft: "1.25rem", borderLeft: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "500" }}>{project.impact}</div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.25rem" }}>
            {project.tech.map(t => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {project.link !== '#' && (
              isInternalLink ? (
                <Link href={project.link} className="btn-modern btn-primary-modern">
                  {isEn ? "VIEW_DEMO" : "VER_DEMO"}
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern btn-primary-modern"
                >
                  {isEn ? "VISIT_SITE" : "VISITAR_SITIO"}
                </a>
              )
            )}

            {/* Minimal Interactive Flip Button */}
            <button
              onClick={() => setIsFlipped(prev => !prev)}
              className="btn-modern"
            >
              {isFlipped
                ? (isEn ? "VIEW_ARCHITECTURE" : "VER_ARQUITECTURA")
                : (isEn ? "VIEW_DECISIONS" : "VER_DECISIONES")
              }
            </button>

            <a 
              href={`/projects/${project.id}`} 
              className="btn-modern"
            >
              {isEn ? "TECHNICAL_SPECS" : "ESPECIFICACIONES"}
            </a>
          </div>
        </div>

        {/* Visual / Diagram Area with 3D Flip */}
        <div style={{ position: "relative", perspective: "1500px", minHeight: "380px", width: "100%" }}>
          <div style={{
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "380px",
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}>
            
            {/* CARA A: Diagrama de Arquitectura (Original) */}
            <div style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              background: "rgba(255,255,255,0.005)", 
              border: "1px solid var(--border)", 
              borderRadius: "12px", 
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.01) 0%, transparent 70%)" 
              }} />
              <div style={{ width: "100%", height: "100%", padding: "1.25rem" }}>
                <SystemArchitecture id={project.id} />
              </div>
            </div>

            {/* CARA B: Decisiones de ingeniería reales del proyecto */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(9, 9, 11, 0.98)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem", marginBottom: "1.1rem" }}>
                <span className="mono" style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {t.labels.decisions}
                </span>
                <span className="mono" style={{ color: "#10b981", fontSize: "0.55rem", background: "rgba(16,185,129,0.08)", padding: "2px 6px", borderRadius: "4px" }}>
                  {project.id.toUpperCase().replace(/-/g, '_')}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: 1, justifyContent: "center" }}>
                {project.decisions.map((d, i) => (
                  <div key={i} style={{ paddingLeft: "1rem", borderLeft: "1.5px solid var(--accent)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.2rem" }}>
                      <span className="mono" style={{ fontSize: "0.5rem", color: "var(--text-muted)", flexShrink: 0 }}>{t.labels.problem} ▸</span>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.45 }}>{d.problem}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                      <span className="mono" style={{ fontSize: "0.5rem", color: "var(--accent)", flexShrink: 0 }}>{t.labels.decision} ▸</span>
                      <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.45 }}>{d.decision}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .lg-grid-2-cols {
            grid-template-columns: 5fr 7fr !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
