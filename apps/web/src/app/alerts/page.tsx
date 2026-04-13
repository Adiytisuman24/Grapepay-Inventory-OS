'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  Bell, 
  AlertTriangle, 
  ShieldAlert, 
  ServerCrash, 
  Truck, 
  Clock, 
  Store,
  CreditCard
} from 'lucide-react';

export default function AlertsPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--danger)' }}>Exception & Alert Center</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Live operational fires and SLA breaches</p>
          </div>
          <button style={{ padding: '0.6rem 1rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>Mark All as Resolved</button>
        </div>
      </div>

      <div className={styles.col12}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
           <div style={{ padding: '1.5rem', background: '#fff1f2', borderRadius: '16px', border: '1px solid #fecdd3', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#be123c', fontWeight: 700, textTransform: 'uppercase' }}>Critical</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#9f1239' }}>12</div>
           </div>
           <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '16px', border: '1px solid #fef3c7', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#b45309', fontWeight: 700, textTransform: 'uppercase' }}>Warning</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#92400e' }}>42</div>
           </div>
           <div style={{ padding: '1.5rem', background: '#f0f9ff', borderRadius: '16px', border: '1px solid #bae6fd', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#0369a1', fontWeight: 700, textTransform: 'uppercase' }}>Info</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#075985' }}>154</div>
           </div>
           <div style={{ padding: '1.5rem', background: '#f0fdf4', borderRadius: '16px', border: '1px solid #bbf7d0', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#15803d', fontWeight: 700, textTransform: 'uppercase' }}>Resolved</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#166534' }}>1,842</div>
           </div>
        </div>
      </div>

      <div className={styles.col12}>
        <Card title="Live Exception Feed" subtitle="Real-time operational alerts">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { type: 'Critical', icon: Store, title: 'Store SLA Breach (Indiranagar)', desc: '14 orders stale for more than 25 minutes. Picker shortage detected.', time: '2m ago' },
                { type: 'Critical', icon: Truck, title: 'Rider Shortage (HSR Sector 7)', desc: 'Demand spike (42%) outstripping rider density (12 available).', time: '5m ago' },
                { type: 'Warning', icon: ShieldAlert, title: 'Stockout Risk: Amul Milk 1L', desc: 'Depleting at 4x normal rate. Expected zero in 42 minutes.', time: '12m ago' },
                { type: 'Info', icon: CreditCard, title: 'Payment Gateway Latency', desc: 'Internal API response time increased to 800ms (Normal: 120ms).', time: '18m ago' },
                { type: 'Warning', icon: ServerCrash, title: 'Inventory API Mismatch', desc: 'Stock drift of -14 units detected during shelf scan at Koramangala.', time: '24m ago' },
              ].map((alert, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '1.25rem', background: alert.type === 'Critical' ? '#fff1f2' : '#f8fafc', borderRadius: '12px', border: alert.type === 'Critical' ? '1px solid #fecdd3' : '1px solid var(--card-border)' }}>
                   <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                      <alert.icon size={24} color={alert.type === 'Critical' ? '#e11d48' : '#64748b'} />
                   </div>
                   <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                         <span style={{ fontSize: '1rem', fontWeight: 700, color: alert.type === 'Critical' ? '#9f1239' : 'var(--text-primary)' }}>{alert.title}</span>
                         <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{alert.time}</span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: alert.type === 'Critical' ? '#be123c' : 'var(--text-secondary)', margin: 0 }}>{alert.desc}</p>
                   </div>
                   <div style={{ alignSelf: 'center' }}>
                      <button style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid var(--card-border)', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600 }}>Resolve</button>
                   </div>
                </div>
              ))}
           </div>
        </Card>
      </div>
    </div>
  );
}
