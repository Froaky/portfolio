'use client';

import { useSyncExternalStore } from 'react';

export type OpsStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface OpsTransition {
  from: OpsStatus | 'CREATED';
  to: OpsStatus;
  at: string;
}

export interface OpsRequest {
  id: string;
  title: string;
  requester: string;
  createdAt: string;
  status: OpsStatus;
  history: OpsTransition[];
}

/* La máquina de estados: toda transición que no figure acá es ilegal
   y el store la rechaza — igual que en el sistema real que este demo ilustra. */
export const TRANSITIONS: Record<OpsStatus, OpsStatus[]> = {
  PENDING: ['APPROVED', 'REJECTED'],
  APPROVED: [],
  REJECTED: ['PENDING'],
};

export function canTransition(from: OpsStatus, to: OpsStatus): boolean {
  return TRANSITIONS[from].includes(to);
}

const STORAGE_KEY = 'froaky-opsflow-requests';
const CHANGE_EVENT = 'froaky-opsflow-change';

const SEED: OpsRequest[] = [
  {
    id: 'REQ-001',
    title: 'New Laptop for Onboarding',
    requester: 'John Doe',
    createdAt: '2026-06-28T10:15:00.000Z',
    status: 'PENDING',
    history: [{ from: 'CREATED', to: 'PENDING', at: '2026-06-28T10:15:00.000Z' }],
  },
  {
    id: 'REQ-002',
    title: 'Cloud Credits Increase',
    requester: 'Jane Smith',
    createdAt: '2026-06-29T14:40:00.000Z',
    status: 'APPROVED',
    history: [
      { from: 'CREATED', to: 'PENDING', at: '2026-06-29T14:40:00.000Z' },
      { from: 'PENDING', to: 'APPROVED', at: '2026-06-30T09:05:00.000Z' },
    ],
  },
  {
    id: 'REQ-003',
    title: 'Database Access - Production',
    requester: 'Bob Wilson',
    createdAt: '2026-06-30T16:20:00.000Z',
    status: 'REJECTED',
    history: [
      { from: 'CREATED', to: 'PENDING', at: '2026-06-30T16:20:00.000Z' },
      { from: 'PENDING', to: 'REJECTED', at: '2026-07-01T11:30:00.000Z' },
    ],
  },
];

// Cache para que getSnapshot devuelva la misma referencia entre eventos.
let snapshot: OpsRequest[] | null = null;

function getRequests(): OpsRequest[] {
  if (snapshot) return snapshot;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    snapshot = saved ? (JSON.parse(saved) as OpsRequest[]) : SEED;
  } catch {
    snapshot = SEED;
  }
  return snapshot;
}

function setRequests(next: OpsRequest[]) {
  snapshot = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Sin persistencia disponible: el estado vive solo en memoria.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onStoreChange: () => void) {
  const invalidateAndNotify = () => {
    onStoreChange();
  };
  const onStorage = () => {
    snapshot = null; // otro tab pudo haber escrito
    onStoreChange();
  };
  window.addEventListener(CHANGE_EVENT, invalidateAndNotify);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, invalidateAndNotify);
    window.removeEventListener('storage', onStorage);
  };
}

export function createRequest(title: string, requester: string): OpsRequest {
  const requests = getRequests();
  const now = new Date().toISOString();
  const request: OpsRequest = {
    id: `REQ-${String(requests.length + 1).padStart(3, '0')}`,
    title,
    requester,
    createdAt: now,
    status: 'PENDING',
    history: [{ from: 'CREATED', to: 'PENDING', at: now }],
  };
  setRequests([request, ...requests]);
  return request;
}

export function transition(id: string, to: OpsStatus): boolean {
  const requests = getRequests();
  const request = requests.find(r => r.id === id);
  if (!request || !canTransition(request.status, to)) return false;

  setRequests(requests.map(r =>
    r.id === id
      ? {
          ...r,
          status: to,
          history: [...r.history, { from: r.status, to, at: new Date().toISOString() }],
        }
      : r
  ));
  return true;
}

export function resetDemo() {
  setRequests(SEED);
}

export function useOpsFlow() {
  const requests = useSyncExternalStore(subscribe, getRequests, () => SEED);
  return { requests, createRequest, transition, reset: resetDemo };
}
