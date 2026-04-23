export const translations = {
  en: {
    nav: {
      projects: "01.Projects",
      services: "02.Services",
      contact: "03.Contact",
      src: "SRC_CODE",
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
    stats: [
      { label: "Systems Integrated", value: "12+" },
      { label: "Logic Blocks", value: "500+" },
      { label: "Process Optimization", value: "99.9%" },
    ],
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
          desc: "Product-oriented Flutter system for speedcubers. Features WCA scrambles, session history, and a Fastify/PostgreSQL backend for OAuth-ready sync.",
          challenge: "Precise timing & state sync across web/mobile platforms.",
          impact: "Deployed a production-ready tool with WCA-style compliance.",
          tech: ["Flutter", "Fastify", "Prisma", "PostgreSQL"],
          link: "https://timer-salta-rubik-production.up.railway.app",
        },
        {
          id: "gerayse",
          title: "GERAYSE",
          desc: "Financial operations engine replacing legacy spreadsheets. Manages branch cashflow, treasury, and cross-office auditing with Django & PostgreSQL.",
          challenge: "Translating manual Excel chaos into auditable business rules.",
          impact: "Eliminated 100% of spreadsheet dependency for core operations.",
          tech: ["Django", "PostgreSQL", "HTMX", "Operational UI"],
          link: "https://gerayse10-production.up.railway.app",
        },
        {
          id: "kinnikuapp",
          title: "KINNIKU APP",
          desc: "Multi-tenant SaaS for gym management. Includes QR check-ins, automated subscription flows, and white-label branding per gym tenant.",
          challenge: "Strict data isolation & dynamic branding for multi-tenant scaling.",
          impact: "Scalable SaaS infrastructure ready for commercial multi-gym rollout.",
          tech: ["FastAPI", "SQLModel", "SaaS Architecture", "QR-Core"],
          link: "https://kinnikuapp.com",
        },
        {
          id: "opsflow",
          title: "OPSFLOW (Internal)",
          desc: "Internal operations dashboard for managing complex business logic and real-time process tracking.",
          challenge: "Modeling complex supply chain approval chains as state machines.",
          impact: "Streamlined internal approval latency by reducing manual overhead.",
          tech: ["Next.js", "Server Actions", "Industrial UX"],
          link: "#",
        },
      ],
    },
    labels: {
      challenge: "CHALLENGE",
      impact: "IMPACT (ANALYSIS)",
    },
    contact: {
      tag: "CONTACT.CHANNELS",
      title: "Let's Build",
      titleAccent: "Something Robust.",
      desc: "I’m open to discussing new systems, technical challenges, or remote opportunities.",
      email: "INIT_MAIL",
    },
  },
  es: {
    nav: {
      projects: "01.Proyectos",
      services: "02.Servicios",
      contact: "03.Contacto",
      src: "CODIGO_FUERTE",
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
    stats: [
      { label: "Sistemas Integrados", value: "12+" },
      { label: "Bloques de Lógica", value: "500+" },
      { label: "Optimización de Procesos", value: "99.9%" },
    ],
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
          desc: "Sistema Flutter orientado a producto para speedcubers. Incluye scrambles oficiales WCA, historial de sesiones y un backend en Fastify/PostgreSQL.",
          challenge: "Sincronización de timing y estados en multiplataforma sin deriva.",
          impact: "Despliegue de herramienta lista para producción con normas WCA.",
          tech: ["Flutter", "Fastify", "Prisma", "PostgreSQL"],
          link: "https://timer-salta-rubik-production.up.railway.app",
        },
        {
          id: "gerayse",
          title: "GERAYSE",
          desc: "Motor de operaciones financieras que reemplaza planillas heredadas. Gestiona flujo de caja, tesorería y auditoría entre sucursales.",
          challenge: "Traducir el caos de Excel a reglas de negocio auditables.",
          impact: "Eliminó el 100% de la dependencia de planillas para operaciones core.",
          tech: ["Django", "PostgreSQL", "HTMX", "UI Operativa"],
          link: "https://gerayse10-production.up.railway.app",
        },
        {
          id: "kinnikuapp",
          title: "KINNIKU APP",
          desc: "SaaS multi-tenant para gestión de gimnasios. Incluye check-ins por QR, flujos de suscripción automatizados y branding white-label.",
          challenge: "Aislamiento estricto de datos y branding dinámico escalable.",
          impact: "Infraestructura SaaS lista para expansión comercial multi-gym.",
          tech: ["FastAPI", "SQLModel", "Arquitectura SaaS", "QR-Core"],
          link: "https://kinnikuapp.com",
        },
        {
          id: "opsflow",
          title: "OPSFLOW (Interno)",
          desc: "Dashboard de operaciones internas para gestionar lógica de negocio compleja y seguimiento de procesos en tiempo real.",
          challenge: "Modelado de cadenas de aprobación complejas como máquinas de estado.",
          impact: "Reducción de latencia en aprobaciones al eliminar carga manual.",
          tech: ["Next.js", "Server Actions", "UX Industrial"],
          link: "#",
        },
      ],
    },
    labels: {
      challenge: "DESAFÍO",
      impact: "IMPACTO (ANÁLISIS)",
    },
    contact: {
      tag: "CONTACTO.CANALES",
      title: "Construyamos",
      titleAccent: "Algo Robusto.",
      desc: "Estoy abierto a discutir nuevos sistemas, desafíos técnicos u oportunidades remotas.",
      email: "ENVIAR_MAIL",
    },
  },
};
