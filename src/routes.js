import React from 'react'
import { Navigate } from 'react-router-dom'

// 👉 LOGIN
const Login = React.lazy(() => import('./views/pages/login/Login'))

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// बाकी सब same...

// 🔐 PROTECT FUNCTION
const Protected = (Component) => {
  return localStorage.getItem('auth') ? <Component /> : <Navigate to="/login" />
}

// 👉 ROUTES
export const routes = [
  // 🔥 Login
  { path: '/login', name: 'Login', element: Login },

  // 👉 Default redirect
  { path: '/', element: <Navigate to="/login" /> },

  // 🔐 Protected Dashboard
  { path: '/dashboard', name: 'Dashboard', element: () => Protected(Dashboard) },

  // Theme (protected)
  { path: '/theme/colors', name: 'Colors', element: () => Protected(Colors) },
  { path: '/theme/typography', name: 'Typography', element: () => Protected(Typography) },

  // बाकी routes भी protect कर सकते हो (optional)
]

export default routes
