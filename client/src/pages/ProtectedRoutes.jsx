import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import SuperUserDashboard from './SuperUserDashboard'
import UserDashboard from './UserDashPage/UserDashboard'

const ProtectedRoutes = () => {
  const navigate = useNavigate()

  const {user} = useAuth()
  
  useEffect(() => {
    if (user) {
      if (user.isSuperUser) {
        navigate('/dash/sudash')
      } else {
        navigate('/dash/udash')
      }
    } else {
      navigate('/')
    }
  }, [])
  
  return (<Outlet/>)
}

export default ProtectedRoutes