import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SuperUser from './pages/SuperUser'
import './index.css'
import App from './pages/App/App'
import Auth from './pages/App/Auth'

const router = createBrowserRouter([
  {
    path: "/superuser",
    Component: SuperUser
  },
  {
    path: "/:id",
    Component: App,
    children: [
      {index: true, Component: Auth}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
