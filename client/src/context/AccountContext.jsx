import React, { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import instance from '../api/axiosInstance'
export const account = createContext()

const AccountContext = ({children}) => {
  const {user} = useAuth()
  const [accountList, setAccountList] = useState()

  const fetchAccountsList = async () => {
    try {
      const res = await instance.get(`accounts/getList/${user.firmcode}`)
      setAccountList(res.data)
    } catch {}
  }

  useEffect(() => {
    fetchAccountsList()
  }, [user])
  
  return (
    <account.Provider value={{accountList: accountList}}>{children}</account.Provider>
  )
}

export default AccountContext