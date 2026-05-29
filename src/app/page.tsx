'use client';

import InteractiveProfile from "@/components/InteractiveProfile";
import SystemArchitecture from "@/components/SystemArchitecture";
import TerminalHero from "@/components/TerminalHero";
import MissionDossier from "@/components/MissionDossier";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "@/components/TiltCard";
import TechCube from "@/components/TechCube";


export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <div className="hero-bg" />
      
      <main>
        <header className="hero-modern">
          <div className="container hero-content">
            <TerminalHero 
              title={t.hero.title}
              subtitle={t.hero.titleAccent}
              desc={t.hero.desc}
            />
            <div style={{ position: "relative" }}>
              <InteractiveProfile src="/mateo.jpg" />
            </div>
          </div>
        </header>

        <section className="section" style={{ borderTop: "1px solid var(--border)", background: "rgba(255, 255, 255, 0.01)" }}>
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
                <TiltCard key={i} className="glass-card" maxTilt={8}>
                  <div className="mono" style={{ color: "var(--primary)", marginBottom: "1rem", fontSize: "0.6rem", transform: "translateZ(20px)" }}>{item.tag}</div>
                  <h3 style={{ transform: "translateZ(30px)" }}>{item.title}</h3>
                  <div className="hud-line" style={{ width: "40%", opacity: 0.3, transform: "translateZ(15px)" }} />
                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", transform: "translateZ(25px)" }}>{item.desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section tech-stack-section" id="specs">
          <div className="container">
            <div className="tech-stack-heading">
              <div className="section-tag">{t.skills.tag}</div>
              <h2 className="tech-stack-title">
                {t.skills.title} <span className="text-gradient">{t.skills.titleAccent}</span>
              </h2>
            </div>

            <div className="tech-stack-categories">
              {t.skills.categories.map((cat, i) => (
                <section className="tech-category" key={i}>
                  <h3 className="tech-category-title mono">
                    {"// "}{cat.name}
                  </h3>
                  <div className="tech-grid">
                    {cat.items.map((skillName) => (
                      <TechCube 
                        key={skillName}
                        name={skillName}
                        category={cat.name.replace('_', ' ')}
                        isEn={lang === 'en'}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects" style={{ background: "rgba(0,0,0,0.2)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div className="section-tag">{t.projects.tag}</div>
            <h2 style={{ fontSize: "3rem", marginBottom: "6rem", textTransform: "uppercase", fontWeight: 800 }}>
              Operational <span className="text-gradient">Portfolio.</span>
            </h2>
            
            <div>
              {t.projects.items.map((item, i) => (
                <MissionDossier key={item.id} project={item} index={i} />
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
