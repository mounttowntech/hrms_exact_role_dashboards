import React from 'react';
import { Navigate, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import { Users, CalendarDays, Bell, Search } from 'lucide-react';
import { roles } from '../data/roles.js';
import DashboardPage from '../pages/DashboardPage.jsx';
import ListingPage from '../pages/ListingPage.jsx';

export default function RoleLayout({roleKey}){
  const role = roles.find(r=>r.key===roleKey);
  const navigate = useNavigate();
  if(!role) return <Navigate to="/admin/dashboard" />;
  return <div className={`app theme-${role.theme}`}>
    <aside className="sidebar">
      <div className="brand"><Users size={24}/><b>HRMS</b></div>
      <nav>{role.nav.map(item=>{const Icon=item.icon; return <NavLink key={item.key} to={`/${role.key}/${item.key}`} className={({isActive})=>`nav-item ${isActive?'active':''}`}><Icon size={17}/><span>{item.label}</span></NavLink>})}</nav>
      <div className="user-card"><div className="avatar">{role.name[0]}</div><div><b>{role.name}</b><small>{role.subtitle}</small></div></div>
    </aside>
    <main className="main">
      <header className="topbar">
        <div><h1>{role.welcome} 👋</h1><p>Here's your role based HRMS dashboard overview.</p></div>
        <div className="top-actions"><select onChange={e=>navigate(`/${e.target.value}/dashboard`)} value={role.key}>{roles.map(r=><option key={r.key} value={r.key}>{r.title}</option>)}</select><div className="date"><CalendarDays size={15}/> Friday, 24 May 2024</div><Bell size={19}/><div className="avatar small">{role.name[0]}</div></div>
      </header>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<DashboardPage role={role} />} />
        {role.nav.filter(n=>n.key!=='dashboard').map(n=><Route key={n.key} path={`${n.key}`} element={<ListingPage role={role} page={n} />} />)}
      </Routes>
    </main>
  </div>
}
