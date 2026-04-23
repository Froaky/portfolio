'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
  return (
    <div className="relative w-full h-[300px] border border-[var(--border)] rounded-xl overflow-hidden bg-[rgba(0,0,0,0.2)] p-6">
      <div className="mono text-[0.6rem] text-[var(--primary)] opacity-50 absolute top-4 left-4">
        ARCH_DIAGRAM::MULTI_TENANT_FLOW_V2
      </div>
      
      <svg className="w-full h-full" viewBox="0 0 400 200">
        {/* Nodes */}
        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          x="10" y="80" width="60" height="40" rx="4"
          fill="rgba(59, 130, 246, 0.1)"
          stroke="var(--primary)"
          strokeWidth="1"
        />
        <text x="40" y="105" textAnchor="middle" fill="white" style={{ fontSize: '8px', fontFamily: 'monospace' }}>USERS</text>

        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          x="110" y="80" width="80" height="40" rx="4"
          fill="rgba(59, 130, 246, 0.1)"
          stroke="var(--primary)"
          strokeWidth="1"
        />
        <text x="150" y="105" textAnchor="middle" fill="white" style={{ fontSize: '8px', fontFamily: 'monospace' }}>API GATEWAY</text>

        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          x="230" y="50" width="80" height="40" rx="4"
          fill="rgba(14, 165, 233, 0.1)"
          stroke="var(--accent)"
          strokeWidth="1"
        />
        <text x="270" y="75" textAnchor="middle" fill="white" style={{ fontSize: '8px', fontFamily: 'monospace' }}>LOGIC A (TENANT)</text>

        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          x="230" y="110" width="80" height="40" rx="4"
          fill="rgba(14, 165, 233, 0.1)"
          stroke="var(--accent)"
          strokeWidth="1"
        />
        <text x="270" y="135" textAnchor="middle" fill="white" style={{ fontSize: '8px', fontFamily: 'monospace' }}>LOGIC B (TENANT)</text>

        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          x="340" y="80" width="50" height="40" rx="4"
          fill="rgba(59, 130, 246, 0.1)"
          stroke="var(--primary)"
          strokeWidth="1"
        />
        <text x="365" y="105" textAnchor="middle" fill="white" style={{ fontSize: '8px', fontFamily: 'monospace' }}>STAT_DB</text>

        {/* Connections */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
          d="M 70 100 H 110"
          stroke="var(--primary)"
          strokeWidth="1"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          d="M 190 100 Q 210 100 210 70 H 230"
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          d="M 190 100 Q 210 100 210 130 H 230"
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          d="M 310 70 Q 325 70 325 100 H 340"
          stroke="var(--primary)"
          strokeWidth="1"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          d="M 310 130 Q 325 130 325 100 H 340"
          stroke="var(--primary)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[var(--primary)]" />
          <span className="mono text-[0.5rem] opacity-50">CORE_SYNC</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[var(--accent)]" />
          <span className="mono text-[0.5rem] opacity-50">DATA_FLOW</span>
        </div>
      </div>
    </div>
  );
}
