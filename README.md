# HRMS Exact Role Based Dashboard Demo

## Included role dashboards
- Admin
- HR
- Team Lead
- Project Manager
- Employee

## Clickable pages for every role
Dashboard, Employees, Departments, Attendance, Leave, Task, Payslip and extra role-specific modules.

## Run
```bash
npm install
npm run dev
```

Open: http://localhost:5173

## Backend API setup
Set your backend URL in `.env`:
```bash
VITE_API_BASE_URL=http://localhost:8000/api
```

API integration file: `src/api/hrmsApi.js`
