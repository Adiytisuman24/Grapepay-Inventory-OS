'use client';

import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import { Card } from '../ui/Card';
import { MoreHorizontal, AlertCircle } from 'lucide-react';

const INITIAL_STAGES = [
  { id: 'placed', label: 'Placed', count: 42, color: 'var(--text-muted)' },
  { id: 'reserved', label: 'Reserved', count: 18, color: 'var(--info)' },
  { id: 'picking', label: 'Picking', count: 24, color: 'var(--warning)', alert: true },
  { id: 'packed', label: 'Packed', count: 15, color: 'var(--success)' },
  { id: 'assigned', label: 'Assigned', count: 12, color: 'var(--primary)' },
  { id: 'delivery', label: 'Delivery', count: 31, color: 'var(--primary)', pulse: true },
];

export const OrderPipeline = () => {
  const [data, setData] = useState(INITIAL_STAGES);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const next = [...prev];
        const sourceIdx = Math.floor(Math.random() * 5);
        if (next[sourceIdx].count > 0) {
          next[sourceIdx].count -= 1;
          next[sourceIdx + 1].count += 1;
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card 
      title="Real-Time Order Pipeline" 
      subtitle="Live lifecycle monitoring across all dark stores"
      action={<button className={styles.iconBtn}><MoreHorizontal size={18} /></button>}
    >
      <div className={styles.pipeline}>
        {data.map((stage) => (
          <div key={stage.id} className={styles.stage}>
            <div className={styles.stageHeader}>
              <span className={styles.stageLabel}>{stage.label}</span>
              <span className={styles.stageCount}>{stage.count}</span>
            </div>
            <div className={styles.stageBar}>
              <div 
                className={`${styles.stageProgress} ${stage.pulse ? styles.pulse : ''} ${stage.alert ? styles.alert : ''}`} 
                style={{ height: `${Math.max(10, Math.min(stage.count * 2, 100))}%`, background: stage.color }}
              ></div>
            </div>
            {stage.alert && stage.count > 20 && (
              <div className={styles.stageAlert}>
                <AlertCircle size={10} />
                <span>Bottleneck</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
