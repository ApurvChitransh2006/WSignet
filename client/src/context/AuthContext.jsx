import React, { createContext, useContext, useEffect, useState } from 'react'
import instance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

export const auth = createContext(null)

const AuthContext = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [cred, setCred] = useState()
  
  const logout = async ()=>{
    const res = await instance.post('/auth/logout')
    setUser(null)
    navigate('/')
    localStorage.removeItem('accessToken')
  }

  const login = async (form)=>{
    try {
      const res = await instance.post('/auth/login', form)
      localStorage.setItem('accessToken', res.data.accessToken)
      setCred()
      console.log(res)
      fetchProfile()
    } catch (error) {
      if (error.response.data === "Credentials are Wrong") setCred("Credentials are Wrong")
    }
    
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
    if (user)
      console.log("User state changed:", user);
  }, [user]);

  
  return (
    <auth.Provider value={{user: user, logout: logout, login: login, cred: cred}}>
      {children}
    </auth.Provider>
  )
}


export default AuthContext