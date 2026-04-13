'use client';

import React from 'react';
import styles from './dashboard.module.css';
import { Card } from '../ui/Card';
import { AlertTriangle, ArrowDown, TrendingUp } from 'lucide-react';

const alerts = [
  { item: 'Organic Milk 1L', store: 'Indiranagar', status: 'Out of Stock', risk: 'High' },
  { item: 'Avocado Hass (Pack of 2)', store: 'HSR Layout', status: 'Low Stock (5 left)', risk: 'Medium' },
  { item: 'Coca-Cola 500ml', store: 'Koramangala', status: 'Near Expiry (2d)', risk: 'High' },
];

export const InventoryIntelligence = () => {
  return (
    <Card 
      title="Inventory Intelligence" 
      subtitle="AI-driven stockout prediction & expiry alerts"
    >
      <div className={styles.alertList}>
        {alerts.map((alert, index) => (
          <div key={index} className={styles.alertItem} style={{ borderLeftColor: alert.risk === 'High' ? 'var(--danger)' : 'var(--warning)' }}>
            <div className={styles.alertIcon}>
              <AlertTriangle size={18} color={alert.risk === 'High' ? 'var(--danger)' : 'var(--warning)'} />
            </div>
            <div className={styles.alertContent}>
              <h5>{alert.item}</h5>
              <p>{alert.store} • <strong>{alert.status}</strong></p>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <button className={styles.iconBtn}>
                <TrendingUp size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
