'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';

interface TechCubeProps {
  name: string;
  category: string;
  isEn: boolean;
}

type TechLogo = {
  src: string;
  label: string;
};

type TechMeta = {
  accent: string;
  initials: string;
  logos: TechLogo[];
  sub: string;
};

type TechCardStyle = CSSProperties & {
  '--tech-accent': string;
};

const simpleIcon = (slug: string, color = 'FFFFFF') =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const TECH_META: Record<string, TechMeta> = {
  Django: {
    accent: '#44b78b',
    initials: 'DJ',
    logos: [{ src: simpleIcon('django', '44B78B'), label: 'Django logo' }],
    sub: 'Python Web',
  },
  FastAPI: {
    accent: '#009688',
    initials: 'FA',
    logos: [{ src: simpleIcon('fastapi', '009688'), label: 'FastAPI logo' }],
    sub: 'High Perf API',
  },
  Fastify: {
    accent: '#f8f8f2',
    initials: 'FY',
    logos: [{ src: simpleIcon('fastify'), label: 'Fastify logo' }],
    sub: 'Node API',
  },
  PostgreSQL: {
    accent: '#4169e1',
    initials: 'PG',
    logos: [{ src: simpleIcon('postgresql', '4169E1'), label: 'PostgreSQL logo' }],
    sub: 'Relational DB',
  },
  SQLModel: {
    accent: '#22c55e',
    initials: 'SQL',
    logos: [],
    sub: 'ORM / Types',
  },
  Prisma: {
    accent: '#b5c7ff',
    initials: 'PR',
    logos: [{ src: simpleIcon('prisma'), label: 'Prisma logo' }],
    sub: 'ORM Client',
  },
  Flutter: {
    accent: '#02569b',
    initials: 'FL',
    logos: [{ src: simpleIcon('flutter', '02569B'), label: 'Flutter logo' }],
    sub: 'Cross Platform',
  },
  'Next.js': {
    accent: '#ffffff',
    initials: 'NX',
    logos: [{ src: simpleIcon('nextdotjs'), label: 'Next.js logo' }],
    sub: 'Server SSR',
  },
  React: {
    accent: '#61dafb',
    initials: 'RC',
    logos: [{ src: simpleIcon('react', '61DAFB'), label: 'React logo' }],
    sub: 'UI Library',
  },
  HTMX: {
    accent: '#3366cc',
    initials: 'HX',
    logos: [{ src: simpleIcon('htmx', '3366CC'), label: 'HTMX logo' }],
    sub: 'HTML Dynamic',
  },
  TailwindCSS: {
    accent: '#06b6d4',
    initials: 'TW',
    logos: [{ src: simpleIcon('tailwindcss', '06B6D4'), label: 'Tailwind CSS logo' }],
    sub: 'CSS Utility',
  },
  'Framer Motion': {
    accent: '#7c3aed',
    initials: 'FM',
    logos: [{ src: simpleIcon('framer', '7C3AED'), label: 'Framer logo' }],
    sub: 'Animations',
  },
  'Git/GitHub': {
    accent: '#f05032',
    initials: 'GIT',
    logos: [
      { src: simpleIcon('git', 'F05032'), label: 'Git logo' },
      { src: simpleIcon('github'), label: 'GitHub logo' },
    ],
    sub: 'Version Control',
  },
  Docker: {
    accent: '#2496ed',
    initials: 'DK',
    logos: [{ src: simpleIcon('docker', '2496ED'), label: 'Docker logo' }],
    sub: 'Containers',
  },
  'Railway/Vercel': {
    accent: '#ffffff',
    initials: 'RV',
    logos: [
      { src: simpleIcon('railway'), label: 'Railway logo' },
      { src: simpleIcon('vercel'), label: 'Vercel logo' },
    ],
    sub: 'PaaS Deploy',
  },
  'Excel Automation': {
    accent: '#217346',
    initials: 'XLS',
    logos: [],
    sub: 'Python scripts',
  },
  'API Auditing': {
    accent: '#85ea2d',
    initials: 'API',
    logos: [{ src: simpleIcon('openapiinitiative', '85EA2D'), label: 'OpenAPI logo' }],
    sub: 'Sec & Perf',
  },
  Python: {
    accent: '#3776ab',
    initials: 'PY',
    logos: [{ src: simpleIcon('python', '3776AB'), label: 'Python logo' }],
    sub: 'Core Language',
  },
  Odoo: {
    accent: '#714b67',
    initials: 'OD',
    logos: [{ src: simpleIcon('odoo', '9C6B8E'), label: 'Odoo logo' }],
    sub: 'ERP Platform',
  },
  'REST APIs': {
    accent: '#85ea2d',
    initials: 'REST',
    logos: [],
    sub: 'Integrations',
  },
};

const fallbackMeta: TechMeta = {
  accent: '#6366f1',
  initials: 'TS',
  logos: [],
  sub: 'Tech Stack',
};

export default function TechCube({ name, category, isEn }: TechCubeProps) {
  const meta = TECH_META[name] ?? fallbackMeta;
  const style: TechCardStyle = { '--tech-accent': meta.accent };

  return (
    <article
      className="tech-card"
      style={style}
      tabIndex={0}
      aria-label={`${name}: ${meta.sub}`}
    >
      <span className="tech-card-sheen" aria-hidden="true" />

      <div className={`tech-logo ${meta.logos.length > 1 ? 'tech-logo-multi' : ''}`}>
        {meta.logos.length > 0 ? (
          meta.logos.map((logo) => (
            <Image
              key={logo.label}
              className="tech-logo-img"
              src={logo.src}
              alt={logo.label}
              width={28}
              height={28}
              loading="lazy"
              unoptimized
            />
          ))
        ) : (
          <span className="tech-logo-initials">{meta.initials}</span>
        )}
      </div>

      <div className="tech-card-status mono">{isEn ? 'ACTIVE' : 'ACTIVO'}</div>
      <h3 className="tech-card-name">{name}</h3>
      <div className="tech-card-category mono">{category}</div>
      <p className="tech-card-sub">{meta.sub}</p>
    </article>
  );
}
