import styles from "@/components/dashboard/dashboard.module.css";
import { OrderPipeline } from "@/components/dashboard/OrderPipeline";
import { DarkStoreOps } from "@/components/dashboard/DarkStoreOps";
import { InventoryIntelligence } from "@/components/dashboard/InventoryIntelligence";
import { RiderControlTower } from "@/components/dashboard/RiderControlTower";
import { Card } from "@/components/ui/Card";
import { 
  ShieldCheck, 
  Activity,
  BrainCircuit
} from "lucide-react";

export default function Home() {
  return (
    <div className={styles.grid}>
      {/* Row 1: Order Pipeline (Large) */}
      <div className={styles.col12}>
        <OrderPipeline />
      </div>

      {/* Row 2: Store Ops & Inventory */}
      <div className={styles.col6}>
        <DarkStoreOps />
      </div>
      <div className={styles.col6}>
        <InventoryIntelligence />
      </div>

      {/* Row 3: Map (Large) & Quick Stats */}
      <RiderControlTower />
      
      <div className={styles.col4}>
        <Card title="Financial Pulse" subtitle="Real-time margin & burn tracking">
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Net Revenue</span>
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>$12,402.50</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Cost/Delivery</span>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--success)' }}>$0.85</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Contribution Margin</span>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>24.2%</span>
            </div>
          </div>
        </Card>
        
        <div style={{ height: '1.5rem' }}></div>
        
        <Card title="AI Forecast" subtitle="Predictive demand for next 4h">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <div style={{ width: 44, height: 44, borderRadius: '12px', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <BrainCircuit size={24} color="var(--primary)" />
             </div>
             <div>
               <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>+24% Surge</div>
               <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Predicted in Indiranagar Zone</div>
             </div>
          </div>
        </Card>
      </div>

      {/* Row 4: Customer Experience & Alerts */}
      <div className={styles.col4}>
        <Card title="Customer Sentiment" subtitle="Live CSAT & Complaint tracking">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>4.8</div>
               <div style={{ textAlign: 'right' }}>
                 <div style={{ color: 'var(--success)', fontWeight: 600 }}>CSAT Score</div>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>vs 4.6 Target</div>
               </div>
            </div>
            <div className={styles.utilBar}>
              <div className={styles.utilProgress} style={{ width: '96%', background: 'var(--success)' }}></div>
            </div>
          </div>
        </Card>
      </div>

      <div className={styles.col8}>
         <Card title="Operational Exceptions" subtitle="Critical alerts requiring attention">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
             <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.1)', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <ShieldCheck color="var(--danger)" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>SLA Breach (Store A)</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>14 orders stale &gt; 20 mins</div>
                </div>
             </div>
             <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.1)', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Activity color="var(--warning)" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Rider Shortage</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Koramangala Zone (4 pending)</div>
                </div>
             </div>
           </div>
         </Card>
      </div>
    </div>
  );
}
