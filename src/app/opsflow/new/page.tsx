'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useOpsFlow } from '../store';

export default function NewRequestPage() {
  const { createRequest } = useOpsFlow();
  const { lang } = useLanguage();
  const router = useRouter();
  const isEn = lang === 'en';

  const [title, setTitle] = useState('');
  const [requester, setRequester] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !requester.trim()) {
      setError(isEn ? 'Both fields are required.' : 'Ambos campos son obligatorios.');
      return;
    }
    createRequest(title.trim(), requester.trim());
    router.push('/opsflow');
  };

  return (
    <div style={{ maxWidth: '560px' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <div className="section-tag">{isEn ? 'WORKFLOW.CREATE' : 'WORKFLOW.CREAR'}</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          {isEn ? 'New Request' : 'Nueva Solicitud'}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          {isEn
            ? 'Submitting creates the request in PENDING — the only entry point the state machine allows.'
            : 'Al enviar, la solicitud nace en PENDING: el único punto de entrada que permite la máquina de estados.'}
        </p>
      </header>

      <form onSubmit={handleSubmit} className="ops-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem' }}>
        <div>
          <label className="ops-label" htmlFor="ops-title">{isEn ? 'REQUEST TITLE' : 'TÍTULO DE LA SOLICITUD'}</label>
          <input
            id="ops-title"
            className="ops-input"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder={isEn ? 'e.g. VPN access for contractor' : 'ej. Acceso VPN para contratista'}
            maxLength={80}
          />
        </div>

        <div>
          <label className="ops-label" htmlFor="ops-requester">{isEn ? 'REQUESTER' : 'SOLICITANTE'}</label>
          <input
            id="ops-requester"
            className="ops-input"
            value={requester}
            onChange={e => setRequester(e.target.value)}
            placeholder={isEn ? 'Your name' : 'Tu nombre'}
            maxLength={40}
          />
        </div>

        {error && (
          <div className="mono" style={{ fontSize: '0.65rem', color: '#f87171' }}>
            [VALIDATION_ERROR] {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button type="submit" className="btn-modern btn-primary-modern">
            {isEn ? 'SUBMIT → PENDING' : 'ENVIAR → PENDING'}
          </button>
          <span className="mono" style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>
            {isEn ? 'TRANSITION: CREATED → PENDING' : 'TRANSICIÓN: CREATED → PENDING'}
          </span>
        </div>
      </form>
    </div>
  );
}
