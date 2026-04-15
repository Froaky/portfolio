'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InteractiveProfile from "@/components/InteractiveProfile";
import { translations } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const t = translations[lang];

  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');

  return (
    <>
      <div className="hero-bg" />
      
      <nav className="navbar-modern">
        <Link href="/" style={{ color: "white", fontWeight: 900, fontSize: "1.25rem", letterSpacing: "0.2em", fontFamily: "var(--font-mono)" }}>
          FROAKY
        </Link>
        
        <div className="nav-links-industrial">
          <Link href="#projects" className="nav-link-industrial">{t.nav.projects}</Link>
          <Link href="#capabilities" className="nav-link-industrial">{t.nav.services}</Link>
          <Link href="#contact" className="nav-link-industrial">{t.nav.contact}</Link>
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
          <a href="https://github.com/mateococa" target="_blank" className="btn-modern" style={{ padding: "0.4rem 1rem", fontSize: "0.7rem" }}>
            {t.nav.src}
          </a>
        </div>
      </nav>

      <main>
        <header className="hero-modern">
          <div className="container hero-content">
            <div style={{ position: "relative" }}>
              <div className="mono" style={{ color: "var(--primary)", marginBottom: "1rem", opacity: 0.8 }}>
                {t.hero.tag}
              </div>
              <h1>
                {t.hero.title} <br />
                <span className="text-gradient">{t.hero.titleAccent}</span>
              </h1>
              <p style={{ fontSize: "1.1rem", maxWidth: "480px", marginTop: "1.5rem", color: "rgba(255,255,255,0.6)", borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                {t.hero.desc}
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
                <Link href="#projects" className="btn-modern btn-primary-modern">
                  {t.hero.initWork}
                </Link>
                <a href="/cv.pdf" className="btn-modern">
                  {t.hero.getResume}
                </a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="mono" style={{ position: "absolute", top: "-20px", right: "0", opacity: 0.3, fontSize: "0.6rem" }}>
                IMG_SCAN_001.JPG [ACTIVE]
              </div>
              <InteractiveProfile src="/mateo.jpg" />
            </div>
          </div>
        </header>

        <section className="section" id="capabilities">
          <div className="container">
            <div className="section-tag">{t.capabilities.tag}</div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", textTransform: "uppercase" }}>
              {t.capabilities.title} <span className="text-gradient">{t.capabilities.titleAccent}</span>
            </h2>
            <div className="grid-modern">
              {t.capabilities.items.map((item, i) => (
                <div key={i} className="glass-card">
                  <div className="mono" style={{ color: "var(--primary)", marginBottom: "1rem", fontSize: "0.6rem" }}>{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects" style={{ background: "rgba(255,255,255,0.01)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div className="section-tag">{t.projects.tag}</div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", textTransform: "uppercase" }}>{t.projects.title} <span className="text-gradient">{t.projects.titleAccent}</span></h2>
            
            <div className="grid-modern">
              {t.projects.items.map((item, i) => (
                <div key={i} className="glass-card" style={i === 0 ? { borderLeft: "4px solid var(--primary)" } : {}}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                    {item.badge.map(b => <span key={b} className="badge">{b}</span>)}
                  </div>
                  <h3 className="mono">{item.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                  <Link href={i === 0 ? "/opsflow" : (i === 1 ? "/projects/odoo-customization" : "/projects/resource-management")} className={i === 0 ? "btn-modern" : "mono"} style={i === 0 ? { marginTop: "1.5rem", width: "100%", textAlign: "center", display: "block" } : { color: "var(--primary)", marginTop: "1.5rem", display: "block", fontSize: "0.75rem" }}>
                    {item.btn}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" style={{ padding: "8rem 0 4rem", borderTop: "1px solid var(--border)", position: "relative" }}>
        <div className="container">
          <div style={{ maxWidth: "600px" }}>
            <div className="section-tag">{t.contact.tag}</div>
            <h2 style={{ fontSize: "3rem", marginBottom: "2rem", textTransform: "uppercase" }}>{t.contact.title} <br /> <span className="text-gradient">{t.contact.titleAccent}</span></h2>
            <p style={{ marginBottom: "3rem", color: "rgba(255,255,255,0.6)" }}>{t.contact.desc}</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="mailto:mateococa.job@gmail.com" className="btn-modern btn-primary-modern">{t.contact.email}</a>
              <a href="https://www.linkedin.com/in/tecnicosuperiormateoncoca" target="_blank" className="btn-modern">LINKEDIN</a>
              <a href="https://github.com/mateococa" target="_blank" className="btn-modern">GITHUB</a>
            </div>
            <div className="mono" style={{ marginTop: "4rem", opacity: 0.3, fontSize: "0.7rem" }}>
              &copy; {new Date().getFullYear()} FROAKY_SYSTEMS_ANALYST_DEVEL // VER_2.1.0
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
