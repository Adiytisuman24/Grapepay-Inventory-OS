'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  ArrowDown, 
  BarChart2, 
  Calendar,
  Layers,
  ShoppingBag
} from 'lucide-react';

export default function InventoryPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Inventory Intelligence</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Centralized stock control and SKU velocity analysis</p>
        </div>
      </div>

      <div className={styles.col3}>
        <Card title="Real-Time Stock" subtitle="Total SKUs active">
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>24,582</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>+420 Today</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Out of Stock" subtitle="Items missing from shelves">
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--danger)' }}>142</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>4.2% of total range</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Low Stock Alerts" subtitle="Items below threshold">
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--warning)' }}>384</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Refill recommended</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Wastage Rate" subtitle="Expired or damaged">
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>1.2%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>-0.5% vs Prev Month</div>
        </Card>
      </div>

      <div className={styles.col8}>
        <Card title="SKU Velocity Heatmap" subtitle="Fast vs Slow moving items">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '4px', height: '160px' }}>
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className={styles.velocityBlock}
                style={{ 
                  background: `rgba(124, 58, 237, ${Math.random()})`, 
                  borderRadius: '2px',
                  height: '30px'
                }}
              ></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.7rem' }}>
            <span>Dead Stock (0-1 units/day)</span>
            <span>Hyper-Fast (&gt;50 units/day)</span>
          </div>
        </Card>
      </div>

      <div className={styles.col4}>
        <Card title="Predicted Stockouts" subtitle="Expected in next 12h">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: '#f8fafc', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Item {i*42} SKU</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 700 }}>4.2h left</div>
                </div>
              ))}
           </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Near Expiry / Expiring Soon" subtitle="Action required within 48h">
          <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--text-muted)', borderBottom: '1px solid var(--card-border)' }}>
                <th style={{ padding: '0.5rem 0' }}>SKU</th>
                <th>Store</th>
                <th>Expiry</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem 0' }}>Bread Whole Wheat</td>
                <td>Indiranagar</td>
                <td>14 Apr</td>
                <td>24</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 0' }}>Milk Organic 500ml</td>
                <td>HSR Layout</td>
                <td>15 Apr</td>
                <td>112</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Inventory Health Index" subtitle="Days of Inventory & Turnover">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: '#f5f3ff', borderRadius: '12px', textAlign: 'center' }}>
               <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Inventory Turnover</div>
               <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>14.2x</div>
            </div>
            <div style={{ padding: '1rem', background: '#f5f3ff', borderRadius: '12px', textAlign: 'center' }}>
               <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Days Forward Cover</div>
               <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>8 Days</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
