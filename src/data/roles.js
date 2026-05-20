import { LayoutDashboard, Users, Building2, CalendarCheck, CalendarX, ClipboardList, ReceiptText, FolderKanban, FileText, Settings, UserRound, Bell, BriefcaseBusiness } from 'lucide-react';

export const commonPages = [
  { key:'dashboard', label:'Dashboard', icon:LayoutDashboard },
  { key:'employees', label:'Employees', icon:Users },
  { key:'departments', label:'Departments', icon:Building2 },
  { key:'attendance', label:'Attendance', icon:CalendarCheck },
  { key:'leave', label:'Leave', icon:CalendarX },
  { key:'tasks', label:'Task', icon:ClipboardList },
  { key:'payslip', label:'Payslip', icon:ReceiptText },
];

export const roles = [
  { key:'admin', title:'Admin', name:'Admin User', subtitle:'Super Admin', theme:'blue', welcome:'Welcome back, Admin!', nav:[...commonPages,{key:'reports',label:'Reports & Analytics',icon:FileText},{key:'settings',label:'Settings',icon:Settings}]},
  { key:'hr', title:'HR', name:'HR User', subtitle:'HR Manager', theme:'green', welcome:'Welcome back, HR Manager!', nav:[...commonPages,{key:'onboarding',label:'Onboarding',icon:UserRound},{key:'documents',label:'Documents',icon:FileText},{key:'announcements',label:'Announcements',icon:Bell}]},
  { key:'teamlead', title:'Team Lead', name:'Team Lead', subtitle:'Team Lead', theme:'purple', welcome:'Welcome back, Team Lead!', nav:[...commonPages,{key:'team',label:'My Team',icon:Users},{key:'reports',label:'Reports',icon:FileText}]},
  { key:'projectmanager', title:'Project Manager', name:'Project Manager', subtitle:'Project Manager', theme:'orange', welcome:'Welcome back, Project Manager!', nav:[...commonPages,{key:'projects',label:'Projects',icon:FolderKanban},{key:'team',label:'Team Members',icon:Users},{key:'documents',label:'Documents',icon:FileText}]},
  { key:'employee', title:'Employee', name:'Employee', subtitle:'Software Engineer', theme:'navy', welcome:'Welcome back, John!', nav:[{key:'dashboard',label:'Dashboard',icon:LayoutDashboard},{key:'profile',label:'My Profile',icon:UserRound},{key:'employees',label:'Employees',icon:Users},{key:'departments',label:'Departments',icon:Building2},{key:'attendance',label:'Attendance',icon:CalendarCheck},{key:'leave',label:'Leave',icon:CalendarX},{key:'tasks',label:'My Tasks',icon:ClipboardList},{key:'payslip',label:'Payslip',icon:ReceiptText},{key:'documents',label:'Documents',icon:FileText},{key:'announcements',label:'Announcements',icon:Bell}]},
];

export const statsByRole = {
  admin:[['Total Employees','524','+12 this month'],['Departments','16','Active Departments'],['Present Today','402','76.7%'],['Total Leaves','45','Pending Requests'],['Payroll This Month','₹ 28,45,000','Total Payout']],
  hr:[['Total Employees','524','+12 this month'],['New Joinings','18','This Month'],['Onboarding','12','In Progress'],['Leave Requests','15','Pending'],['Resignations','2','This Month']],
  teamlead:[['Team Members','12','Total Members'],['Present Today','9','75%'],['Pending Tasks','8','Tasks'],['Completed Tasks','24','This Month'],['Leave Requests','3','Pending']],
  projectmanager:[['Active Projects','6','Ongoing'],['Team Members','24','Involved'],['Tasks In Progress','16','Tasks'],['Tasks Completed','38','This Month'],['Overdue Tasks','4','Urgent']],
  employee:[['Attendance','Present','Checked in 09:02 AM'],['Leave Balance','12','Days Available'],['My Tasks','5','Pending'],['Payslip','₹ 45,000','Net Salary'],['Announcements','3','New']],
};
