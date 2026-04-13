'use client';

import React from 'react';
import styles from './dashboard.module.css';
import { Card } from '../ui/Card';
import { MapPin, Users, Package } from 'lucide-react';

const stores = [
  { name: 'Indiranagar MFC', city: 'Bangalore', orders: 154, util: 82, pickers: 12, health: 'Optimal' },
  { name: 'Koramangala Dark', city: 'Bangalore', orders: 121, util: 95, pickers: 8, health: 'Congested' },
  { name: 'HSR Layout Node', city: 'Bangalore', orders: 89, util: 45, pickers: 15, health: 'Idle' },
];

export const DarkStoreOps = () => {
  return (
    <Card 
      title="Dark Store Operations" 
      subtitle="Micro-fulfillment center health index"
    >
      <div className={styles.storeGrid}>
        {stores.map((store) => (
          <div key={store.name} className={styles.storeItem}>
            <div className={styles.storeInfo}>
              <h4>{store.name}</h4>
              <p><MapPin size={12} style={{ marginRight: 4 }} />{store.city}</p>
            </div>
            <div className={styles.storeUtilization}>
              <div className={styles.utilText}>Utilization: {store.util}%</div>
              <div className={styles.utilBar}>
                <div 
                  className={styles.utilProgress} 
                  style={{ 
                    width: `${store.util}%`, 
                    background: store.util > 90 ? 'var(--danger)' : store.util > 70 ? 'var(--warning)' : 'var(--success)' 
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.storePickers}>
              <div className={styles.utilText}>Pickers</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{store.pickers}</div>
            </div>
            <div className={styles.storeHealth}>
              <span style={{ 
                fontSize: '0.7rem', 
                fontWeight: 700, 
                color: store.health === 'Congested' ? 'var(--danger)' : store.health === 'Optimal' ? 'var(--success)' : 'var(--info)'
              }}>
                {store.health}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
