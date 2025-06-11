import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import SuperUser from './pages/SuperUser'
import SUDashboard from './pages/SUDashboard'

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { 
    path: "/superuser", 
    Component: SuperUser,
    children: [
      {path: 'dashboard', Component:SUDashboard}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
