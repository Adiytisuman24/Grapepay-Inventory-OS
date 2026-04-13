'use client';

import React from 'react';
import { Sidebar } from './Sidebar';
import styles from './layout.module.css';
import { KPITicker } from './KPITicker';
import { Search, Bell, Grid, Plus } from 'lucide-react';

export const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Command Center</h1>
            <span className={styles.status}>
              <span className={styles.statusPulse}></span>
              Live Operations
            </span>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.searchBar}>
              <Search size={18} />
              <input type="text" placeholder="Search orders, SKU, riders..." />
            </div>
            <button className={styles.iconBtn}>
              <Bell size={20} />
              <span className={styles.badge}>3</span>
            </button>
            <button className={styles.primaryBtn}>
              <Plus size={18} />
              Quick Action
            </button>
          </div>
        </header>

        <KPITicker />

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
};
