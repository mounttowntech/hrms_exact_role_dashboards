import React from 'react';
import { statsByRole } from '../data/roles.js';
import { LinePanel, PiePanel, ProgressPanel, QuickActions, StatCard, TablePanel, TaskList, Panel } from '../components/Cards.jsx';

export default function DashboardPage({role}){
  const stats = statsByRole[role.key] || [];
  return <div className="page fade">
    <div className="stats-grid">{stats.map((s,i)=><StatCard key={s[0]} title={s[0]} value={s[1]} sub={s[2]} i={i}/>)}</div>
    {role.key==='admin' && <div className="grid admin-grid"><LinePanel/><PiePanel/><TablePanel title="Pending Approvals"/><QuickActions/></div>}
    {role.key==='hr' && <div className="grid hr-grid"><PiePanel title="Onboarding Progress"/><TablePanel title="Leave Requests"/><TablePanel title="Recent Employees"/><QuickActions/></div>}
    {role.key==='teamlead' && <div className="grid team-grid"><PiePanel title="Team Attendance"/><TaskList/><TablePanel title="Team Members"/><QuickActions/></div>}
    {role.key==='projectmanager' && <div className="grid pm-grid"><ProgressPanel/><TablePanel title="Recent Activities"/><TablePanel title="My Projects"/><QuickActions/></div>}
    {role.key==='employee' && <div className="grid emp-grid"><TaskList/><Panel title="Attendance Overview"><div className="calendar-demo">{Array.from({length:30},(_,i)=><span className={i%7===0?'absent':i%5===0?'leave':''} key={i}>{i+1}</span>)}</div></Panel><TablePanel title="Recent Announcements"/><TablePanel title="Leave Status"/></div>}
  </div>
}
