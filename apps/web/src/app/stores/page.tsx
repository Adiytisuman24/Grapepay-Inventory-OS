'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { DarkStoreOps as DarkStoreOpsComp } from '@/components/dashboard/DarkStoreOps';
import { Store, Users, ShoppingCart, Target, Activity, Zap, Box, Trash2, Home } from 'lucide-react';

export default function StoresPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Dark Store Operations</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Micro-fulfillment center performance and capacity utilization</p>
        </div>
      </div>

      <div className={styles.col12}>
        <DarkStoreOpsComp />
      </div>

      <div className={styles.col4}>
        <Card title="Capacity Utilization" subtitle="Storage and fulfillment bounds">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid var(--card-border)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Storage</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>82%</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid var(--card-border)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Throughput</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>94%</div>
              </div>
           </div>
        </Card>
      </div>

      <div className={styles.col4}>
        <Card title="Warehouse Efficiency" subtitle="Picking and replenishment">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                 <span>Picking Accuracy</span>
                 <span style={{ fontWeight: 700, color: 'var(--success)' }}>99.8%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                 <span>Replenishment Delay</span>
                 <span style={{ fontWeight: 700, color: 'var(--warning)' }}>12m avg</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                 <span>Wastage %</span>
                 <span style={{ fontWeight: 700, color: 'var(--danger)' }}>0.42%</span>
              </div>
           </div>
        </Card>
      </div>

      <div className={styles.col4}>
        <Card title="Store Network Value" subtitle="Total inventory valuation">
           <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
             <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>$14.2M</div>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span className={styles.status} style={{ fontSize: '0.65rem' }}>Active: 42 Stores</span>
                <span className={styles.status} style={{ fontSize: '0.65rem', color: 'var(--warning)', background: 'rgba(245, 158, 11, 0.1)' }}>Maintenance: 1</span>
             </div>
           </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="SKU Health Breakdown" subtitle="Moving pace analysis">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 2fr) 1fr', gap: '1rem' }}>
             <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>FAST MOVING</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>1,240 SKUs</div>
             </div>
             <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>DEAD STOCK</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>312 SKUs</div>
             </div>
          </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Store Heat Map Index" subtitle="Congestion and queue length">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>8.4 / 10</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--danger)' }}>High Congestion in 4 stores</div>
             </div>
             <Activity size={32} color="var(--danger)" />
           </div>
        </Card>
      </div>
    </div>
  );
}
