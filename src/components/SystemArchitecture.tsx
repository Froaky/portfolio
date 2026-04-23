'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture({ id }: { id?: string }) {
  const renderDiagram = () => {
    switch (id) {
      case 'kinnikuapp':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Multi-tenant Flow */}
            <motion.rect x="10" y="80" width="60" height="40" rx="4" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" />
            <text x="40" y="105" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>SUBDOMAIN</text>
            <motion.path d="M 70 100 H 110" stroke="var(--primary)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
            
            <motion.rect x="110" y="80" width="80" height="40" rx="4" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" />
            <text x="150" y="105" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>TENANT_ROUTER</text>
            
            <motion.path d="M 190 100 Q 210 100 210 70 H 230" stroke="var(--accent)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
            <motion.rect x="230" y="50" width="100" height="40" rx="4" fill="rgba(14, 165, 233, 0.1)" stroke="var(--accent)" />
            <text x="280" y="75" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>DATA_ID_ISOLATION</text>
            
            <motion.path d="M 190 100 Q 210 100 210 130 H 230" stroke="var(--accent)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
            <motion.rect x="230" y="110" width="100" height="40" rx="4" fill="rgba(14, 165, 233, 0.1)" stroke="var(--accent)" />
            <text x="280" y="135" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>CUSTOM_BRANDING</text>
          </svg>
        );
      case 'salta-rubik':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Precise Timing Flow */}
            <motion.circle cx="50" cy="100" r="30" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" />
            <text x="50" y="105" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>APP_ENTRY</text>
            
            <motion.path d="M 80 100 H 130" stroke="var(--primary)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
            <motion.rect x="130" y="80" width="100" height="40" rx="4" fill="rgba(14, 165, 233, 0.1)" stroke="var(--accent)" />
            <text x="180" y="105" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>WCA_SCRAMBLER</text>
            
            <motion.path d="M 230 100 H 280" stroke="var(--primary)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
            <motion.rect x="280" y="80" width="100" height="40" rx="4" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" />
            <text x="330" y="105" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>DB_SYNC_OAUTH</text>
          </svg>
        );
      case 'gerayse':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Audit Flow */}
            <motion.rect x="20" y="60" width="80" height="80" rx="4" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" />
            <text x="60" y="105" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>BRANCH_CASH</text>
            
            <motion.path d="M 100 100 H 160" stroke="var(--accent)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
            <motion.rect x="160" y="80" width="100" height="40" rx="4" fill="rgba(14, 165, 233, 0.1)" stroke="var(--accent)" />
            <text x="210" y="105" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>DJANGO_AUDIT_LOG</text>
            
            <motion.path d="M 260 100 H 320" stroke="var(--primary)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
            <motion.rect x="320" y="80" width="60" height="40" rx="4" fill="rgba(59, 130, 246, 0.1)" stroke="var(--primary)" />
            <text x="350" y="105" textAnchor="middle" fill="white" style={{ fontSize: '7px' }}>TREASURY</text>
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Generic HUD Flow */}
            <motion.rect x="50" y="80" width="300" height="40" rx="4" fill="rgba(59, 130, 246, 0.05)" stroke="var(--primary)" strokeDasharray="4 4" />
            <text x="200" y="105" textAnchor="middle" fill="white" style={{ fontSize: '8px' }}>OPERATIONAL_STATE_MACHINE_LOADING...</text>
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full h-[300px] border border-[var(--border)] rounded-xl overflow-hidden bg-[rgba(0,0,0,0.2)] p-6">
      <div className="mono text-[0.6rem] text-[var(--primary)] opacity-50 absolute top-4 left-4">
        HUD_ANALYSIS::{id?.toUpperCase() || 'CORE_SYSTEM'}
      </div>
      
      {renderDiagram()}

      <div className="absolute bottom-4 right-4 flex gap-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[var(--primary)]" />
          <span className="mono text-[0.5rem] opacity-50">SYNC</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[var(--accent)]" />
          <span className="mono text-[0.5rem] opacity-50">FLOW</span>
        </div>
      </div>
    </div>
  );
}
