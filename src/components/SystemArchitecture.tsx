'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture({ id }: { id?: string }) {
  const lineTransition = { duration: 2, ease: "easeInOut" } as const;
  const nodeTransition = { duration: 1, ease: "easeOut" } as const;

  const renderDiagram = () => {
    switch (id) {
      case 'kinnikuapp':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Global Flow Particle */}
            <motion.circle r="2" fill="var(--primary)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ offsetPath: "M 70 100 H 110" }} />
            
            {/* Entry Node */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={nodeTransition}>
              <rect x="10" y="80" width="60" height="40" rx="2" fill="rgba(59, 130, 246, 0.05)" stroke="var(--primary)" strokeWidth="0.5" />
              <path d="M 10 90 L 15 80 M 65 110 L 70 120" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
              <text x="40" y="105" textAnchor="middle" fill="white" style={{ fontSize: '6px', letterSpacing: '1px' }}>INBOUND</text>
            </motion.g>

            <motion.path d="M 70 100 H 110" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            
            {/* Routing Central */}
            <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 1 }}>
              <rect x="110" y="75" width="80" height="50" rx="4" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" strokeWidth="1.5" />
              <text x="150" y="100" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontWeight: 'bold' }}>TENANT_CORE</text>
              <text x="150" y="112" textAnchor="middle" fill="var(--primary)" style={{ fontSize: '4px' }}>[LOAD_BALANCER]</text>
            </motion.g>
            
            {/* Branching to Isolation */}
            <motion.path d="M 190 100 Q 210 100 210 60 H 240" stroke="var(--accent)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 2 }} />
            <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ ...nodeTransition, delay: 3 }}>
              <rect x="240" y="40" width="110" height="40" fill="rgba(14, 165, 233, 0.05)" stroke="var(--accent)" strokeWidth="0.5" />
              <text x="295" y="65" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>SCHEMA_ISOLATION_V4</text>
              <rect x="240" y="40" width="4" height="4" fill="var(--accent)" />
            </motion.g>
            
            <motion.path d="M 190 100 Q 210 100 210 140 H 240" stroke="var(--accent)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 2 }} />
            <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ ...nodeTransition, delay: 3.5 }}>
              <rect x="240" y="120" width="110" height="40" fill="rgba(14, 165, 233, 0.05)" stroke="var(--accent)" strokeWidth="0.5" />
              <text x="295" y="145" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>WHITE_LABEL_ENGINE</text>
              <rect x="240" y="120" width="4" height="4" fill="var(--accent)" />
            </motion.g>
          </svg>
        );
      case 'salta-rubik':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Sync Flow */}
            <motion.path d="M 50 100 H 350" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="10 5" opacity="0.2" />
            
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={nodeTransition}>
              <circle cx="50" cy="100" r="25" fill="none" stroke="var(--primary)" strokeWidth="1" />
              <motion.circle cx="50" cy="100" r="20" fill="rgba(59, 130, 246, 0.1)" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} />
              <text x="50" y="103" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>MOBILE</text>
            </motion.g>

            <motion.path d="M 75 100 H 130" stroke="var(--primary)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            
            <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...nodeTransition, delay: 1.5 }}>
              <rect x="130" y="75" width="120" height="50" rx="2" fill="rgba(14, 165, 233, 0.05)" stroke="var(--accent)" strokeWidth="1" />
              <text x="190" y="95" textAnchor="middle" fill="white" style={{ fontSize: '6px', fontWeight: 'bold' }}>FASTIFY_WCA_SRV</text>
              <text x="190" y="110" textAnchor="middle" fill="var(--accent)" style={{ fontSize: '4px' }}>[RESTAL_API_L3]</text>
              <motion.rect x="130" y="75" width="120" height="2" fill="var(--accent)" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
            </motion.g>
            
            <motion.path d="M 250 100 H 310" stroke="var(--primary)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 3 }} />
            
            <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 4.5 }}>
              <path d="M 310 80 L 360 80 L 370 100 L 360 120 L 310 120 Z" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" />
              <text x="340" y="103" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>SECURE_DB</text>
            </motion.g>
          </svg>
        );
      case 'gerayse':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Audit Path */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={nodeTransition}>
              <rect x="20" y="50" width="90" height="100" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="2 2" />
              <rect x="30" y="60" width="70" height="80" fill="rgba(59, 130, 246, 0.05)" stroke="var(--primary)" strokeWidth="1" />
              <text x="65" y="103" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>CASH_POINT</text>
            </motion.g>
            
            <motion.path d="M 100 100 H 160" stroke="var(--accent)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={lineTransition} />
            <motion.text x="130" y="90" textAnchor="middle" fill="var(--accent)" style={{ fontSize: '4px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>[AUDIT_SIG]</motion.text>
            
            <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ ...nodeTransition, delay: 2 }}>
              <rect x="160" y="75" width="110" height="50" rx="0" fill="rgba(14, 165, 233, 0.1)" stroke="var(--accent)" strokeWidth="1" />
              <text x="215" y="100" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>DJANGO_BUSINESS_LOGIC</text>
              <line x1="160" y1="85" x2="270" y2="85" stroke="var(--accent)" strokeWidth="0.5" />
            </motion.g>
            
            <motion.path d="M 270 100 H 330" stroke="var(--primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...lineTransition, delay: 4 }} />
            
            <motion.g initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...nodeTransition, delay: 5.5 }}>
              <circle cx="355" cy="100" r="25" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" />
              <text x="355" y="103" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>TREASURY</text>
              <motion.circle cx="355" cy="100" r="28" fill="none" stroke="var(--primary)" strokeWidth="0.5" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0], scale: [1, 1.2] }} transition={{ duration: 4, repeat: Infinity }} />
            </motion.g>
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Central Brain Hub */}
            <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
              <circle cx="200" cy="100" r="40" fill="rgba(59, 130, 246, 0.05)" stroke="var(--primary)" strokeWidth="1" strokeDasharray="5 5" />
              <motion.circle cx="200" cy="100" r="30" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" strokeWidth="2" animate={{ r: [30, 35, 30], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
              <text x="200" y="103" textAnchor="middle" fill="white" style={{ fontSize: '8px', fontWeight: 'bold' }}>FROAKY_CORE</text>
            </motion.g>

            {/* Neural Connections */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = Number((200 + Math.cos(rad) * 40).toFixed(2));
              const y1 = Number((100 + Math.sin(rad) * 40).toFixed(2));
              const x2 = Number((200 + Math.cos(rad) * 120).toFixed(2));
              const y2 = Number((100 + Math.sin(rad) * 120).toFixed(2));
              
              return (
                <g key={i}>
                  <motion.line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--primary)" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: i * 0.2 }} />
                  <motion.circle cx={x2} cy={y2} r="15" fill="rgba(0, 243, 255, 0.05)" stroke="var(--accent)" strokeWidth="0.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 + i * 0.2 }} />
                  <motion.circle cx={x2} cy={y2} r="2" fill="var(--accent)" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} />
                </g>
              );
            })}

            {/* Orbitals */}
            <motion.circle cx="200" cy="100" r="140" fill="none" stroke="var(--primary)" strokeWidth="0.2" opacity="0.2" strokeDasharray="10 10" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full h-[320px] border border-[var(--border)] rounded-2xl overflow-hidden bg-[rgba(0,0,0,0.3)] shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0%,transparent_70%)]" />
      
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-[var(--border)] bg-[rgba(0,243,255,0.02)]">
        <div className="mono text-[0.5rem] text-[var(--primary)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--primary)] animate-pulse" />
          SYS_ANALYSIS::{id?.toUpperCase() || 'CORE'} [OPERATIONAL]
        </div>
        <div className="mono text-[0.4rem] opacity-30">CRC_CHECK_OK_889F</div>
      </div>
      
      <div className="w-full h-full pt-12 pb-6 px-4">
        {renderDiagram()}
      </div>

      <div className="absolute bottom-3 left-4 flex gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_5px_var(--primary)]" />
          <span className="mono text-[0.45rem] opacity-60">ACTIVE_NODE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_5px_var(--accent)]" />
          <span className="mono text-[0.45rem] opacity-60">DATA_SYNC_L2</span>
        </div>
      </div>
    </div>
  );
}
