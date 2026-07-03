'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useOpsFlow, OpsRequest, TRANSITIONS } from '../store';

export default function ApprovalsPage() {
  const { requests, transition } = useOpsFlow();
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const pending = requests.filter(r => r.status === 'PENDING');
  const resolved = requests.filter(r => r.status !== 'PENDING');

  const renderHistory = (req: OpsRequest) => (
    <div className="ops-flow-track" style={{ marginTop: '0.6rem' }}>
      {req.history.map((h, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          {i === 0 && <span className="ops-flow-node">{h.from}</span>}
          <span className="ops-flow-arrow">→</span>
          <span className={`ops-flow-node ${i === req.history.length - 1 ? 'ops-flow-node-active' : ''}`}>
            {h.to}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div style={{ maxWidth: '760px' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <div className="section-tag">{isEn ? 'WORKFLOW.AUTHORIZE' : 'WORKFLOW.AUTORIZAR'}</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          {isEn ? 'Approvals' : 'Aprobaciones'}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '560px' }}>
          {isEn
            ? 'Only the transitions allowed by the state machine appear as actions. An APPROVED request offers none: it is a terminal state.'
            : 'Solo aparecen como acciones las transiciones que permite la máquina de estados. Una solicitud APPROVED no ofrece ninguna: es un estado terminal.'}
        </p>
      </header>

      <div className="ops-label" style={{ marginBottom: '1rem' }}>
        {isEn ? `PENDING QUEUE [${pending.length}]` : `COLA PENDIENTE [${pending.length}]`}
      </div>

      {pending.length === 0 ? (
        <div className="ops-card" style={{ textAlign: 'center', padding: '2.5rem', marginBottom: '2.5rem' }}>
          <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            {isEn ? 'QUEUE_EMPTY // NOTHING TO AUTHORIZE' : 'COLA_VACÍA // NADA PARA AUTORIZAR'}
          </div>
          <Link href="/opsflow/new" className="btn-modern" style={{ marginTop: '1.25rem', display: 'inline-flex' }}>
            {isEn ? 'CREATE_ONE' : 'CREAR_UNA'}
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          {pending.map(req => (
            <div key={req.id} className="ops-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    {req.id} · {req.requester}
                  </div>
                  <div style={{ fontWeight: 600 }}>{req.title}</div>
                  {renderHistory(req)}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                  {TRANSITIONS.PENDING.map(next => (
                    <button
                      key={next}
                      onClick={() => transition(req.id, next)}
                      className="btn-modern"
                      style={{
                        fontSize: '0.62rem',
                        borderColor: next === 'APPROVED' ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)',
                        color: next === 'APPROVED' ? '#34d399' : '#f87171',
                        background: 'transparent',
                      }}
                    >
                      {next === 'APPROVED'
                        ? (isEn ? 'APPROVE' : 'APROBAR')
                        : (isEn ? 'REJECT' : 'RECHAZAR')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="ops-label" style={{ marginBottom: '1rem' }}>
        {isEn ? `RESOLVED [${resolved.length}]` : `RESUELTAS [${resolved.length}]`}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {resolved.map(req => (
          <div key={req.id} className="ops-card" style={{ opacity: 0.85 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  {req.id} · {req.requester}
                </div>
                <div style={{ fontWeight: 600 }}>{req.title}</div>
                {renderHistory(req)}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
                <span className={`ops-status ${req.status === 'APPROVED' ? 'ops-status-approved' : 'ops-status-rejected'}`}>
                  {req.status}
                </span>
                {TRANSITIONS[req.status].map(next => (
                  <button
                    key={next}
                    onClick={() => transition(req.id, next)}
                    className="btn-modern"
                    style={{ fontSize: '0.62rem' }}
                  >
                    {isEn ? 'RESUBMIT' : 'REENVIAR'} → {next}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
