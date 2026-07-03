export const translations = {
  en: {
    nav: {
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      src: "GitHub",
      back: "BACK_TO_COMMAND_CENTER",
    },
    hero: {
      tag: "// ARCHIVE.CORE.SYSTEMS_DEVEL",
      title: "SYSTEMS ANALYST",
      titleAccent: "& DEVELOPER.",
      desc: "I am Froaky. I design high-performance APIs and internal operations tools that bridge business logic with reliable technology.",
      initWork: "INIT_WORK_VIEW",
      getResume: "GET_RESUME",
      cvPath: "/docs/cv-en.pdf",
      cvHtmlPath: "/docs/cv-en.html",
    },
    capabilities: {
      tag: "CAPABILITIES.MANIFEST",
      title: "Solving Complex",
      titleAccent: "Operational Challenges.",
      items: [
        {
          tag: "MOD::API_INTEGRATION",
          title: "APIs & Integrations",
          desc: "Architecting robust RESTful and GraphQL services. Specialized in connecting legacy systems like Odoo with modern cloud infrastructure.",
        },
        {
          tag: "MOD::INTERNAL_OPS",
          title: "Internal Tools",
          desc: "Developing specialized internal applications that streamline workflows, reduce manual data entry, and increase team efficiency.",
        },
        {
          tag: "MOD::SYS_STRUCT",
          title: "System Design",
          desc: "Designing scalable SQL-backed systems with clean data modeling, optimized indexing, and maintainable architectures.",
        },
      ],
      methodologies: {
        tag: "ANALYSIS_CORE",
        title: "Operational Analysis",
        items: [
          "Data Auditing & Integrity",
          "Process Cycle Optimization",
          "Multi-tenant Architecture",
          "Legacy System Migration",
        ]
      }
    },
    projects: {
      tag: "ARCHIVE.PROJECTS",
      title: "Featured",
      titleAccent: "Work.",
      items: [
        {
          id: "salta-rubik",
          title: "SALTA RUBIK",
          desc: "Product-oriented Flutter system for speedcubers. Features WCA scrambles, session history, and a Fastify/PostgreSQL backend.",
          challenge: "Precise timing & state sync across web/mobile platforms.",
          impact: "Deployed a production-ready tool with WCA-style compliance.",
          fullDesc: "A complete professional timing suite for the speedcubing community. Designed to handle thousands of solves with millisecond precision, ensuring data integrity across devices using a custom synchronization engine built on Fastify and Prisma.",
          features: ["Official WCA Scramble Engine", "Cross-device Solve Synchronization", "Advanced Statistics & Trend Analysis", "Customizable Inspection Timing"],
          tech: ["Flutter", "Fastify", "Prisma", "PostgreSQL"],
          link: "https://timer-salta-rubik-production.up.railway.app",
          decisions: [
            {
              problem: "Timing must be millisecond-precise on both web and mobile, without drifting between devices.",
              decision: "Custom synchronization engine on Fastify + Prisma that reconciles solve history across devices.",
            },
            {
              problem: "Scrambles must be valid for competition-style practice.",
              decision: "WCA-style scramble engine instead of naive random move generation.",
            },
            {
              problem: "Stats over thousands of solves get slow if computed naively.",
              decision: "Session-based history model in PostgreSQL with precomputed trend statistics.",
            },
          ],
        },
        {
          id: "gerayse",
          title: "GERAYSE",
          desc: "Financial operations engine replacing legacy spreadsheets. Manages branch cashflow, treasury, and cross-office auditing.",
          challenge: "Translating manual Excel chaos into auditable business rules.",
          impact: "Eliminated 100% of spreadsheet dependency for core operations.",
          fullDesc: "A robust financial management system developed to replace insecure legacy spreadsheets. Gerayse provides branch-level treasury control, real-time auditing, and centralized reporting, ensuring every cent is tracked across multiple administrative offices.",
          features: ["Centralized Branch Treasury", "Real-time Cashflow Auditing", "Multi-level Permission System", "Automated Daily Financial Closing"],
          tech: ["Django", "PostgreSQL", "HTMX", "Operational UI"],
          link: "https://gerayse10-production.up.railway.app",
          decisions: [
            {
              problem: "Core financial operations lived in editable spreadsheets with no audit trail.",
              decision: "Business rules modeled in Django over PostgreSQL, so every movement is validated and traceable.",
            },
            {
              problem: "Multiple offices handling cash with different levels of responsibility.",
              decision: "Centralized branch treasury with a multi-level permission system.",
            },
            {
              problem: "Manual end-of-day closings were slow and error-prone.",
              decision: "Automated daily financial closing that locks the day's ledger.",
            },
          ],
        },
        {
          id: "kinnikuapp",
          title: "KINNIKU APP",
          desc: "Multi-tenant SaaS for gym management. Includes QR check-ins, automated subscription flows, and white-label branding.",
          challenge: "Strict data isolation & dynamic branding for multi-tenant scaling.",
          impact: "Scalable SaaS infrastructure ready for commercial multi-gym rollout.",
          fullDesc: "A comprehensive SaaS platform for gym owners. Built with FastAPI and PostgreSQL, it handles multi-tenant data isolation with absolute security. Gyms can manage members, automate payments, and track attendance via a high-performance QR check-in system.",
          features: ["Multi-tenant Data Isolation", "QR Attendance & Member Control", "Automated Payment Workflows", "White-label Gym Branding"],
          tech: ["FastAPI", "SQLModel", "SaaS Architecture", "QR-Core"],
          link: "https://kinnikuapp.com",
          decisions: [
            {
              problem: "Many gyms on one platform — one tenant's data must never leak into another's.",
              decision: "Strict multi-tenant isolation enforced at the data layer in FastAPI + PostgreSQL.",
            },
            {
              problem: "Front-desk attendance control has to be faster than a paper list.",
              decision: "QR check-in flow validated server-side against the member's subscription.",
            },
            {
              problem: "Each gym wants the app to look like their own brand.",
              decision: "White-label theming resolved per tenant at runtime.",
            },
          ],
        },
        {
          id: "opsflow",
          title: "OPSFLOW (Internal)",
          desc: "Internal operations dashboard for managing complex business logic and real-time process tracking.",
          challenge: "Modeling complex supply chain approval chains as state machines.",
          impact: "Streamlined internal approval latency by reducing manual overhead.",
          fullDesc: "An advanced internal dashboard designed to handle complex request lifecycles. By modeling business processes as state machines, OpsFlow ensures that every transition is authorized and tracked, providing real-time visibility into operational bottlenecks.",
          features: ["State Machine Workflow Engine", "Real-time Process Monitoring", "Automated Approval Chains", "Technical HUD Dashboard"],
          tech: ["Next.js", "Server Actions", "Industrial UX"],
          link: "/opsflow",
          decisions: [
            {
              problem: "Approval chains encoded in ad-hoc conditionals become impossible to reason about.",
              decision: "Each request lifecycle modeled as an explicit state machine — invalid transitions can't happen.",
            },
            {
              problem: "Bottlenecks were invisible until someone complained.",
              decision: "Real-time monitoring of every request's state, surfaced in a technical dashboard.",
            },
            {
              problem: "Every state change needs accountability.",
              decision: "Each transition is authorized and recorded before it's applied.",
            },
          ],
        },
        {
          id: "odoo-integration-hub",
          title: "ODOO INTEGRATION HUB",
          desc: "Custom Odoo ERP modules exposing a restricted REST API that syncs field devices with the central ERP in real time.",
          challenge: "Real-time device-to-ERP sync without breaking single-source-of-truth integrity.",
          impact: "Manual synchronization reduced from 4 hours daily to under 5 minutes.",
          fullDesc: "A central integration hub built inside Odoo ERP to automate business-critical operations. The organization struggled with manual data entry between field devices and the ERP, delaying inventory management and financial reporting. Custom Python modules extend Odoo's models and expose a restricted REST API for field workers, with PostgreSQL indexing optimized for high-frequency writes and webhook-based alerts for external task routing. The system handles thousands of automated status transitions per day.",
          features: ["Custom Odoo Model Extensions (Python)", "Restricted REST API for Field Devices", "High-frequency Write Optimization (PostgreSQL)", "Webhook-based External Task Routing"],
          tech: ["Python", "Odoo", "PostgreSQL", "REST APIs"],
          link: "#",
          decisions: [
            {
              problem: "Field data was re-typed by hand into the ERP, delaying inventory and financial reporting.",
              decision: "A restricted REST API over custom Odoo modules lets field devices sync in real time.",
            },
            {
              problem: "A standalone middleware would duplicate business data outside the ERP.",
              decision: "Built inside Odoo to keep a single source of truth, accepting the ORM's complexity under high load.",
            },
            {
              problem: "High-frequency writes from field devices strained the database.",
              decision: "PostgreSQL indexing optimized specifically for the hot write paths.",
            },
          ],
        },
      ],
    },
    labels: {
      challenge: "CHALLENGE",
      impact: "IMPACT (ANALYSIS)",
      decisions: "ENGINEERING_DECISIONS",
      problem: "PROBLEM",
      decision: "DECISION",
    },
    contact: {
      tag: "CONTACT.CHANNELS",
      title: "Let's Build",
      titleAccent: "Something Robust.",
      desc: "I’m open to discussing new systems, technical challenges, or remote opportunities.",
      email: "INIT_MAIL",
    },
    about: {
      tag: "BIOMETRIC.BIO",
      title: "About the",
      titleAccent: "Analyst.",
      desc: "I specialize in transforming operational chaos into structured, high-performance software. My background as a Systems Analyst allows me to look beyond the code and understand the business flow, ensuring that every integration serves a strategic purpose. I don't just build apps; I build engines that power business growth.",
    },
    skills: {
      tag: "SYSTEM.SPECS",
      title: "Technical",
      titleAccent: "Stack.",
      categories: [
        {
          name: "BACKEND_CORE",
          items: ["Django", "FastAPI", "Fastify", "PostgreSQL", "SQLModel", "Prisma"]
        },
        {
          name: "FRONTEND_MOBILE",
          items: ["Flutter", "Next.js", "React", "HTMX", "TailwindCSS", "Framer Motion"]
        },
        {
          name: "OPERATIONAL_TOOLS",
          items: ["Git/GitHub", "Docker", "Railway/Vercel", "Excel Automation", "API Auditing"]
        }
      ]
    }
  },
  es: {
    nav: {
      projects: "Proyectos",
      services: "Servicios",
      contact: "Contacto",
      src: "GitHub",
      back: "VOLVER_AL_CENTRO_DE_MANDO",
    },
    hero: {
      tag: "// ARCHIVO.CORE.SISTEMAS_DESA",
      title: "ANALISTA DE SISTEMAS",
      titleAccent: "& DESARROLLADOR.",
      desc: "Soy Froaky. Diseño APIs de alto rendimiento y herramientas de operaciones internas que conectan la lógica de negocio con tecnología confiable.",
      initWork: "VER_PROYECTOS",
      getResume: "DESCARGAR_CV",
      cvPath: "/docs/cv-es.pdf",
      cvHtmlPath: "/docs/cv-es.html",
    },
    capabilities: {
      tag: "CAPACIDADES.MANIFIESTO",
      title: "Resolviendo Desafíos",
      titleAccent: "Operacionales Complejos.",
      items: [
        {
          tag: "MOD::INTEGRACION_API",
          title: "APIs e Integraciones",
          desc: "Arquitectura de servicios RESTful y GraphQL robustos. Especializado en conectar sistemas heredados como Odoo con infraestructura moderna.",
        },
        {
          tag: "MOD::HERRAMIENTAS_INT",
          title: "Herramientas Internas",
          desc: "Desarrollo de aplicaciones internas especializadas que optimizan flujos de trabajo, reducen la carga manual y aumentan la eficiencia.",
        },
        {
          tag: "MOD::DISENO_SISTEMAS",
          title: "Diseño de Sistemas",
          desc: "Diseño de sistemas escalables basados en SQL con modelado de datos limpio, indexación optimizada y arquitecturas mantenibles.",
        },
      ],
      methodologies: {
        tag: "CORE_ANALISIS",
        title: "Análisis Operacional",
        items: [
          "Auditoría e Integridad de Datos",
          "Optimización de Ciclos de Proceso",
          "Arquitecturas Multi-tenant",
          "Migración de Sistemas Heredados",
        ]
      }
    },
    projects: {
      tag: "ARCHIVO.PROYECTOS",
      title: "Trabajos",
      titleAccent: "Destacados.",
      items: [
        {
          id: "salta-rubik",
          title: "SALTA RUBIK",
          desc: "Sistema Flutter orientado a producto para speedcubers. Incluye scrambles oficiales WCA, historial y backend en Fastify/PostgreSQL.",
          challenge: "Sincronización de timing y estados en multiplataforma sin deriva.",
          impact: "Despliegue de herramienta lista para producción con normas WCA.",
          fullDesc: "Una suite completa de timing profesional para la comunidad de speedcubing. Diseñada para manejar miles de resoluciones con precisión de milisegundos, asegurando la integridad de datos entre dispositivos mediante un motor de sincronización personalizado basado en Fastify y Prisma.",
          features: ["Motor de Scrambles Oficiales WCA", "Sincronización entre Dispositivos", "Analítica de Estadísticas Avanzadas", "Tiempos de Inspección Personalizables"],
          tech: ["Flutter", "Fastify", "Prisma", "PostgreSQL"],
          link: "https://timer-salta-rubik-production.up.railway.app",
          decisions: [
            {
              problem: "El timing debe tener precisión de milisegundos en web y mobile, sin deriva entre dispositivos.",
              decision: "Motor de sincronización propio sobre Fastify + Prisma que reconcilia el historial de solves entre dispositivos.",
            },
            {
              problem: "Los scrambles deben ser válidos para práctica estilo competencia.",
              decision: "Motor de scrambles estilo WCA en lugar de generación aleatoria ingenua de movimientos.",
            },
            {
              problem: "Las estadísticas sobre miles de solves se vuelven lentas si se calculan de forma ingenua.",
              decision: "Modelo de historial por sesiones en PostgreSQL con estadísticas de tendencia precalculadas.",
            },
          ],
        },
        {
          id: "gerayse",
          title: "GERAYSE",
          desc: "Motor de operaciones financieras que reemplaza planillas heredadas. Gestiona flujo de caja y auditoría centralizada.",
          challenge: "Traducir el caos de Excel a reglas de negocio auditables.",
          impact: "Eliminó el 100% de la dependencia de planillas para operaciones core.",
          fullDesc: "Un sistema robusto de gestión financiera desarrollado para reemplazar hojas de cálculo inseguras. Gerayse proporciona control de tesorería a nivel de sucursal, auditoría en tiempo real y reportes centralizados, asegurando el seguimiento de cada centavo en múltiples oficinas administrativas.",
          features: ["Tesorería Centralizada por Sucursal", "Auditoría de Flujo de Caja en Tiempo Real", "Sistema de Permisos Multinivel", "Cierre Financiero Diario Automatizado"],
          tech: ["Django", "PostgreSQL", "HTMX", "UI Operativa"],
          link: "https://gerayse10-production.up.railway.app",
          decisions: [
            {
              problem: "Las operaciones financieras core vivían en planillas editables sin rastro de auditoría.",
              decision: "Reglas de negocio modeladas en Django sobre PostgreSQL: cada movimiento se valida y queda trazado.",
            },
            {
              problem: "Múltiples oficinas manejando caja con distintos niveles de responsabilidad.",
              decision: "Tesorería centralizada por sucursal con sistema de permisos multinivel.",
            },
            {
              problem: "Los cierres manuales de fin de día eran lentos y propensos a errores.",
              decision: "Cierre financiero diario automatizado que bloquea el libro del día.",
            },
          ],
        },
        {
          id: "kinnikuapp",
          title: "KINNIKU APP",
          desc: "SaaS multi-tenant para gestión de gimnasios. Incluye check-ins por QR, suscripciones y branding dinámico.",
          challenge: "Aislamiento estricto de datos y branding dinámico escalable.",
          impact: "Infraestructura SaaS lista para expansión comercial multi-gym.",
          fullDesc: "Plataforma SaaS integral para dueños de gimnasios. Construida en FastAPI y PostgreSQL, maneja el aislamiento de datos multi-tenant con absoluta seguridad. Los gimnasios pueden gestionar socios, pagos automáticos y asistencia mediante un sistema de check-in por QR de alto rendimiento.",
          features: ["Aislamiento de Datos Multi-tenant", "Control de Socios y Asistencia por QR", "Flujos de Pago Automatizados", "Branding Personalizado por Gimnasio"],
          tech: ["FastAPI", "SQLModel", "Arquitectura SaaS", "QR-Core"],
          link: "https://kinnikuapp.com",
          decisions: [
            {
              problem: "Muchos gimnasios en una sola plataforma: los datos de un tenant jamás deben filtrarse a otro.",
              decision: "Aislamiento multi-tenant estricto aplicado en la capa de datos con FastAPI + PostgreSQL.",
            },
            {
              problem: "El control de asistencia en mostrador tiene que ser más rápido que una lista en papel.",
              decision: "Check-in por QR validado en el servidor contra la suscripción del socio.",
            },
            {
              problem: "Cada gimnasio quiere que la app se vea con su propia marca.",
              decision: "Theming white-label resuelto por tenant en tiempo de ejecución.",
            },
          ],
        },
        {
          id: "opsflow",
          title: "OPSFLOW (Interno)",
          desc: "Dashboard de operaciones internas para gestionar lógica de negocio compleja y seguimiento de procesos en tiempo real.",
          challenge: "Modelado de cadenas de aprobación complejas como máquinas de estado.",
          impact: "Reducción de latencia en aprobaciones al eliminar carga manual.",
          fullDesc: "Dashboard operativo avanzado diseñado para gestionar ciclos de vida de solicitudes complejas. Al modelar los procesos como máquinas de estado, OpsFlow asegura que cada transición sea autorizada y registrada, eliminando cuellos de botella mediante visibilidad en tiempo real.",
          features: ["Motor de Workflows tipo State Machine", "Monitoreo de Procesos en Tiempo Real", "Cadenas de Aprobación Automatizadas", "Dashboard Técnico Estilo HUD"],
          tech: ["Next.js", "Server Actions", "UX Industrial"],
          link: "/opsflow",
          decisions: [
            {
              problem: "Las cadenas de aprobación codificadas en condicionales ad-hoc se vuelven imposibles de razonar.",
              decision: "Cada ciclo de vida modelado como máquina de estados explícita: las transiciones inválidas no pueden ocurrir.",
            },
            {
              problem: "Los cuellos de botella eran invisibles hasta que alguien se quejaba.",
              decision: "Monitoreo en tiempo real del estado de cada solicitud, visible en un dashboard técnico.",
            },
            {
              problem: "Cada cambio de estado necesita responsabilidad asignada.",
              decision: "Toda transición se autoriza y se registra antes de aplicarse.",
            },
          ],
        },
        {
          id: "odoo-integration-hub",
          title: "ODOO INTEGRATION HUB",
          desc: "Módulos custom de Odoo ERP que exponen una REST API restringida para sincronizar dispositivos de campo con el ERP central en tiempo real.",
          challenge: "Sincronización dispositivo-ERP en tiempo real sin romper la integridad de fuente única de verdad.",
          impact: "La sincronización manual bajó de 4 horas diarias a menos de 5 minutos.",
          fullDesc: "Un hub central de integración construido dentro de Odoo ERP para automatizar operaciones críticas del negocio. La organización sufría la carga manual de datos entre dispositivos de campo y el ERP, lo que atrasaba inventario y reportes financieros. Módulos Python personalizados extienden los modelos de Odoo y exponen una REST API restringida para trabajadores de campo, con indexación de PostgreSQL optimizada para escrituras de alta frecuencia y alertas por webhook para ruteo externo de tareas. El sistema maneja miles de transiciones de estado automatizadas por día.",
          features: ["Extensiones Custom de Modelos Odoo (Python)", "REST API Restringida para Dispositivos de Campo", "Optimización de Escrituras de Alta Frecuencia (PostgreSQL)", "Ruteo Externo de Tareas vía Webhooks"],
          tech: ["Python", "Odoo", "PostgreSQL", "REST APIs"],
          link: "#",
          decisions: [
            {
              problem: "Los datos de campo se re-tipeaban a mano en el ERP, atrasando inventario y reportes financieros.",
              decision: "Una REST API restringida sobre módulos custom de Odoo permite a los dispositivos sincronizar en tiempo real.",
            },
            {
              problem: "Un middleware separado duplicaría datos del negocio fuera del ERP.",
              decision: "Se construyó dentro de Odoo para mantener una única fuente de verdad, aceptando la complejidad del ORM bajo alta carga.",
            },
            {
              problem: "Las escrituras de alta frecuencia desde dispositivos de campo exigían a la base de datos.",
              decision: "Indexación de PostgreSQL optimizada específicamente para las rutas calientes de escritura.",
            },
          ],
        },
      ],
    },
    labels: {
      challenge: "DESAFÍO",
      impact: "IMPACTO (ANÁLISIS)",
      decisions: "DECISIONES_DE_INGENIERÍA",
      problem: "PROBLEMA",
      decision: "DECISIÓN",
    },
    contact: {
      tag: "CONTACTO.CANALES",
      title: "Construyamos",
      titleAccent: "Algo Robusto.",
      desc: "Estoy abierto a discutir nuevos sistemas, desafíos técnicos u oportunidades remotas.",
      email: "ENVIAR_MAIL",
    },
    about: {
      tag: "BIO.BIOMETRICA",
      title: "Sobre el",
      titleAccent: "Analista.",
      desc: "Me especializo en transformar el caos operativo en software estructurado y de alto rendimiento. Mi formación como Analista de Sistemas me permite ver más allá del código y entender el flujo del negocio, asegurando que cada integración cumpla un propósito estratégico. No solo construyo aplicaciones; construyo motores que impulsan el crecimiento empresarial.",
    },
    skills: {
      tag: "SPECS.DEL_SISTEMA",
      title: "Stack",
      titleAccent: "Técnico.",
      categories: [
        {
          name: "CORE_BACKEND",
          items: ["Django", "FastAPI", "Fastify", "PostgreSQL", "SQLModel", "Prisma"]
        },
        {
          name: "FRONTEND_MOBILE",
          items: ["Flutter", "Next.js", "React", "HTMX", "TailwindCSS", "Framer Motion"]
        },
        {
          name: "HERRAMIENTAS_OPS",
          items: ["Git/GitHub", "Docker", "Railway/Vercel", "Automatización Excel", "Auditoría de APIs"]
        }
      ]
    }
  },
};
