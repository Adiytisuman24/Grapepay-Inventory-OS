'use client';

import React from 'react';
import styles from './ui.module.css';

interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  height?: string;
  className?: string;
}

export const Card = ({ title, subtitle, children, action, height, className }: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`} style={{ height }}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleGroup}>
          <h3 style={{ fontSize: '0.85rem' }}>{title}</h3>
          {subtitle && <p style={{ fontSize: '0.7rem' }}>{subtitle}</p>}
        </div>
        {action && <div className={styles.cardAction}>{action}</div>}
      </div>
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};
