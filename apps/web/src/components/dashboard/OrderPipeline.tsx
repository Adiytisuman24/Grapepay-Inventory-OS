'use client';

import React from 'react';
import styles from './dashboard.module.css';
import { Card } from '../ui/Card';
import { MoreHorizontal, Clock, AlertCircle } from 'lucide-react';

const stages = [
  { id: 'placed', label: 'Placed', count: 42, color: 'var(--text-muted)' },
  { id: 'reserved', label: 'Reserved', count: 18, color: 'var(--info)' },
  { id: 'picking', label: 'Picking', count: 24, color: 'var(--warning)', alert: true },
  { id: 'packed', label: 'Packed', count: 15, color: 'var(--success)' },
  { id: 'assigned', label: 'Assigned', count: 12, color: 'var(--primary)' },
  { id: 'delivery', label: 'Delivery', count: 31, color: 'var(--primary)', pulse: true },
];

export const OrderPipeline = () => {
  return (
    <Card 
      title="Real-Time Order Pipeline" 
      subtitle="Live lifecycle monitoring across all dark stores"
      action={<button className={styles.iconBtn}><MoreHorizontal size={18} /></button>}
    >
      <div className={styles.pipeline}>
        {stages.map((stage) => (
          <div key={stage.id} className={styles.stage}>
            <div className={styles.stageHeader}>
              <span className={styles.stageLabel}>{stage.label}</span>
              <span className={styles.stageCount}>{stage.count}</span>
            </div>
            <div className={styles.stageBar}>
              <div 
                className={`${styles.stageProgress} ${stage.pulse ? styles.pulse : ''} ${stage.alert ? styles.alert : ''}`} 
                style={{ height: `${Math.min(stage.count * 2, 100)}%`, background: stage.color }}
              ></div>
            </div>
            {stage.alert && (
              <div className={styles.stageAlert}>
                <AlertCircle size={12} />
                <span>Bottleneck</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
