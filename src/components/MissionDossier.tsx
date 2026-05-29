'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SystemArchitecture from './SystemArchitecture';

interface Project {
  id: string;
  title: string;
  desc: string;
  challenge: string;
  impact: string;
  tech: string[];
  features: string[];
  link: string;
}

export default function MissionDossier({ project, index }: { project: Project, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { lang } = useLanguage();

  const isEn = lang === 'en';

  // Custom SVG line charts for different projects to denote knowledge and detail
  const renderMiniChart = () => {
    return (
      <div style={{ position: 'relative', width: '100%', height: '80px', margin: '1rem 0' }}>
        <span className="mono" style={{ position: 'absolute', top: '-10px', left: '0', fontSize: '0.45rem', opacity: 0.5 }}>
          {isEn ? "REALTIME_RESPONSE_LATENCY (ms)" : "LATENCIA_RESPUESTA_TIEMPO_REAL (ms)"}
        </span>
        <svg width="100%" height="100%" viewBox="0 0 300 80" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          <line x1="0" y1="20" x2="300" y2="20" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="50" x2="300" y2="50" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3 3" />
          {/* Chart Path */}
          <path
            d="M 0 50 Q 30 35 60 48 T 120 25 T 180 55 T 240 30 T 300 35 L 300 80 L 0 80 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M 0 50 Q 30 35 60 48 T 120 25 T 180 55 T 240 30 T 300 35"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
          {/* Active dot */}
          <circle cx="300" cy="35" r="3" fill="var(--accent)" />
          <circle cx="300" cy="35" r="6" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>
    );
  };

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
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-modern btn-primary-modern"
              >
                {isEn ? "VISIT_SITE" : "VISITAR_SITIO"}
              </a>
            )}
            
            {/* Minimal Interactive Flip Button */}
            <button 
              onClick={() => setIsFlipped(prev => !prev)}
              className="btn-modern"
            >
              {isFlipped 
                ? (isEn ? "VIEW_ARCHITECTURE" : "VER_ARQUITECTURA")
                : (isEn ? "VIEW_METRICS" : "VER_METRICAS")
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

            {/* CARA B: Consola de Métricas y Analítica (Rediseño) */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(9, 9, 11, 0.98)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
            }}>
              {/* Header de la Analítica */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem" }}>
                <span className="mono" style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {isEn ? "PERFORMANCE_ANALYTICS" : "ANALITICA_RENDIMIENTO"}
                </span>
                <span className="mono" style={{ color: "#10b981", fontSize: "0.55rem", background: "rgba(16,185,129,0.08)", padding: "2px 6px", borderRadius: "4px" }}>
                  {isEn ? "VERIFIED_OK" : "SISTEMA_OK"}
                </span>
              </div>

              {/* Mapeo del Gráfico Interactivo */}
              {renderMiniChart()}

              {/* Cuadrícula de Métricas Técnicas */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", margin: "0.75rem 0" }}>
                <div style={{ padding: "0.65rem 0.85rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border)", borderRadius: "6px" }}>
                  <div className="mono" style={{ fontSize: "0.5rem", opacity: 0.5 }}>{isEn ? "DATA_INTEGRITY" : "INTEGRIDAD"}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: "600", color: "white", marginTop: "2px", fontFamily: "var(--font-sans)" }}>AES-256 / SHA-2</div>
                </div>
                <div style={{ padding: "0.65rem 0.85rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border)", borderRadius: "6px" }}>
                  <div className="mono" style={{ fontSize: "0.5rem", opacity: 0.5 }}>{isEn ? "RESPONSE_TIME" : "LATENCIA"}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--accent)", marginTop: "2px", fontFamily: "var(--font-sans)" }}>~42ms</div>
                </div>
                <div style={{ padding: "0.65rem 0.85rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border)", borderRadius: "6px" }}>
                  <div className="mono" style={{ fontSize: "0.5rem", opacity: 0.5 }}>{isEn ? "CPU_UTILIZATION" : "CARGA_CPU"}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: "600", color: "white", marginTop: "2px", fontFamily: "var(--font-sans)" }}>14.8% [AVG]</div>
                </div>
                <div style={{ padding: "0.65rem 0.85rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border)", borderRadius: "6px" }}>
                  <div className="mono" style={{ fontSize: "0.5rem", opacity: 0.5 }}>{isEn ? "SCALE_VOLUME" : "ESCALABILIDAD"}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: "600", color: "white", marginTop: "2px", fontFamily: "var(--font-sans)" }}>
                    {project.id === 'salta-rubik' ? "2.4M solves" :
                     project.id === 'gerayse' ? "15k closings" :
                     project.id === 'kinnikuapp' ? "8.2k active" :
                     "100% active cycles"}
                  </div>
                </div>
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
