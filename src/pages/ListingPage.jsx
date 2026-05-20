import React from 'react';
import { Plus, Search, Download, Filter } from 'lucide-react';

const pageData = {
  employees:['John Doe','Priya Patel','Amit Kumar','Neha Singh','Rahul Sharma'],
  departments:['Development','HR','Marketing','Sales','Support'],
  attendance:['John Doe - Present','Priya Patel - Present','Amit Kumar - Leave','Neha Singh - Present'],
  leave:['Rahul Sharma - Annual Leave','Priya Patel - Sick Leave','Amit Kumar - Casual Leave'],
  tasks:['ERP Dashboard Bug','API Integration','Code Review','Update Documentation'],
  payslip:['May 2024 - ₹45,000','April 2024 - ₹45,000','March 2024 - ₹44,500'],
  payroll:['May 2024 - ₹28,45,000','April 2024 - ₹27,90,000'],
  projects:['ERP System','Mobile App','Website Redesign','CRM Integration'],
  onboarding:['John Doe - In Progress','Priya Patel - HR Verification','Amit Kumar - Completed'],
  documents:['Aadhaar','PAN','Resume','Offer Letter'],
  announcements:['Office closed on 26 May','New leave policy updated','Team outing on 5 June'],
  reports:['Employee Report','Attendance Report','Payroll Report'],
  settings:['Role Permission','Company Settings','System Logs'],
  team:['Rahul Sharma','Priya Patel','Amit Kumar'],
  profile:['Personal Details','Job Information','Bank Details']
};

export default function ListingPage({role,page}){
  const data = pageData[page.key] || ['No data'];
  return <div className="page fade">
    <div className="page-title"><div><h2>{page.label}</h2><p>{role.title} / {page.label}</p></div><button><Plus size={17}/> Add New</button></div>
    <div className="toolbar"><div className="search"><Search size={17}/><input placeholder={`Search ${page.label.toLowerCase()}...`}/></div><button><Filter size={16}/> Filter</button><button><Download size={16}/> Export</button></div>
    <div className="content-card">
      <table><thead><tr><th>#</th><th>Name / Title</th><th>Department</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>{data.map((item,i)=><tr key={item}><td>{String(i+1).padStart(2,'0')}</td><td><b>{item}</b><small> Role based {page.label} record</small></td><td>{['Development','HR','Marketing','Support'][i%4]}</td><td>{24+i} May 2024</td><td><span className="badge">{i%2?'Pending':'Active'}</span></td><td><button className="mini">View</button></td></tr>)}</tbody></table>
    </div>
  </div>
}
