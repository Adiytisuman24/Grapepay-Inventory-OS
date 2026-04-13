'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  BrainCircuit, 
  CloudRain, 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  Activity,
  ArrowRightLeft
} from 'lucide-react';

export default function ForecastPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>AI Forecasting & Predictive Insights</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Future radar for demand, stockouts, and surge events</p>
        </div>
      </div>

      <div className={styles.col8}>
        <Card title="Demand Forecast by Zone" subtitle="Next 24h volume prediction">
           <div style={{ height: '240px', background: '#f8fafc', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
              {/* Simulated Chart */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', padding: '1rem', gap: '8px' }}>
                 {Array.from({ length: 24 }).map((_, i) => (
                   <div key={i} style={{ flex: 1, background: i > 12 ? 'var(--secondary)' : 'var(--primary)', height: `${30 + Math.sin(i * 0.5) * 50}%`, borderRadius: '4px', opacity: i > 12 ? 0.6 : 1 }}></div>
                 ))}
              </div>
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.7rem' }}>
             <span>NOW (19:00)</span>
             <span>TOMORROW (19:00)</span>
           </div>
        </Card>
      </div>

      <div className={styles.col4}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card title="Surge Demand Alert" subtitle="Real-time hotzones">
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Zap size={32} color="var(--warning)" />
                <div>
                   <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>38% Spike</div>
                   <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Expected in Indiranagar @ 20:30</div>
                </div>
             </div>
          </Card>
          
          <Card title="Weather Impact" subtitle="Operational adjust recommendations">
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CloudRain size={32} color="var(--info)" />
                <div>
                   <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Rain Expected</div>
                   <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>In 2h. Suggest +15% Dynamic Surge</div>
                </div>
             </div>
          </Card>
        </div>
      </div>

      <div className={styles.col6}>
        <Card title="Stockout Prediction" subtitle="Critical risk for next 6h">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { sku: 'Banana Robusta 500g', prob: '94%', time: '1.5h' },
                { sku: 'Eggs (Pack of 6)', prob: '82%', time: '3.0h' },
                { sku: 'Curd 500g', prob: '75%', time: '4.2h' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                   <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.sku}</span>
                   <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--danger)' }}>{item.prob} prob.</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>~{item.time} stock left</div>
                   </div>
                </div>
              ))}
           </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Suggested Inventory Transfers" subtitle="Load rebalancing between dark stores">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
             {[
               { from: 'Koramangala', to: 'HSR Layout', qty: '400 units', item: 'Cold Drinks' },
               { from: 'Indiranagar', to: 'Domlur', qty: '120 units', item: 'Bread & Dairy' },
             ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem', background: '#f5f3ff', borderRadius: '8px', border: '1px solid rgba(124, 58, 237, 0.1)' }}>
                   <ArrowRightLeft size={20} color="var(--primary)" />
                   <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.item}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{item.from} ➔ {item.to}</div>
                   </div>
                   <button style={{ padding: '0.4rem 0.8rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600 }}>Approve</button>
                </div>
             ))}
           </div>
        </Card>
      </div>
    </div>
  );
}
