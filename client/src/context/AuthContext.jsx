import React, { createContext, useContext, useEffect, useState } from 'react'
import instance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

export const auth = createContext(null)

const AuthContext = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  
  const logout = async ()=>{
    const res = await instance.post('/auth/logout')
    setUser(null)
    navigate('/')
    localStorage.removeItem('accessToken')
  }

  const login = async (form)=>{
    const res = await instance.post('/auth/login', form)
    localStorage.setItem('accessToken', res.data.accessToken)
    fetchProfile()
  }

  const refreshToken= async ()=>{
    const res = await instance.post('/auth/refresh-token')
    localStorage.setItem('accessToken', res.data.accessToken)
    fetchProfile()
  }

  const fetchProfile = async () => { 
    const token = localStorage.getItem('accessToken')
    try {
      const res = await instance.get('/auth/profile', {headers: {Authorization: `Bearer ${token}`}})
      setUser(res.data)
    } catch (error) {
      refreshToken()
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])
  
  useEffect(() => {
  console.log("User state changed:", user);
  }, [user]);

  
  return (
    <auth.Provider value={{user: user, logout: logout, login: login}}>
      {children}
    </auth.Provider>
  )
}


export default AuthContext