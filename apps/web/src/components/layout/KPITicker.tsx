'use client';

import React from 'react';
import styles from './layout.module.css';
import { TrendingUp, Clock, Package, CheckCircle, AlertTriangle, Users } from 'lucide-react';

const kpis = [
  { label: 'Total Orders', value: '1,284', icon: Package, trend: '+12%', color: 'var(--primary)' },
  { label: 'GMV Today', value: '$42,500', icon: TrendingUp, trend: '+8.4%', color: 'var(--success)' },
  { label: 'Orders/Min', value: '4.2', icon: Clock, trend: 'Live', color: 'var(--info)' },
  { label: 'SLA Success', value: '98.2%', icon: CheckCircle, trend: '+0.5%', color: 'var(--success)' },
  { label: 'Avg Delivery', value: '14m', icon: Clock, trend: '-2m', color: 'var(--info)' },
  { label: 'Cancel Rate', value: '0.8%', icon: AlertTriangle, trend: '-0.2%', color: 'var(--danger)' },
  { label: 'Active Riders', value: '154', icon: Users, trend: 'Optimal', color: 'var(--primary)' },
];

export const KPITicker = () => {
  return (
    <div className={styles.kpiStrip}>
      <div className={styles.kpiTicker}>
        {[...kpis, ...kpis].map((kpi, index) => (
          <div key={index} className={styles.kpiItem}>
            <kpi.icon size={16} color={kpi.color} />
            <span className={styles.kpiLabel}>{kpi.label}</span>
            <span className={styles.kpiValue}>{kpi.value}</span>
            <span className={styles.kpiTrend} style={{ color: kpi.trend.startsWith('+') ? 'var(--success)' : kpi.trend.startsWith('-') ? 'var(--danger)' : 'var(--text-muted)' }}>
              {kpi.trend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
