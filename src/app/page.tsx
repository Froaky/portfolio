'use client';

import Link from "next/link";
import InteractiveProfile from "@/components/InteractiveProfile";
import SystemArchitecture from "@/components/SystemArchitecture";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <div className="hero-bg" />
      
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
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "3rem", alignItems: "flex-start" }}>
                <Link href="#projects" className="btn-modern btn-primary-modern">
                  {t.hero.initWork}
                </Link>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
                  <a href={t.hero.cvPath} download className="btn-modern">
                    {t.hero.getResume}
                  </a>
                  <a href={t.hero.cvHtmlPath} target="_blank" className="mono" style={{ fontSize: "0.6rem", opacity: 0.5 }}>
                    [VERSION_WEB]
                  </a>
                </div>
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

        <section className="section" style={{ borderTop: "1px solid var(--border)", background: "rgba(0, 243, 255, 0.02)" }}>
          <div className="container">
            <div className="grid-modern" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "4rem" }}>
              <div>
                <div className="section-tag">{t.capabilities.methodologies.tag}</div>
                <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>{t.capabilities.methodologies.title}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {t.capabilities.methodologies.items.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ width: "8px", height: "8px", background: "var(--primary)", borderRadius: "2px" }} />
                      <span className="mono" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <SystemArchitecture />
            </div>
          </div>
        </section>

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
                  <div className="hud-line" style={{ width: "40%", opacity: 0.3 }} />
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
                <Link 
                  href={`/projects/${item.id}`} 
                  key={i} 
                  className="glass-card hover-glow" 
                  style={{ 
                    display: "flex", 
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.3s ease",
                    borderLeft: i === 0 ? "4px solid var(--primary)" : "1px solid var(--border)"
                  }}
                >
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                    {item.tech.map(b => <span key={b} className="badge">{b}</span>)}
                  </div>
                  <h3 className="mono" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>{item.desc}</p>
                  
                  <div style={{ padding: "1rem", background: "rgba(0, 243, 255, 0.05)", borderLeft: "2px solid var(--primary)", marginBottom: "1.5rem", borderRadius: "0 0.5rem 0.5rem 0" }}>
                    <div className="mono" style={{ fontSize: "0.6rem", color: "var(--primary)", marginBottom: "0.4rem", opacity: 0.8 }}>
                      {t.labels.challenge}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", marginBottom: "0.8rem" }}>
                      {item.challenge}
                    </div>
                    <div className="mono" style={{ fontSize: "0.6rem", color: "var(--accent)", marginBottom: "0.4rem", opacity: 0.8 }}>
                      {t.labels.impact}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--foreground)", fontWeight: 500 }}>
                      {item.impact}
                    </div>
                  </div>

                  <div className="btn-modern" style={{ marginTop: "auto", width: "100%", textAlign: "center" }}>
                    {lang === 'en' ? "VIEW_TECHNICAL_DEEP_DIVE" : "VER_DETALLE_TECNICO"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section" style={{ borderTop: "1px solid var(--border)", background: "rgba(0, 0, 0, 0.2)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
              {t.stats.map((stat, i) => (
                <div key={i} style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "1.5rem" }}>
                  <div className="mono" style={{ fontSize: "0.6rem", color: "var(--primary)", marginBottom: "0.5rem" }}>{stat.label}</div>
                  <div style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{stat.value}</div>
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
              &copy; {new Date().getFullYear()} FROAKY_SYSTEMS_ANALYST_DEVEL // VER_2.2.0
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
