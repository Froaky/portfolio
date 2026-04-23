'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  return (
    <nav className="navbar-modern">
      <Link href="/" style={{ color: "white", fontWeight: 900, fontSize: "1.25rem", letterSpacing: "0.2em", fontFamily: "var(--font-mono)", textDecoration: "none" }}>
        FROAKY
      </Link>
      
      <div className="nav-links-industrial">
        <Link href="/#projects" className="nav-link-industrial">{t.nav.projects}</Link>
        <Link href="/#capabilities" className="nav-link-industrial">{t.nav.services}</Link>
        <Link href="/#contact" className="nav-link-industrial">{t.nav.contact}</Link>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button 
          onClick={toggleLang} 
          className="btn-modern" 
          style={{ padding: "0.3rem 0.6rem", fontSize: "0.6rem", minWidth: "40px" }}
        >
          {lang.toUpperCase()}
        </button>
        <span className="mono" style={{ color: "var(--primary)", fontSize: "0.6rem" }}>STATUS: ONLINE</span>
        <a href="https://github.com/mateococa" target="_blank" className="btn-modern" style={{ padding: "0.4rem 1rem", fontSize: "0.7rem", textDecoration: "none" }}>
          {t.nav.src}
        </a>
      </div>
    </nav>
  );
}
