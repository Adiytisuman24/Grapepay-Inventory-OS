'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  Store, 
  BarChart3, 
  Settings, 
  AlertCircle,
  Database,
  Users,
  PieChart,
  Map as MapIcon,
  Bell
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Command Center', href: '/' },
  { icon: Package, label: 'Inventory Intelligence', href: '/inventory' },
  { icon: Truck, label: 'Delivery Control', href: '/delivery' },
  { icon: Store, label: 'Dark Store Ops', href: '/stores' },
  { icon: PieChart, label: 'Financial Snapshot', href: '/finance' },
  { icon: Users, label: 'Customer Experience', href: '/cx' },
  { icon: MapIcon, label: 'Geographic Map', href: '/map' },
  { icon: Bell, label: 'Alert Center', href: '/alerts' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>GP</div>
        <span className={styles.logoText}>Grapepay <br /><small>Command OS</small></span>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>JD</div>
          <div className={styles.userInfo}>
            <p>John Doe</p>
            <span>Ops Manager</span>
          </div>
        </div>
        <button className={styles.settingsBtn}>
          <Settings size={20} />
        </button>
      </div>
    </aside>
  );
};
