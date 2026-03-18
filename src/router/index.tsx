import { createBrowserRouter } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import ProtectedRoute from '../components/layout/ProtectedRoute'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Analytics from '../pages/Analytics'
import PatientDetails from '../pages/PatientDetails'
import Patients from '../pages/Patients'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppShell />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/analytics', element: <Analytics /> },
          { path: '/patients', element: <Patients /> },
          { path: '/patients/:id', element: <PatientDetails /> },
        ],
      },
    ],
  },
])
