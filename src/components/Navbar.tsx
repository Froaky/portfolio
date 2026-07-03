'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const SECTION_IDS = ['capabilities', 'projects', 'contact'];

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const sections = SECTION_IDS
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  // Fuera del home no hay secciones observables: el subrayado activo se apaga.
  const shownSection = pathname === '/' ? activeSection : '';

  const linkClass = (id: string) =>
    `nav-link-industrial ${shownSection === id ? 'nav-link-industrial-active' : ''}`;

  return (
    <nav className="navbar-modern">
      <Link href="/" style={{ color: "white", fontWeight: 900, fontSize: "1.25rem", letterSpacing: "0.2em", fontFamily: "var(--font-mono)", textDecoration: "none" }}>
        FROAKY
      </Link>

      <div className="nav-links-industrial">
        <Link href="/#projects" className={linkClass('projects')}>{t.nav.projects}</Link>
        <Link href="/#capabilities" className={linkClass('capabilities')}>{t.nav.services}</Link>
        <Link href="/#contact" className={linkClass('contact')}>{t.nav.contact}</Link>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button
          onClick={toggleLang}
          className="btn-modern"
          style={{ padding: "0.3rem 0.6rem", fontSize: "0.6rem", minWidth: "40px" }}
        >
          {lang.toUpperCase()}
        </button>
        <a href="https://github.com/mateococa" target="_blank" className="btn-modern nav-github-link" style={{ padding: "0.4rem 1rem", fontSize: "0.7rem", textDecoration: "none" }}>
          {t.nav.src}
        </a>
        <button
          className="nav-menu-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`nav-menu-icon ${menuOpen ? 'nav-menu-icon-open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className={`nav-mobile-panel ${menuOpen ? 'nav-mobile-panel-open' : ''}`}>
        <Link href="/#projects" className="nav-mobile-link" onClick={closeMenu}>
          <span className="mono nav-mobile-index">01</span> {t.nav.projects}
        </Link>
        <Link href="/#capabilities" className="nav-mobile-link" onClick={closeMenu}>
          <span className="mono nav-mobile-index">02</span> {t.nav.services}
        </Link>
        <Link href="/#contact" className="nav-mobile-link" onClick={closeMenu}>
          <span className="mono nav-mobile-index">03</span> {t.nav.contact}
        </Link>
        <a href="https://github.com/mateococa" target="_blank" className="nav-mobile-link" onClick={closeMenu}>
          <span className="mono nav-mobile-index">04</span> {t.nav.src}
        </a>
      </div>
    </nav>
  );
}
