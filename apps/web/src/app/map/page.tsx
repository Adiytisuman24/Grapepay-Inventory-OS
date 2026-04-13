'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  Map as MapIcon, 
  MapPin, 
  Navigation, 
  Layers, 
  Globe, 
  LocateFixed,
  Maximize2
} from 'lucide-react';

export default function MapPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Geographic Ops Heatmap</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Spatial distribution of demand, density, and delays</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ padding: '0.6rem 1rem', background: '#f1f5f9', border: '1px solid var(--card-border)', borderRadius: '8px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Layers size={16} /> Layers</button>
            <button style={{ padding: '0.6rem 1rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>Sync Live Data</button>
          </div>
        </div>
      </div>

      <div className={styles.col12}>
        <div style={{ position: 'relative', height: '600px', background: '#f1f5f9', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
           {/* Simulated Map Container */}
           <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(circle at center, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
           {/* Heatmap Blobs (Simulated with Gradients) */}
           <div style={{ position: 'absolute', top: '20%', left: '30%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)', filter: 'blur(20px)' }}></div>
           <div style={{ position: 'absolute', top: '50%', left: '60%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)', filter: 'blur(30px)' }}></div>
           <div style={{ position: 'absolute', top: '40%', left: '10%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)', filter: 'blur(15px)' }}></div>

           {/* Store Markers */}
           <div style={{ position: 'absolute', top: '45%', left: '35%', textAlign: 'center' }}>
              <MapPin size={32} color="var(--primary)" fill="rgba(124, 58, 237, 0.2)" />
              <div style={{ background: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800, border: '1px solid var(--card-border)', marginTop: '4px' }}>HSR Dark-1</div>
           </div>
           
           <div style={{ position: 'absolute', top: '25%', left: '65%', textAlign: 'center' }}>
              <MapPin size={32} color="var(--danger)" fill="rgba(239, 68, 68, 0.2)" />
              <div style={{ background: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800, border: '1px solid var(--card-border)', marginTop: '4px' }}>Indira-MFC</div>
           </div>

           {/* Legend Overlay */}
           <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'white', padding: '1rem', borderRadius: '16px', border: '1px solid var(--card-border)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>Map Overlays</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <input type="checkbox" defaultChecked /> Demand Hotspots
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <input type="checkbox" defaultChecked /> Rider Density
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <input type="checkbox" /> Delivery Delays
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <input type="checkbox" /> Shortage Areas
                 </label>
              </div>
           </div>
           
           {/* Mini Map Navigation */}
           <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', background: 'white', display: 'flex', flexDirection: 'column', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
              <button style={{ padding: '0.5rem', borderBottom: '1px solid var(--card-border)', background: 'none' }}><Maximize2 size={18} /></button>
              <button style={{ padding: '0.5rem', borderBottom: '1px solid var(--card-border)', background: 'none' }}><LocateFixed size={18} /></button>
              <button style={{ padding: '0.5rem', background: 'none' }}><Globe size={18} /></button>
           </div>
        </div>
      </div>
    </div>
  );
}
