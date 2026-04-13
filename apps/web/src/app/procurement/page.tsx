'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/components/dashboard/dashboard.module.css';
import { Card } from '@/components/ui/Card';
import { 
  Database, 
  ShoppingCart, 
  Truck, 
  FileText, 
  Clock, 
  Target, 
  CheckCircle,
  BarChart,
  ArrowRightLeft,
  Search,
  Filter,
  MoreVertical,
  ExternalLink,
  ChevronRight,
  User
} from 'lucide-react';

const RECENT_POS = [
  { id: 'PO-9921', vendor: 'FreshGro Ltd', amount: '$12,400', status: 'In Transit', date: 'Today, 14:20' },
  { id: 'PO-9920', vendor: 'PureDairy Supplies', amount: '$4,500', status: 'Pending Approval', date: 'Today, 11:45' },
  { id: 'PO-9918', vendor: 'BeverageCorp', amount: '$8,900', status: 'Fulfilled', date: 'Yesterday, 18:30' },
  { id: 'PO-9917', vendor: 'GrainTech', amount: '$3,200', status: 'Failed', date: 'Yesterday, 14:00' },
];

export default function ProcurementPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.grid}>
      <div className={styles.col12}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>Procurement & Supply</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Global supply chain intelligence and vendor fulfillment controls</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
             <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  placeholder="Search POs, Vendors..." 
                  style={{ 
                    padding: '0.6rem 1rem 0.6rem 2.5rem', 
                    borderRadius: '8px', 
                    border: '1px solid var(--card-border)', 
                    fontSize: '0.85rem',
                    background: 'var(--card-bg)',
                    width: '240px',
                    outline: 'none'
                  }}
                />
             </div>
             <button style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>
                <Filter size={16} /> Filters
             </button>
             <button style={{ padding: '0.6rem 1rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700 }}>
                + New PO
             </button>
          </div>
        </div>
      </div>

      {/* High Density KPI Strip */}
      <div className={styles.col3}>
        <Card title="Open Liabilities" subtitle="Pending PO Valuation">
           <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900 }}>$142,500</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--warning)', fontWeight: 600 }}>↑ 12%</div>
           </div>
           <div style={{ marginTop: '0.75rem', display: 'flex', gap: '4px' }}>
              {[4, 7, 5, 9, 6, 8, 10].map((v, i) => (
                <div key={i} style={{ height: `${v*2}px`, flex: 1, background: 'var(--primary)', opacity: 0.3 + (i*0.1), borderRadius: '1px' }}></div>
              ))}
           </div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Vendor Performance" subtitle="Net SLA Adherence">
           <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900 }}>94.2%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>Target: 92%</div>
           </div>
           <div style={{ marginTop: '1rem', height: '4px', background: '#f1f5f9', borderRadius: '2px' }}>
              <div style={{ width: '94.2%', height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--success))', borderRadius: '2px' }}></div>
           </div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Stock Inbound" subtitle="Units arriving within 4h">
           <div style={{ fontSize: '1.75rem', fontWeight: 900 }}>12,480</div>
           <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', padding: '2px 6px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '4px', fontWeight: 600 }}>8 Active Trucks</span>
           </div>
        </Card>
      </div>

      <div className={styles.col3}>
        <Card title="Avg Lead Time" subtitle="Order Confirmation ➔ GRN">
           <div style={{ fontSize: '1.75rem', fontWeight: 900 }}>6.2H</div>
           <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>-1.4H vs Baseline</div>
        </Card>
      </div>

      {/* Main Content Sections */}
      <div className={styles.col8}>
        <Card title="Procurement Log" subtitle="Real-time purchase order lifecycle tracking">
          <div style={{ marginTop: '1rem' }}>
             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
               <thead>
                 <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--card-border)', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                   <th style={{ padding: '0.75rem 0.5rem' }}>PO Number</th>
                   <th>Vendor</th>
                   <th>Amount</th>
                   <th>Status</th>
                   <th>Date</th>
                   <th style={{ textAlign: 'right' }}>Actions</th>
                 </tr>
               </thead>
               <tbody style={{ fontSize: '0.85rem' }}>
                 {RECENT_POS.map((po, i) => (
                   <tr key={i} style={{ borderBottom: '1px solid #f8fafc', transition: 'background 0.2s' }} className={styles.tableRowHover}>
                     <td style={{ padding: '1rem 0.5rem', fontWeight: 700, color: 'var(--primary)' }}>{po.id}</td>
                     <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                           <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <User size={12} color="var(--text-muted)" />
                           </div>
                           {po.vendor}
                        </div>
                     </td>
                     <td style={{ fontWeight: 600 }}>{po.amount}</td>
                     <td>
                        <span style={{ 
                          padding: '2px 8px', 
                          borderRadius: '12px', 
                          fontSize: '0.7rem', 
                          fontWeight: 700,
                          background: po.status === 'Fulfilled' ? 'rgba(16, 185, 129, 0.1)' : 
                                      po.status === 'In Transit' ? 'rgba(14, 165, 233, 0.1)' : 
                                      po.status === 'Failed' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                          color: po.status === 'Fulfilled' ? 'var(--success)' : 
                                 po.status === 'In Transit' ? 'var(--info)' : 
                                 po.status === 'Failed' ? 'var(--danger)' : 'var(--warning)'
                        }}>
                          {po.status}
                        </span>
                     </td>
                     <td style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{po.date}</td>
                     <td style={{ textAlign: 'right' }}>
                        <button style={{ padding: '4px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><MoreVertical size={16} /></button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
             <button style={{ color: 'var(--primary)', background: 'none', border: 'none', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>View all transactions ➔</button>
          </div>
        </Card>
      </div>

      <div className={styles.col4}>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card title="Vendor Health" subtitle="Top performing partners">
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                  {[
                    { name: 'FreshGro Ltd', score: 98, trend: '+2%' },
                    { name: 'PureDairy', score: 92, trend: '-1%' },
                    { name: 'BeverageCorp', score: 88, trend: '+4%' },
                  ].map((v, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>{v.name}</span>
                       </div>
                       <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>{v.score}%</div>
                          <div style={{ fontSize: '0.65rem', color: v.trend.startsWith('+') ? 'var(--success)' : 'var(--danger)' }}>{v.trend} reliability</div>
                       </div>
                    </div>
                  ))}
               </div>
            </Card>

            <Card title="Replenishment AI" subtitle="Suggesting restock quantities">
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: '#f5f3ff', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(124, 58, 237, 0.1)' }}>
                  <div style={{ flex: 1 }}>
                     <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>Restock Triggered</div>
                     <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>42 Fast-moving SKUs below threshold in Zone A.</p>
                  </div>
                  <button style={{ padding: '0.5rem 0.75rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>Auto-Fill</button>
               </div>
            </Card>
         </div>
      </div>

      <div className={styles.col12}>
        <Card title="Supply Chain Visibility" subtitle="Live Inbound Logistics Heatmap">
           <div style={{ height: '160px', width: '100%', background: '#f1f5f9', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 20%, rgba(124, 58, 237, 0.05) 0%, transparent 40%)' }}></div>
              <div style={{ position: 'absolute', top: '50%', left: '5%', right: '5%', height: '2px', background: 'rgba(0,0,0,0.05)' }}></div>
              {[20, 45, 75].map((pos, i) => (
                <div key={i} style={{ position: 'absolute', left: `${pos}%`, top: '50%', transform: 'translate(-50%, -50%)', width: '32px', height: '32px', borderRadius: '10px', background: 'white', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                   <Truck size={16} color="var(--primary)" />
                </div>
              ))}
              <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                 <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Database size={20} color="white" />
                 </div>
                 <span style={{ fontSize: '0.6rem', fontWeight: 800, marginTop: '4px', display: 'block' }}>CENTRAL HUB</span>
              </div>
           </div>
        </Card>
      </div>
    </div>
  );
}
