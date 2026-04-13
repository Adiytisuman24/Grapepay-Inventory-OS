# Grapepay Command OS 🍇

**Unified Quick Commerce Command Dashboard: The "Single Pane of Glass" for Modern Logistics.**

Grapepay Command OS is a high-fidelity, real-time operational dashboard designed for Quick Commerce enterprises. It provides a centralized view of the entire order lifecycle, from inventory procurement to last-mile delivery, powered by AI-driven forecasting and real-time WebSocket streams.

![Architecture](https://img.shields.io/badge/Architecture-Clean%20Next.js-blueviolet)
![Theme](https://img.shields.io/badge/Theme-Grapepay%20Light-purple)
![Status](https://img.shields.io/badge/Build-Passing-success)

---

## 🚀 Key Modules

Each module is built with extreme information density and real-time operational flows:

1.  **Command Center**: The heartbeat monitor with live order pipeline and executive KPIs.
2.  **Inventory Intelligence**: SKU velocity heatmaps, stockout predictions, and expiry alerts.
3.  **Delivery Control Tower**: Live rider tracking, fleet density heatmaps, and ETA monitors.
4.  **Dark Store Ops**: Micro-fulfillment center (MFC) health, picker utilization, and congestion indices.
5.  **Procurement & Supply**: Vendor SLA tracking, live inbound logistics, and automated replenishment.
6.  **Dispatch Optimization**: AI-powered batching, route efficiency, and surge triggers.
7.  **Financial Snapshot**: Live GMV, contribution margins, and refund liabilities.
8.  **AI Forecasting**: Predictive demand modeling for the next 4-24 hours.
9.  **Customer Experience**: Live CSAT/NPS streams and sentiment analysis.
10. **Geographic Map Ops**: Multi-layer spatial visualization of operational density.
11. **Alert Center**: Central exception management for critical "operational fires."

---

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Lucide Icons.
- **Backend**: NestJS 10, WebSocket (Socket.io), RxJS.
- **Styling**: Vanilla CSS Modules (Grapepay Design System).
- **Deployment**: Optimized for Vercel (Web) and Docker (API).

---

## 🏃 Quick Start

### 1. Prerequisites
- Node.js 20+
- npm or pnpm

### 2. Installation
```bash
# Install dependencies for the monorepo
npm install
```

### 3. Development
Use the provided PowerShell script to launch both Frontend and Backend concurrently:
```powershell
.\dev.ps1
```
Or run individually:
- **Web**: `cd apps/web && npm run dev` (Port 3000)
- **API**: `cd apps/api && npm run dev` (Port 3001)

---

## 📁 Repository Structure

```
├── apps/
│   ├── web/          # Next.js Frontend (Command OS UI)
│   └── api/          # NestJS Gateway (Real-time Data Stream)
├── packages/         # Shared configs and types (if applicable)
└── vercel.json       # Deployment configuration
```

---

## 🎨 Design Principles

The dashboard follows the **Grapepay Design System**:
- **High Information Density**: Built for professional operators.
- **Real-Time First**: Every component is built to handle live data updates.
- **Light "Grape" Aesthetic**: Clean violet/pink palette with glassmorphic depth.

---

## 📜 License
© 2026 Grapepay Technologies. All rights reserved.
