import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import useAuth from '../hooks/useAuth'
import { useEffect } from 'react'
import instance from '../api/axiosInstance'

export const Product = createContext(null)

const ProductContext = ({children}) => {

  const [list, setList] = useState()

  const {user} = useAuth()

  const generateList = async ()=>{
    const res = await instance.get(`/item/getlist/${user.firmcode}`)
    setList(res.data)
  }
  useEffect(() => {
    generateList()
  }, [user])
  
  useEffect(() => {
    console.log(list)
  }, [generateList])
  
  return (
    <Product.Provider value={{list: list}}>
      {children}
    </Product.Provider>
  )
}

export default ProductContext