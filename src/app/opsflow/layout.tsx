'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function OpsFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const navItems = [
    { href: '/opsflow', label: 'Dashboard', code: '01' },
    { href: '/opsflow/new', label: isEn ? 'New Request' : 'Nueva Solicitud', code: '02' },
    { href: '/opsflow/approvals', label: isEn ? 'Approvals' : 'Aprobaciones', code: '03' },
  ];

  return (
    <div className="ops-shell">
        <aside className="ops-sidebar">
          <div>
            <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '0.4rem' }}>
              FROAKY_INTERNAL
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              OpsFlow
            </div>
          </div>

          <div className="ops-sim-badge mono">
            <span className="ops-sim-dot" />
            {isEn ? 'SIMULATION_MODE // DEMO_DATA' : 'MODO_SIMULACIÓN // DATOS_DEMO'}
          </div>

          <nav className="ops-nav">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`ops-nav-link ${pathname === item.href ? 'ops-nav-link-active' : ''}`}
              >
                <span className="mono" style={{ fontSize: '0.55rem', color: 'var(--accent)' }}>{item.code}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ops-sidebar-footer">
            <Link href="/#projects" className="ops-nav-link" style={{ fontSize: '0.8rem' }}>
              ← {isEn ? 'Back to Portfolio' : 'Volver al Portfolio'}
            </Link>
          </div>
        </aside>

      <main className="ops-main">
        {children}
      </main>
    </div>
  );
}
