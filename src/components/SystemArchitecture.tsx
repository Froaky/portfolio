'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TierData {
  title: string;
  sub: string;
  details: string[];
}

interface Project3DSpecs {
  client: TierData;
  server: TierData;
  db: TierData;
}

const get3DSpecs = (id: string, lang: 'en' | 'es'): Project3DSpecs => {
  const isEn = lang === 'en';
  switch (id) {
    case 'salta-rubik':
      return {
        client: {
          title: isEn ? "CLIENT TIER" : "CAPA CLIENTE",
          sub: "Flutter Mobile / Web",
          details: isEn 
            ? ["WCA Scramble Engine", "Cross-device Solving Sync", "Solve Timer (ms precision)"]
            : ["Motor Scrambles WCA", "Sincro Multi-dispositivo", "Módulo Timer de Precisión"]
        },
        server: {
          title: isEn ? "APPLICATION TIER" : "CAPA DE APLICACIÓN",
          sub: "Fastify / Node.js API",
          details: isEn
            ? ["REST API Gateway [L3]", "WCA Database Sync Core", "JSON Web Token Security"]
            : ["API Gateway RESTful [L3]", "Motor Sincro Base de Datos", "Autenticación por JWT"]
        },
        db: {
          title: isEn ? "PERSISTENCE TIER" : "CAPA DE PERSISTENCIA",
          sub: "PostgreSQL Database",
          details: isEn
            ? ["Prisma ORM Layer", "Solve History Ledger", "Query latency < 5ms"]
            : ["Mapeo ORM con Prisma", "Libro Historial Solves", "Latencia query < 5ms"]
        }
      };
    case 'gerayse':
      return {
        client: {
          title: isEn ? "CLIENT TIER" : "CAPA CLIENTE",
          sub: "HTMX Operational UI",
          details: isEn
            ? ["Stateful HTMX Controls", "Realtime Ledger Render", "Multi-office Console"]
            : ["Controles de Estado HTMX", "Rendición Libro Contable", "Consola Multi-oficina"]
        },
        server: {
          title: isEn ? "APPLICATION TIER" : "CAPA DE APLICACIÓN",
          sub: "Django Web Framework",
          details: isEn
            ? ["Treasury Audit Modules", "Security Permission Guard", "Daily Automatic Closing"]
            : ["Módulos Auditoría Tesorería", "Guardia de Permisos Django", "Cierre Diario Automatizado"]
        },
        db: {
          title: isEn ? "PERSISTENCE TIER" : "CAPA DE PERSISTENCIA",
          sub: "PostgreSQL Database",
          details: isEn
            ? ["Relational Cashflow SQL", "Audit Signature Logs", "100% Spreadsheet Replaced"]
            : ["Tablas Caja Relacionales", "Log de Firmas de Auditoría", "100% Excel Reemplazado"]
        }
      };
    case 'kinnikuapp':
      return {
        client: {
          title: isEn ? "CLIENT TIER" : "CAPA CLIENTE",
          sub: "SaaS Front Portal",
          details: isEn
            ? ["QR Attendance Scanner", "White-label Custom Styles", "Gym Member Checkin"]
            : ["Scanner Asistencia QR", "Branding Customizado", "Check-in Socios Gimnasio"]
        },
        server: {
          title: isEn ? "APPLICATION TIER" : "CAPA DE APLICACIÓN",
          sub: "FastAPI Core Engine",
          details: isEn
            ? ["Multi-tenant SaaS Manager", "Subscription Billing Cron", "QR Validation Service"]
            : ["Gestor SaaS Multi-tenant", "Facturación Suscripción", "Servicio Validación QR"]
        },
        db: {
          title: isEn ? "PERSISTENCE TIER" : "CAPA DE PERSISTENCIA",
          sub: "SQLModel / PostgreSQL",
          details: isEn
            ? ["Isolated Tenant Schemas", "Relational Gym Database", "Automated DB Backups"]
            : ["Esquemas Aislados Tenant", "Base Datos Gimnasio SQL", "Copias Seguridad Auto"]
        }
      };
    case 'opsflow':
      return {
        client: {
          title: isEn ? "CLIENT TIER" : "CAPA CLIENTE",
          sub: "Next.js HUD Console",
          details: isEn
            ? ["State Machine Renderer", "Interactive Telemetry UX", "Real-time Node Status"]
            : ["Render Máquina Estados", "UX Telemetría Interactiva", "Estado Nodo en Vivo"]
        },
        server: {
          title: isEn ? "APPLICATION TIER" : "CAPA DE APLICACIÓN",
          sub: "Next.js Server Actions",
          details: isEn
            ? ["Approval Workflow Engine", "State Transition Validator", "Security Signature Verify"]
            : ["Motor Workflow Aprobación", "Validador Transiciones", "Firma Seguridad Verificada"]
        },
        db: {
          title: isEn ? "PERSISTENCE TIER" : "CAPA DE PERSISTENCIA",
          sub: "PostgreSQL Storage",
          details: isEn
            ? ["Workflow Ledgers", "Action Audit Logs", "Transactional Lock Manager"]
            : ["Libro de Workflows SQL", "Auditoría Logs Acción", "Manejador Bloqueos DB"]
        }
      };
    case 'odoo-integration-hub':
      return {
        client: {
          title: isEn ? "FIELD TIER" : "CAPA DE CAMPO",
          sub: isEn ? "Field Devices / Mobile" : "Dispositivos de Campo",
          details: isEn
            ? ["Restricted REST Consumers", "Real-time Status Sync", "Inventory Data Capture"]
            : ["Consumidores REST Restringidos", "Sincro de Estado en Vivo", "Captura de Inventario"]
        },
        server: {
          title: isEn ? "APPLICATION TIER" : "CAPA DE APLICACIÓN",
          sub: "Custom Odoo Modules",
          details: isEn
            ? ["Python Model Extensions", "Restricted REST API", "Webhook Task Routing"]
            : ["Extensiones Python de Modelos", "REST API Restringida", "Ruteo de Tareas por Webhook"]
        },
        db: {
          title: isEn ? "PERSISTENCE TIER" : "CAPA DE PERSISTENCIA",
          sub: "PostgreSQL (Odoo Core)",
          details: isEn
            ? ["High-frequency Write Indexes", "Single Source of Truth", "ERP Relational Models"]
            : ["Índices de Escritura Frecuente", "Fuente Única de Verdad", "Modelos Relacionales ERP"]
        }
      };
    default:
      return {
        client: {
          title: isEn ? "CLIENT TIER" : "CAPA CLIENTE",
          sub: "Developer Console / CLI",
          details: isEn
            ? ["Web CLI Interface", "Biometric Scan System", "Operational Controls"]
            : ["Interfaz Web CLI", "Sistema Escaneo Biométrico", "Controles Operacionales"]
        },
        server: {
          title: isEn ? "APPLICATION TIER" : "CAPA DE APLICACIÓN",
          sub: "Froaky Core Engine",
          details: isEn
            ? ["Microservices Router", "Secure Auth Middleware", "Performance Controller"]
            : ["Enrutador Microservicios", "Middleware Autenticación", "Controlador Rendimiento"]
        },
        db: {
          title: isEn ? "PERSISTENCE TIER" : "CAPA DE PERSISTENCIA",
          sub: "Database / Log Ledger",
          details: isEn
            ? ["Relational Engine Stores", "Encrypt Cryptographic Logs", "Static Asset DB Cache"]
            : ["Motores de Almacenamiento", "Encriptación Logs Cripto", "Caché de Activos Estáticos"]
        }
      };
  }
};

export default function SystemArchitecture({ id = 'default' }: { id?: string }) {
  const { lang } = useLanguage();
  const [viewMode, setViewMode] = useState<'2D' | '3D'>('2D');
  const [hovered, setHovered] = useState(false);

  const lineTransition = { duration: 1.5, ease: "easeInOut" } as const;
  const nodeTransition = { duration: 0.8, ease: "easeOut" } as const;

  const specs = get3DSpecs(id, lang);

  const render2DDiagram = () => {
    switch (id) {
      case 'kinnikuapp':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <motion.circle r="1.5" fill="var(--text-muted)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ offsetPath: "M 70 100 H 110" }} />
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={nodeTransition}>
              <rect x="10" y="80" width="60" height="40" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="40" y="103" textAnchor="middle" fill="var(--text-muted)" style={{ fontSize: '6px', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>INBOUND</text>
            </motion.g>
            <motion.path d="M 70 100 H 110" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 0.4 }}>
              <rect x="110" y="75" width="80" height="50" rx="6" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              <text x="150" y="98" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>TENANT_CORE</text>
              <text x="150" y="108" textAnchor="middle" fill="var(--text-muted)" style={{ fontSize: '4.5px', fontFamily: 'var(--font-sans)' }}>[LOAD_BALANCER]</text>
            </motion.g>
            <motion.path d="M 190 100 Q 210 100 210 60 H 240" stroke="var(--border)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 0.8 }} />
            <motion.g initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ ...nodeTransition, delay: 1.2 }}>
              <rect x="240" y="40" width="120" height="40" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="300" y="63" textAnchor="middle" fill="white" style={{ fontSize: '5.5px', fontFamily: 'var(--font-sans)' }}>SCHEMA_ISOLATION_V4</text>
            </motion.g>
            <motion.path d="M 190 100 Q 210 100 210 140 H 240" stroke="var(--border)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 0.8 }} />
            <motion.g initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ ...nodeTransition, delay: 1.4 }}>
              <rect x="240" y="120" width="120" height="40" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="300" y="143" textAnchor="middle" fill="white" style={{ fontSize: '5.5px', fontFamily: 'var(--font-sans)' }}>WHITE_LABEL_ENGINE</text>
            </motion.g>
          </svg>
        );
      case 'salta-rubik':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <motion.path d="M 50 100 H 350" stroke="var(--border)" strokeWidth="0.75" strokeDasharray="6 4" opacity="0.5" />
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={nodeTransition}>
              <circle cx="50" cy="100" r="22" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="50" y="102" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontFamily: 'var(--font-sans)' }}>MOBILE</text>
            </motion.g>
            <motion.path d="M 72 100 H 140" stroke="var(--border)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            <motion.g initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ ...nodeTransition, delay: 0.6 }}>
              <rect x="140" y="75" width="120" height="50" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <text x="200" y="98" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>FASTIFY_WCA_SRV</text>
              <text x="200" y="108" textAnchor="middle" fill="var(--text-muted)" style={{ fontSize: '4.5px', fontFamily: 'var(--font-sans)' }}>[REST_API_GATEWAY]</text>
            </motion.g>
            <motion.path d="M 260 100 H 310" stroke="var(--border)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 1.2 }} />
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 1.8 }}>
              <rect x="310" y="75" width="60" height="50" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="340" y="103" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontFamily: 'var(--font-sans)' }}>SECURE_DB</text>
            </motion.g>
          </svg>
        );
      case 'gerayse':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={nodeTransition}>
              <rect x="20" y="50" width="90" height="100" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
              <rect x="30" y="60" width="70" height="80" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="65" y="103" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontFamily: 'var(--font-sans)' }}>CASH_POINT</text>
            </motion.g>
            <motion.path d="M 100 100 H 160" stroke="var(--border)" strokeWidth="1.25" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            <motion.g initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ ...nodeTransition, delay: 0.8 }}>
              <rect x="160" y="75" width="110" height="50" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <text x="215" y="98" textAnchor="middle" fill="white" style={{ fontSize: '5.5px', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>DJANGO_BUSINESS_LOGIC</text>
              <line x1="160" y1="87" x2="270" y2="87" stroke="var(--border)" strokeWidth="1" />
            </motion.g>
            <motion.path d="M 270 100 H 325" stroke="var(--border)" strokeWidth="1.25" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 1.4 }} />
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 2 }}>
              <circle cx="350" cy="100" r="22" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="350" y="102" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontFamily: 'var(--font-sans)' }}>TREASURY</text>
            </motion.g>
          </svg>
        );
      case 'opsflow':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={nodeTransition}>
              <rect x="30" y="75" width="60" height="50" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="60" y="103" textAnchor="middle" fill="white" style={{ fontSize: '5px', fontFamily: 'var(--font-sans)' }}>DRAFT_STATE</text>
            </motion.g>
            <motion.path d="M 90 100 H 155" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 0.6 }}>
              <rect x="155" y="70" width="80" height="60" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <text x="195" y="100" textAnchor="middle" fill="white" style={{ fontSize: '5px', fontWeight: '600', fontFamily: 'var(--font-sans)' }}>PENDING_APPROVAL</text>
            </motion.g>
            <motion.path d="M 235 100 H 300" stroke="var(--border)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 1.2 }} />
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 1.8 }}>
              <rect x="300" y="75" width="60" height="50" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="330" y="103" textAnchor="middle" fill="white" style={{ fontSize: '5px', fontFamily: 'var(--font-sans)' }}>AUTHORIZED</text>
            </motion.g>
            <motion.path d="M 195 130 L 195 160 L 60 160 L 60 125" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" fill="none" strokeDasharray="2 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 1.2 }} />
            <motion.text x="127" y="154" textAnchor="middle" fill="var(--text-muted)" style={{ fontSize: '4.5px', fontFamily: 'var(--font-sans)' }} initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 2.2 }}>[REJECTED_FALLBACK]</motion.text>
          </svg>
        );
      case 'odoo-integration-hub':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={nodeTransition}>
              <rect x="20" y="50" width="80" height="40" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="60" y="73" textAnchor="middle" fill="var(--text-muted)" style={{ fontSize: '5.5px', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>FIELD_DEVICE</text>
              <rect x="20" y="110" width="80" height="40" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="60" y="133" textAnchor="middle" fill="var(--text-muted)" style={{ fontSize: '5.5px', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>FIELD_DEVICE</text>
            </motion.g>
            <motion.path d="M 100 70 Q 125 70 125 100 H 150" stroke="var(--border)" strokeWidth="1" fill="none" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            <motion.path d="M 100 130 Q 125 130 125 100 H 150" stroke="var(--border)" strokeWidth="1" fill="none" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 0.6 }}>
              <rect x="150" y="70" width="110" height="60" rx="6" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              <text x="205" y="95" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>ODOO_CORE</text>
              <text x="205" y="107" textAnchor="middle" fill="var(--text-muted)" style={{ fontSize: '4.5px', fontFamily: 'var(--font-sans)' }}>[CUSTOM_MODULES + REST_API]</text>
            </motion.g>
            <motion.path d="M 260 100 H 310" stroke="var(--border)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 1.2 }} />
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 1.6 }}>
              <circle cx="340" cy="100" r="24" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="340" y="102" textAnchor="middle" fill="white" style={{ fontSize: '5.5px', fontFamily: 'var(--font-sans)' }}>POSTGRES</text>
            </motion.g>
            <motion.path d="M 205 130 L 205 165 H 290" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" fill="none" strokeDasharray="2 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 1.4 }} />
            <motion.text x="300" y="167" textAnchor="start" fill="var(--text-muted)" style={{ fontSize: '4.5px', fontFamily: 'var(--font-sans)' }} initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 2 }}>[WEBHOOK_ALERTS]</motion.text>
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
              <circle cx="200" cy="100" r="32" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border)" strokeWidth="1" />
              <text x="200" y="103" textAnchor="middle" fill="white" style={{ fontSize: '7px', fontWeight: '600', fontFamily: 'var(--font-sans)' }}>CORE_SYS</text>
            </motion.g>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = Number((200 + Math.cos(rad) * 32).toFixed(2));
              const y1 = Number((100 + Math.sin(rad) * 32).toFixed(2));
              const x2 = Number((200 + Math.cos(rad) * 90).toFixed(2));
              const y2 = Number((100 + Math.sin(rad) * 90).toFixed(2));
              return (
                <g key={i}>
                  <motion.line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--border)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: i * 0.15 }} />
                  <motion.circle cx={x2} cy={y2} r="10" fill="rgba(255, 255, 255, 0.01)" stroke="var(--border)" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.15 }} />
                </g>
              );
            })}
            <motion.circle cx="200" cy="100" r="130" fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="6 6" animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }} />
          </svg>
        );
    }
  };

  const render3DIsometricStack = () => {
    const zOffset = hovered ? 75 : 55;

    const renderCard = (tier: TierData, zVal: number) => (
      <div
        className="architecture-layer"
        style={{
          position: 'absolute',
          width: '230px',
          height: '75px',
          background: 'rgba(12, 12, 16, 0.95)',
          border: hovered 
            ? '1px solid rgba(255, 255, 255, 0.2)' 
            : '1px solid var(--border)',
          boxShadow: hovered 
            ? '0 20px 30px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.01)'
            : '0 10px 20px rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
          padding: '10px 14px',
          transform: `translateZ(${zVal}px)`,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="mono" style={{ fontSize: '0.5rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            {tier.title}
          </span>
          <span className="mono" style={{ fontSize: '0.45rem', color: 'var(--foreground)', opacity: 0.6, border: '1px solid var(--border)', padding: '1px 4px', borderRadius: '4px' }}>
            UP
          </span>
        </div>
        <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'white', fontFamily: 'var(--font-sans)' }}>
          {tier.sub}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {tier.details.slice(0, 2).map((detail, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '2.5px', height: '2.5px', background: 'var(--text-muted)', borderRadius: '50%' }} />
              <span style={{ fontSize: '0.5rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'var(--font-sans)' }}>
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    );

    const renderConnector = (x: number, y: number, isReverse: boolean, delay: string) => {
      const height = zOffset * 2;
      return (
        <div
          style={{
            position: 'absolute',
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            width: '1px',
            height: `${height}px`,
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            borderLeft: '1px dashed rgba(255, 255, 255, 0.08)',
            transform: `translate3d(-50%, -50%, 0px) rotateX(90deg)`,
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div 
            className={isReverse ? "data-particle-reverse" : "data-particle"} 
            style={{ animationDelay: delay }} 
          />
        </div>
      );
    };

    return (
      <div 
        className="relative w-full h-full flex items-center justify-center preserve-3d"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ perspective: 1200 }}
      >
        <div 
          className="architecture-container-3d architecture-isometric preserve-3d"
          style={{ 
            width: '260px', 
            height: '260px', 
            position: 'relative', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            transform: `rotateX(60deg) rotateZ(-45deg) ${hovered ? 'scale(1.03)' : 'scale(1)'}`
          }}
        >
          {renderConnector(-110, -37, false, "0s")}
          {renderConnector(110, -37, true, "0.8s")}
          {renderConnector(-110, 37, false, "1.6s")}
          {renderConnector(110, 37, true, "2.4s")}

          {renderCard(specs.client, zOffset)}
          {renderCard(specs.server, 0)}
          {renderCard(specs.db, -zOffset)}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-[rgba(255,255,255,0.01)] border border-[var(--border)]">
      {/* Sleek Vercel-like tab control slider */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '12px', 
          right: '12px', 
          zIndex: 100, 
          display: 'flex', 
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border)',
          padding: '2px',
          borderRadius: '6px'
        }}
      >
        <button 
          onClick={() => setViewMode('2D')} 
          style={{
            background: viewMode === '2D' ? 'white' : 'transparent',
            color: viewMode === '2D' ? '#09090b' : 'var(--text-muted)',
            border: 'none',
            padding: '3px 8px',
            fontSize: '0.55rem',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            borderRadius: '4px',
            fontWeight: '600',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          2D_DIAGRAM
        </button>
        <button 
          onClick={() => setViewMode('3D')} 
          style={{
            background: viewMode === '3D' ? 'white' : 'transparent',
            color: viewMode === '3D' ? '#09090b' : 'var(--text-muted)',
            border: 'none',
            padding: '3px 8px',
            fontSize: '0.55rem',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            borderRadius: '4px',
            fontWeight: '600',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          3D_STACK
        </button>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="w-full h-full p-4 flex items-center justify-center">
        {viewMode === '2D' ? render2DDiagram() : render3DIsometricStack()}
      </div>
    </div>
  );
}
