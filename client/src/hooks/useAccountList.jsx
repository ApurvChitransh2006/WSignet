import React, { useContext } from 'react'
import { account } from '../context/AccountContext'

const useAccountList = () => {
  const context = useContext(account)
    if (!context) {throw new Error('There is no context present')}
  return context
}

export default useAccountList