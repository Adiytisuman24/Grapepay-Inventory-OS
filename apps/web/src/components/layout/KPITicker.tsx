'use client';

import React, { useState, useEffect } from 'react';
import styles from './layout.module.css';
import { TrendingUp, Clock, Package, CheckCircle, AlertTriangle, Users } from 'lucide-react';

const INITIAL_KPIS = [
  { label: 'Total Orders', value: 1284, icon: Package, trend: '+12%', color: 'var(--primary)', isCurrency: false },
  { label: 'GMV Today', value: 42500, icon: TrendingUp, trend: '+8.4%', color: 'var(--success)', isCurrency: true },
  { label: 'Orders/Min', value: 4.2, icon: Clock, trend: 'Live', color: 'var(--info)', isCurrency: false },
  { label: 'SLA Success', value: 98.2, icon: CheckCircle, trend: '+0.5%', color: 'var(--success)', isPercent: true },
  { label: 'Avg Delivery', value: 14, icon: Clock, trend: '-2m', color: 'var(--info)', suffix: 'm' },
  { label: 'Cancel Rate', value: 0.8, icon: AlertTriangle, trend: '-0.2%', color: 'var(--danger)', isPercent: true },
  { label: 'Active Riders', value: 154, icon: Users, trend: 'Optimal', color: 'var(--primary)' },
];

export const KPITicker = () => {
  const [data, setData] = useState(INITIAL_KPIS);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(item => {
        if (item.label === 'Total Orders') return { ...item, value: (item.value as number) + 1 };
        if (item.label === 'GMV Today') return { ...item, value: (item.value as number) + Math.floor(Math.random() * 50) };
        if (item.label === 'Orders/Min') return { ...item, value: Number(((item.value as number) + (Math.random() * 0.2 - 0.1)).toFixed(1)) };
        return item;
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.kpiStrip}>
      <div className={styles.kpiTicker}>
        {[...data, ...data].map((kpi, index) => (
          <div key={index} className={styles.kpiItem}>
            <kpi.icon size={14} color={kpi.color} />
            <span className={styles.kpiLabel}>{kpi.label}</span>
            <span className={styles.kpiValue}>
              {kpi.isCurrency ? `$${kpi.value.toLocaleString()}` : 
               kpi.isPercent ? `${kpi.value}%` : 
               kpi.suffix ? `${kpi.value}${kpi.suffix}` : kpi.value.toString()}
            </span>
            <span className={styles.kpiTrend} style={{ color: kpi.trend.startsWith('+') ? 'var(--success)' : kpi.trend.startsWith('-') ? 'var(--danger)' : 'var(--text-muted)' }}>
              {kpi.trend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
