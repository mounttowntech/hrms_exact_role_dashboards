import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://hrms-backend-60gn.onrender.com/api';

export const api = axios.create({ baseURL: API_BASE_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const hrmsApi = {
  login: (data) => api.post('/auth/login', data),
  employees: () => api.get('/employees'),
  departments: () => api.get('/departments'),
  attendance: () => api.get('/attendance'),
  leaves: () => api.get('/leaves'),
  tasks: () => api.get('/tasks'),
  payroll: () => api.get('/payroll'),
  projects: () => api.get('/projects'),
  documents: () => api.get('/documents'),
};
