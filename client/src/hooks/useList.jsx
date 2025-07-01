import React from 'react'
import { useContext } from 'react'
import { Product } from '../context/ProductContext'

const useList = () => {
  const context = useContext(Product)
  if (!context) {throw new Error('There is no context present')}
  return context
}

export default useList