'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { translations } from '@/lib/translations';
import SystemArchitecture from '@/components/SystemArchitecture';

export default function ProjectDetail() {
  const params = useParams();
  const [lang] = useState<'en' | 'es'>('en');
  const t = translations[lang];
  
  const project = t.projects.items.find(p => p.id === params.id);

  if (!project) return <div className="p-20 mono">PROJECT_NOT_FOUND_404</div>;

  return (
    <div className="min-h-screen bg-[var(--background)] py-20">
      <div className="container">
        <Link href="/" className="mono" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '1.2rem' }}>←</span> {t.nav.back}
        </Link>

        <div className="grid-modern" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div className="mono" style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.7rem' }}>
              {"// ARCHIVE.PROJECT."}{project.id.toUpperCase()}
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', textTransform: 'uppercase' }}>
              {project.title}
            </h1>
            
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {project.tech.map(tag => (
                <span key={tag} className="badge" style={{ padding: '0.5rem 1rem' }}>{tag}</span>
              ))}
            </div>

            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '1rem', marginBottom: '3rem' }}>
              <h3 className="mono" style={{ color: 'var(--primary)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>TECHNICAL_SUMMARY</h3>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
                {project.fullDesc}
              </p>
            </div>

            <div style={{ marginBottom: '4rem' }}>
              <h3 className="mono" style={{ color: 'var(--primary)', fontSize: '0.8rem', marginBottom: '2rem' }}>KEY_CAPABILITIES</h3>
              <div className="grid-modern" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {project.features.map((feat, i) => (
                  <div key={i} style={{ padding: '1.5rem', borderLeft: '2px solid var(--accent)', background: 'rgba(14, 165, 233, 0.03)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{feat}</div>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-modern btn-primary-modern"
              style={{ width: '100%', textAlign: 'center', display: 'block', fontSize: '1.1rem' }}
            >
              {lang === 'en' ? 'EXECUTE_LIVE_DEPLOYMENT' : 'EJECUTAR_DESPLIEGUE_VIVO'}
            </a>
          </div>

          <aside style={{ position: 'sticky', top: '2rem' }}>
            <div className="section-tag" style={{ marginBottom: '1.5rem' }}>ARCHITECTURE_HUD</div>
            <SystemArchitecture id={project.id} />
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
              <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--primary)', marginBottom: '1rem' }}>PROJECT_METRICS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: '0.7rem', opacity: 0.5 }}>STATUS</span>
                  <span className="mono" style={{ fontSize: '0.7rem', color: '#10b981' }}>OPERATIONAL</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: '0.7rem', opacity: 0.5 }}>SECURITY</span>
                  <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>ENCRYPTED</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: '0.7rem', opacity: 0.5 }}>UPTIME</span>
                  <span className="mono" style={{ fontSize: '0.7rem' }}>99.98%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
