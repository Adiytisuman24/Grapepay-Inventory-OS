'use client';

import React from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  AlertTriangle, 
  Undo2, 
  Clock, 
  Heart,
  Smile
} from 'lucide-react';

export default function CXPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Customer Experience</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Voice of the customer and feedback analysis</p>
        </div>
      </div>

      <div className={styles.col4}>
        <Card title="CSAT Score" subtitle="Customer satisfaction today">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: 900 }}>4.8</div>
            <div style={{ color: 'var(--text-muted)' }}>/ 5.0</div>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 600 }}>+0.2 vs Last Week</div>
        </Card>
      </div>

      <div className={styles.col4}>
        <Card title="NPS (Net Promoter Score)" subtitle="Loyalty and advocacy">
          <div style={{ fontSize: '3rem', fontWeight: 900 }}>74</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 600 }}>92nd Percentile Industry</div>
        </Card>
      </div>

      <div className={styles.col4}>
        <Card title="Complaint Volume" subtitle="Live tickets pending">
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--danger)' }}>12</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Avg resolving time: 14m</div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Common Complaint Reasons" subtitle="Top friction points">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span>Delivery Delay</span>
                  <span>42%</span>
                </div>
                <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px' }}>
                  <div style={{ width: '42%', height: '100%', background: 'var(--danger)', borderRadius: '3px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span>Product Substitution</span>
                  <span>28%</span>
                </div>
                <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px' }}>
                  <div style={{ width: '28%', height: '100%', background: 'var(--warning)', borderRadius: '3px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span>Missing Items</span>
                  <span>15%</span>
                </div>
                <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px' }}>
                  <div style={{ width: '15%', height: '100%', background: 'var(--info)', borderRadius: '3px' }}></div>
                </div>
              </div>
           </div>
        </Card>
      </div>

      <div className={styles.col6}>
        <Card title="Refund & Return Activity" subtitle="Loss recovery and reversals">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
             <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>REFUND REQUESTS</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>$1,240</div>
             </div>
             <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>RETURN REQUESTS</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>84 Units</div>
             </div>
          </div>
        </Card>
      </div>

      <div className={styles.col12}>
        <Card title="Live Sentiment Stream" subtitle="Recent customer feedback snippets">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { name: 'Sarah J.', text: '"Delivery was super fast, but the milk was near expiry."', rank: 'Positive' },
                { name: 'Michael K.', text: '"The order substitution was sensible. Good job AI!"', rank: 'Positive' },
                { name: 'David L.', text: '"My rider got lost for 10 minutes. Very frustrating."', rank: 'Negative' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1rem', background: i === 2 ? 'rgba(239, 68, 68, 0.05)' : 'rgba(16, 185, 129, 0.05)', borderRadius: '12px' }}>
                   <div style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.name}</div>
                   <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{item.text}</div>
                </div>
              ))}
           </div>
        </Card>
      </div>
    </div>
  );
}
