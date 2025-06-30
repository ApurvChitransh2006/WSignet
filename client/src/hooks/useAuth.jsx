import React, { useContext } from 'react'
import { auth } from '../context/AuthContext'

const useAuth = () => {
  const context = useContext(auth)
  if (!context) {throw new Error('There is no context present')}
  return context
}

export default useAuth