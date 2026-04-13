'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  Database, 
  ShoppingCart, 
  Truck, 
  FileText, 
  Clock, 
  Target, 
  CheckCircle,
  BarChart,
  ArrowRightLeft
} from 'lucide-react';

export default function ProcurementPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Procurement & Replenishment</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Supply chain layer: POs, Vendor SLAs, and Fulfillment</p>
        </div>
      </div>

      <div className={styles.col3}>
        <Card title="Pending POs" subtitle="Awaiting approval">
          <div style={{ fontSize: '2.2rem', fontWeight: 900 }}>42</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--warning)', fontWeight: 600 }}>12 Overdue</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Goods Received" subtitle="Total units today">
          <div style={{ fontSize: '2.2rem', fontWeight: 900 }}>842</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>+12% vs Average</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Avg Lead Time" subtitle="Order to warehouse">
          <div style={{ fontSize: '2.2rem', fontWeight: 900 }}>18.2h</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Baseline: 24h</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Spend Today" subtitle="Procurement value">
          <div style={{ fontSize: '2.2rem', fontWeight: 900 }}>$84.5K</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Target: $100K Max</div>
        </Card>
      </div>

      <div className={styles.col7}>
        <Card title="Replenishment Requests" subtitle="Store-level automated triggers">
           <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 0' }}>Request ID</th>
                  <th>Origin MFC</th>
                  <th>SKU Count</th>
                  <th>Priority</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'RQ-8841', store: 'Koramangala', count: 12, priority: 'Critical', status: 'In Transit' },
                  { id: 'RQ-8842', store: 'Indiranagar', count: 4, priority: 'Medium', status: 'Picking' },
                  { id: 'RQ-8843', store: 'HSR Layout', count: 24, priority: 'High', status: 'Pending' },
                ].map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                    <td style={{ padding: '1rem 0', fontWeight: 700 }}>{item.id}</td>
                    <td>{item.store}</td>
                    <td>{item.count} items</td>
                    <td><span style={{ color: item.priority === 'Critical' ? 'var(--danger)' : item.priority === 'High' ? 'var(--warning)' : 'var(--text-muted)', fontWeight: 800 }}>{item.priority}</span></td>
                    <td><span className={styles.status} style={{ fontSize: '0.65rem' }}>{item.status}</span></td>
                  </tr>
                ))}
              </tbody>
           </table>
        </Card>
      </div>

      <div className={styles.col5}>
        <Card title="Vendor SLA Performance" subtitle="Ranking by reliability">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'FreshGro Ltd', pct: 98, status: 'Top Rated' },
                { name: 'PureDairy Supplies', pct: 86, status: 'Delayed' },
                { name: 'BeverageCorp', pct: 94, status: 'On Track' },
              ].map((vendor, i) => (
                <div key={i}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600 }}>{vendor.name}</span>
                      <span>{vendor.pct}%</span>
                   </div>
                   <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px' }}>
                      <div style={{ width: `${vendor.pct}%`, height: '100%', background: vendor.pct > 95 ? 'var(--success)' : vendor.pct > 90 ? 'var(--primary)' : 'var(--warning)', borderRadius: '3px' }}></div>
                   </div>
                </div>
              ))}
           </div>
        </Card>
      </div>

      <div className={styles.col12}>
        <Card title="Inbound Shipment Tracking" subtitle="Logistics movement to Dark Stores">
           <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', border: '1px dashed var(--card-border)', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                 <div style={{ textAlign: 'center' }}>
                   <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>14</div>
                   <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ON THE WAY</div>
                 </div>
                 <ArrowRightLeft size={32} color="var(--primary)" />
                 <div style={{ textAlign: 'center' }}>
                   <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>8</div>
                   <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ARRIVING 1H</div>
                 </div>
                 <ArrowRightLeft size={32} color="var(--primary)" />
                 <div style={{ textAlign: 'center' }}>
                   <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>22</div>
                   <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>RECEIVED TODAY</div>
                 </div>
              </div>
           </div>
        </Card>
      </div>
    </div>
  );
}
