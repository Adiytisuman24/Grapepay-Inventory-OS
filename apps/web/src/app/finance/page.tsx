'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  DollarSign, 
  TrendingUp, 
  ArrowDown, 
  PieChart, 
  CreditCard, 
  Wallet, 
  Receipt,
  Scale
} from 'lucide-react';

export default function FinancePage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Financial Snapshot</h2>
          <p style={{ color: 'var(--text-secondary)' }}>ERP integration and operational profitability analysis</p>
        </div>
      </div>

      <div className={styles.col4}>
        <Card title="Revenue Today" subtitle="Net after returns">
          <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>$142,504</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 600 }}>+14% vs Same Day Last Week</div>
        </Card>
      </div>

      <div className={styles.col4}>
        <Card title="Gross Margin" subtitle="Product margin before fulfillment">
          <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>32.4%</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 600 }}>+1.2% Target achievement</div>
        </Card>
      </div>

      <div className={styles.col4}>
        <Card title="Contribution Margin" subtitle="Operating profit by store">
          <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>18.2%</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--warning)', fontWeight: 600 }}>0.8% below 19% Goal</div>
        </Card>
      </div>

      <div className={styles.col8}>
        <Card title="Unit Economics Breakdown" subtitle="Cost components per delivery">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Fulfillment</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>$1.12</div>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Rider Cost</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>$0.85</div>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Holding Cost</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>$0.14</div>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Shrinkage</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>$0.02</div>
              </div>
           </div>
        </Card>
      </div>

      <div className={styles.col4}>
        <Card title="Refund Liability" subtitle="Current pending claims">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--danger)' }}>$4,120</div>
             <div style={{ padding: '0.25rem 0.5rem', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', borderRadius: '4px', fontSize: '0.7rem' }}>+12% spike</div>
          </div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mainly from: Out of stock substitutions</p>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Cash Management" subtitle="Settlement status">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span>Wallet Balance</span>
                <span style={{ fontWeight: 700 }}>$840.2K</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span>Unsettled Rider Payouts</span>
                <span style={{ fontWeight: 700 }}>$42.5K</span>
              </div>
           </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Profitability by Zone" subtitle="Contribution margin ranking">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span>Zone A (HSR)</span>
                <span style={{ color: 'var(--success)', fontWeight: 700 }}>24.2%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span>Zone B (Indiranagar)</span>
                <span style={{ color: 'var(--success)', fontWeight: 700 }}>21.5%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span>Zone C (Koramangala)</span>
                <span style={{ color: 'var(--warning)', fontWeight: 700 }}>12.8%</span>
              </div>
           </div>
        </Card>
      </div>
    </div>
  );
}
