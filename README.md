# APS – Cybersecurity SaaS Dashboard
A responsive cybersecurity dashboard application built using React, Vite, and Tailwind CSS.

This project simulates an enterprise security scanning platform with authentication, protected routes, dashboard analytics, scan detail views, dark mode support, and responsive design.

---

## 🚀 Tech Stack
- React (Vite)
- React Router DOM
- Tailwind CSS
- Context API (Auth, Theme, Toast)
- Lucide React (UI icons)
- Font Awesome (Brand icons)
- CSS Transitions & Animations

---

## 📁 Project Structure
src/
├── app/
│ ├── App.jsx
│ └── ProtectedRoute.jsx
│
├── components/
│ ├── layout/
│ │ ├── Layout.jsx
│ │ ├── Header.jsx
│ │ └── Sidebar.jsx
│ │
│ ├── dashboard/
│ │ ├── StatsCard.jsx
│ │ └── ScanTable.jsx
│ │
│ ├── scan/
│ │ ├── ProgressCircle.jsx
│ │ ├── StepTracker.jsx
│ │ ├── ConsolePanel.jsx
│ │ └── FindingCard.jsx
│ │
│ └── ui/
│ ├── Badge.jsx
│ ├── Button.jsx
│ ├── Card.jsx
│ ├── Modal.jsx
│ ├── Skeleton.jsx
│ └── StatusChip.jsx
│
├── context/
│ ├── AuthContext.jsx
│ ├── ThemeContext.jsx
│ └── ToastContext.jsx
│
├── pages/
│ ├── Auth/Login.jsx
│ ├── Dashboard/Dashboard.jsx
│ └── ScanDetail/ScanDetail.jsx
│
├── data/scans.js
├── main.jsx
├── index.css



---

## 🛠 Installation & Setup

1️⃣ Install dependencies

```bash
npm install

2️⃣ Install Font Awesome (if not already installed)

```bash
npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-brands-svg-icons

3️⃣ Start development server

```bash
npm run dev

```bash
http://localhost:5173



🌟 Features :~
// Authentication :
-- Signup & Login toggle form
-- Protected routes
-- Context-based auth management

// Dashboard :
-- Severity stats cards
-- Interactive scan table
-- Clickable scan rows
-- Loading skeleton UI

// Scan Detail View :
-- Animated progress circle
-- Step tracker
-- Console activity logs
-- Vulnerability findings panel

// Dark Mode :
-- Tailwind class-based dark mode
-- Theme persistence via localStorage

// Fully Responsive :
-- Mobile (375px)
-- Desktop (1280px+)
-- Sidebar collapses on mobile
-- Tables scroll horizontally
-- Scan detail layout stacks correctly


⚠ Known Limitations :
-- Authentication is mock (no backend)
-- No real OAuth integration
-- Static scan data (local file)
-- No real API integration
-- No persistent session storage beyond memory
-- No role-based access control



📌 Important Note :

This README reflects the final updated code structure discussed during development.
If there is any confusion about implementation details, refer to the latest updated components used in the final version.

📄 License :~

This project is built as a production-style SaaS dashboard frontend using modern React architecture.