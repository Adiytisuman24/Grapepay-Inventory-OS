'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { RiderControlTower } from '@/components/dashboard/RiderControlTower';
import { Truck, Clock, Navigation, Map, Ruler, Users, AlertCircle } from 'lucide-react';

export default function DeliveryPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Delivery Control Tower</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Fleet management, route efficiency, and live rider tracking</p>
        </div>
      </div>

      <div className={styles.col3}>
        <Card title="Active Riders" subtitle="On-road right now">
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>1,842</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>96% Fleet Active</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Avg ETA" subtitle="Commitment vs Actual">
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>12.4m</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>-1.2m vs Target</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Late Deliveries" subtitle="SLA Breach risk">
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--danger)' }}>14</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>0.8% of daily total</div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Route Efficiency" subtitle="Distance optimization">
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>94%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>Top Tier efficiency</div>
        </Card>
      </div>

      <RiderControlTower />

      <div className={styles.col4}>
        <Card title="Rider Status Breakdown" subtitle="Real-time occupancy">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem' }}>Idle</span>
                <span style={{ fontWeight: 700 }}>142</span>
              </div>
              <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px' }}>
                <div style={{ width: '15%', height: '100%', background: 'var(--text-muted)', borderRadius: '4px' }}></div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem' }}>Assigned</span>
                <span style={{ fontWeight: 700 }}>241</span>
              </div>
              <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px' }}>
                <div style={{ width: '35%', height: '100%', background: 'var(--info)', borderRadius: '4px' }}></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem' }}>Picking Up</span>
                <span style={{ fontWeight: 700 }}>118</span>
              </div>
              <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px' }}>
                <div style={{ width: '22%', height: '100%', background: 'var(--warning)', borderRadius: '4px' }}></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem' }}>Delivering</span>
                <span style={{ fontWeight: 700 }}>845</span>
              </div>
              <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px' }}>
                <div style={{ width: '65%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
              </div>
           </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Rider Efficiency Metrics" subtitle="Performance by delivery">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Orders/Rider</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>8.4</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Dist/Delivery</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>2.1km</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Util %</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>91%</div>
              </div>
           </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Live Heatmap Summary" subtitle="Demand hotspots vs Rider density">
           <div style={{ padding: '1rem', background: '#f5f3ff', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
             <AlertCircle color="var(--primary)" />
             <div style={{ fontSize: '0.85rem' }}>
                <strong>Surge Predicted:</strong> HSR Layout Zone 2 expects 40% volume spike in 15 mins.
             </div>
           </div>
        </Card>
      </div>
    </div>
  );
}
