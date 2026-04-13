'use client';

import React from 'react';
import styles from './dashboard.module.css';
import { Card } from '../ui/Card';
import { Navigation, Bike, MapPin } from 'lucide-react';

export const RiderControlTower = () => {
  return (
    <Card 
      title="Delivery Control Tower" 
      subtitle="Fleet command center & live rider tracking"
      className={styles.col8}
    >
      <div className={styles.mapContainer}>
        {/* Simulated Map Illustration */}
        <div className={styles.mapOverlay}>
          <div className={styles.mapGrid}></div>
          
          {/* Rider Dots */}
          <div className={`${styles.riderDot} ${styles.blue}`} style={{ top: '30%', left: '40%' }}>
            <Bike size={12} />
            <div className={styles.riderLabel}>R-884 (HSR)</div>
          </div>
          <div className={`${styles.riderDot} ${styles.green}`} style={{ top: '60%', left: '20%' }}>
            <Bike size={12} />
            <div className={styles.riderLabel}>R-102 (Core)</div>
          </div>
          <div className={`${styles.riderDot} ${styles.orange} ${styles.pulse}`} style={{ top: '45%', left: '75%' }}>
            <Bike size={12} />
            <div className={styles.riderLabel}>R-492 (Late)</div>
          </div>

          {/* Store Pin */}
          <div className={styles.storePin} style={{ top: '50%', left: '50%' }}>
            <MapPin size={24} color="var(--primary)" fill="rgba(99, 102, 241, 0.2)" />
            <div className={styles.ping}></div>
          </div>
        </div>

        <div className={styles.mapStats}>
          <div className={styles.mapStatItem}>
            <span className={styles.mapStatLabel}>Active Riders</span>
            <span className={styles.mapStatValue}>154</span>
          </div>
          <div className={styles.mapStatItem}>
            <span className={styles.mapStatLabel}>Avg ETA</span>
            <span className={styles.mapStatValue}>12.4m</span>
          </div>
          <div className={styles.mapStatItem}>
            <span className={styles.mapStatLabel}>Route Efficiency</span>
            <span className={styles.mapStatValue}>94%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
