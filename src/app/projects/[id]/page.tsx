'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { translations } from '@/lib/translations';
import SystemArchitecture from '@/components/SystemArchitecture';
import { useLanguage } from '@/context/LanguageContext';
import TechCube from '@/components/TechCube';

export default function ProjectDetail() {
  const params = useParams();
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const project = t.projects.items.find(p => p.id === params.id);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem' }}>404</h1>
        <p className="mono" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Project not found</p>
        <Link href="/" className="btn-modern">← Back</Link>
      </div>
    </div>
  );

  const isEn = lang === 'en';

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Minimal breadcrumb */}
        <Link 
          href="/" 
          style={{ 
            color: 'var(--text-muted)', 
            textDecoration: 'none', 
            fontSize: '0.85rem', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '3rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <span>←</span> {isEn ? 'Back' : 'Volver'}
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-tag" style={{ marginBottom: '1.5rem' }}>
            {project.id.toUpperCase().replace('-', '_')}
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            {project.title}
          </h1>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.tech.map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>
        </div>

        <div className="grid-modern" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Main Content */}
          <div>
            {/* Technical Summary */}
            <div style={{ 
              padding: '2rem', 
              background: 'rgba(255,255,255,0.015)', 
              border: '1px solid var(--border)', 
              borderRadius: '12px', 
              marginBottom: '3rem' 
            }}>
              <div className="mono" style={{ 
                fontSize: '0.65rem', 
                color: 'var(--accent)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em',
                marginBottom: '1.25rem' 
              }}>
                {isEn ? 'TECHNICAL SUMMARY' : 'RESUMEN TÉCNICO'}
              </div>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8' }}>
                {project.fullDesc}
              </p>
            </div>

            {/* Key Capabilities */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div className="mono" style={{ 
                fontSize: '0.65rem', 
                color: 'var(--accent)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em',
                marginBottom: '1.5rem' 
              }}>
                {isEn ? 'KEY CAPABILITIES' : 'CAPACIDADES CLAVE'}
              </div>
              <div className="grid-modern" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {project.features.map((feat, i) => (
                  <div key={i} style={{ 
                    padding: '1.25rem', 
                    borderLeft: '2px solid var(--border)', 
                    background: 'rgba(255,255,255,0.01)',
                    borderRadius: '0 6px 6px 0',
                    transition: 'border-color 0.2s',
                  }}>
                    <div style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--foreground)' }}>{feat}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Tech Stack (3D cubes) */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div className="mono" style={{ 
                fontSize: '0.65rem', 
                color: 'var(--accent)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em',
                marginBottom: '1.5rem' 
              }}>
                {isEn ? 'ENGINE_SPECIFICATIONS' : 'ESPECIFICACIONES_DEL_MOTOR'}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((techName) => (
                  <TechCube 
                    key={techName}
                    name={techName}
                    category={isEn ? 'ENGINE SPEC' : 'SPEC MOTOR'}
                    isEn={isEn}
                  />
                ))}
              </div>
            </div>

            {/* Engineering Decisions */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div className="mono" style={{
                fontSize: '0.65rem',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem'
              }}>
                {t.labels.decisions}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {project.decisions.map((d, i) => (
                  <div key={i} style={{
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(255,255,255,0.01)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.4rem' }}>
                      <span className="mono" style={{ fontSize: '0.55rem', color: 'var(--text-muted)', flexShrink: 0 }}>{t.labels.problem} ▸</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{d.problem}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                      <span className="mono" style={{ fontSize: '0.55rem', color: 'var(--accent)', flexShrink: 0 }}>{t.labels.decision} ▸</span>
                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>{d.decision}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Impact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              <div style={{ paddingLeft: '1.25rem', borderLeft: '1.5px solid var(--accent)' }}>
                <div className="mono" style={{ fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {isEn ? 'CHALLENGE' : 'DESAFÍO'}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--foreground)', opacity: 0.85 }}>{project.challenge}</div>
              </div>
              <div style={{ paddingLeft: '1.25rem', borderLeft: '1.5px solid var(--border)' }}>
                <div className="mono" style={{ fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {isEn ? 'IMPACT' : 'IMPACTO'}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{project.impact}</div>
              </div>
            </div>

            {/* CTA */}
            {project.link !== '#' && (
              project.link.startsWith('/') ? (
                <Link
                  href={project.link}
                  className="btn-modern btn-primary-modern"
                  style={{ display: 'inline-flex', fontSize: '0.85rem' }}
                >
                  {isEn ? 'Open Interactive Demo →' : 'Abrir Demo Interactivo →'}
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern btn-primary-modern"
                  style={{ display: 'inline-flex', fontSize: '0.85rem' }}
                >
                  {isEn ? 'Visit Live Site →' : 'Visitar Sitio →'}
                </a>
              )
            )}
          </div>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '6rem' }}>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              {isEn ? 'ARCHITECTURE' : 'ARQUITECTURA'}
            </div>
            <SystemArchitecture id={project.id} />
            
            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1.25rem', 
              border: '1px solid var(--border)', 
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.01)'
            }}>
              <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {isEn ? 'PROJECT FILE' : 'FICHA DEL PROYECTO'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Status</span>
                  <span className="mono" style={{ fontSize: '0.7rem', color: '#10b981' }}>
                    {project.link.startsWith('http')
                      ? (isEn ? 'In production' : 'En producción')
                      : project.link.startsWith('/')
                        ? (isEn ? 'Interactive demo' : 'Demo interactivo')
                        : (isEn ? 'Internal system' : 'Sistema interno')}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Core stack</span>
                  <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--foreground)' }}>{project.tech.slice(0, 2).join(' + ')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{isEn ? 'Decisions' : 'Decisiones'}</span>
                  <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--foreground)' }}>{project.decisions.length} {isEn ? 'documented' : 'documentadas'}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
