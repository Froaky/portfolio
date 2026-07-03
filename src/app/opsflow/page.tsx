'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useOpsFlow, OpsStatus } from './store';

const STATUS_CLASS: Record<OpsStatus, string> = {
  PENDING: 'ops-status-pending',
  APPROVED: 'ops-status-approved',
  REJECTED: 'ops-status-rejected',
};

export default function OpsFlowDashboard() {
  const { requests, reset } = useOpsFlow();
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const count = (status: OpsStatus) => requests.filter(r => r.status === status).length;

  const stats: { label: string; value: number; color: string }[] = [
    { label: isEn ? 'PENDING' : 'PENDIENTES', value: count('PENDING'), color: '#818cf8' },
    { label: isEn ? 'APPROVED' : 'APROBADAS', value: count('APPROVED'), color: '#34d399' },
    { label: isEn ? 'REJECTED' : 'RECHAZADAS', value: count('REJECTED'), color: '#f87171' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="section-tag">{isEn ? 'WORKFLOW.CONTROL' : 'CONTROL.WORKFLOWS'}</div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            {isEn ? 'Operations Dashboard' : 'Dashboard de Operaciones'}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '560px' }}>
            {isEn
              ? 'Every request below lives inside an explicit state machine: only the transitions drawn in the diagram can ever happen.'
              : 'Cada solicitud vive dentro de una máquina de estados explícita: solo pueden ocurrir las transiciones dibujadas en el diagrama.'}
          </p>
        </div>
        <button onClick={reset} className="btn-modern" style={{ fontSize: '0.65rem' }}>
          {isEn ? 'RESET_DEMO' : 'REINICIAR_DEMO'}
        </button>
      </header>

      {/* Diagrama de la máquina de estados */}
      <div className="ops-card" style={{ marginBottom: '2rem' }}>
        <div className="ops-label">{isEn ? 'STATE MACHINE' : 'MÁQUINA DE ESTADOS'}</div>
        <div className="ops-flow-track">
          <span className="ops-flow-node">CREATED</span>
          <span className="ops-flow-arrow">→</span>
          <span className="ops-flow-node ops-flow-node-active">PENDING</span>
          <span className="ops-flow-arrow">→</span>
          <span className="ops-flow-node" style={{ borderColor: 'rgba(16,185,129,0.4)', color: '#34d399' }}>APPROVED</span>
          <span className="ops-flow-arrow">|</span>
          <span className="ops-flow-node" style={{ borderColor: 'rgba(239,68,68,0.4)', color: '#f87171' }}>REJECTED</span>
          <span className="ops-flow-arrow">⟲</span>
          <span className="mono" style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>
            {isEn ? 'REJECTED can be resubmitted' : 'RECHAZADA puede reenviarse'}
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {stats.map(stat => (
          <div key={stat.label} className="ops-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: stat.color }}>{stat.value}</div>
            <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="ops-card" style={{ padding: 0, overflowX: 'auto' }}>
        <table className="ops-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>{isEn ? 'Title' : 'Título'}</th>
              <th>{isEn ? 'Requester' : 'Solicitante'}</th>
              <th>{isEn ? 'Date' : 'Fecha'}</th>
              <th>{isEn ? 'Status' : 'Estado'}</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(req => (
              <tr key={req.id}>
                <td className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{req.id}</td>
                <td style={{ fontWeight: 500 }}>{req.title}</td>
                <td style={{ color: 'var(--text-muted)' }}>{req.requester}</td>
                <td className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {req.createdAt.slice(0, 10)}
                </td>
                <td>
                  <span className={`ops-status ${STATUS_CLASS[req.status]}`}>{req.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href="/opsflow/new" className="btn-modern btn-primary-modern">
          {isEn ? 'NEW_REQUEST' : 'NUEVA_SOLICITUD'}
        </Link>
        <Link href="/opsflow/approvals" className="btn-modern">
          {isEn ? 'GO_TO_APPROVALS' : 'IR_A_APROBACIONES'}
        </Link>
      </div>
    </div>
  );
}
