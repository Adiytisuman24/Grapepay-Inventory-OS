'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  Zap, 
  Split, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Boxes, 
  UserPlus, 
  Route
} from 'lucide-react';

export default function DispatchPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Dispatch Optimization Panel</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Operational AI brain: Batching, Multi-routing, and Surge control</p>
        </div>
      </div>

      <div className={styles.col8}>
        <Card title="Live Batch Opportunities" subtitle="AI-suggested multi-order groupings">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { id: 'BATCH-A2', orders: 3, store: 'HSR Dark-1', savings: '2.4km', efficiency: '+32%' },
                { id: 'BATCH-B9', orders: 2, store: 'Koramangala Node', savings: '1.8km', efficiency: '+24%' },
                { id: 'BATCH-C4', orders: 4, store: 'Indiranagar MFC', savings: '4.1km', efficiency: '+48%' },
              ].map((batch, i) => (
                <div key={i} style={{ padding: '1.25rem', background: '#f5f3ff', borderRadius: '16px', border: '1px solid rgba(124, 58, 237, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                      <div style={{ padding: '0.75rem', background: 'white', borderRadius: '12px' }}>
                         <Boxes color="var(--primary)" size={24} />
                      </div>
                      <div>
                         <div style={{ fontSize: '1rem', fontWeight: 800 }}>{batch.id}</div>
                         <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{batch.orders} Orders ➔ {batch.store}</div>
                      </div>
                   </div>
                   <div style={{ textAlign: 'right', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                      <div>
                         <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--success)' }}>{batch.efficiency}</div>
                         <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Efficiency Gain</div>
                      </div>
                      <button style={{ padding: '0.6rem 1.25rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem' }}>Dispatch</button>
                   </div>
                </div>
              ))}
           </div>
        </Card>
      </div>

      <div className={styles.col4}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card title="Dispatch Delay Alerts" subtitle="Potential bottlenecks">
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.05)', borderLeft: '3px solid var(--danger)', borderRadius: '4px' }}>
                   <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--danger)' }}>12m Delay in HSR</div>
                   <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Rider handover bottleneck at Gate 2.</div>
                </div>
                <div style={{ padding: '0.75rem', background: 'rgba(245, 158, 11, 0.05)', borderLeft: '3px solid var(--warning)', borderRadius: '4px' }}>
                   <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--warning)' }}>Reassignment Required</div>
                   <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Rider R-882 inactive for 15 mins.</div>
                </div>
             </div>
          </Card>
          
          <Card title="Dynamic Surge Recommendations" subtitle="Revenue & velocity balance">
             <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Current Surge</div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)' }}>1.4x</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, marginTop: '0.25rem' }}>AI Suggests: 1.6x for 42 mins</div>
             </div>
          </Card>
        </div>
      </div>

      <div className={styles.col6}>
        <Card title="Suggested Routes" subtitle="AI Optimized distance vs time">
           <div style={{ height: '180px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
              <Route size={64} color="var(--primary)" opacity={0.2} />
           </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Rider Reassignment" subtitle="Auto-balance underutilized fleet">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>AI has identified 8 idle riders in Zone B. Suggest moving to Zone A (High Demand).</p>
              <button style={{ width: '100%', padding: '0.75rem', background: '#f5f3ff', border: '1px solid var(--primary)', color: 'var(--primary)', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem' }}>Deploy Rebalancing Plan</button>
           </div>
        </Card>
      </div>
    </div>
  );
}
