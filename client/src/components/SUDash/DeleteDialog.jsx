import React, { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import instance from '../../api/axiosInstance';

const DeleteDialog = ({deleteData, setDeleteData}) => {
  const deleteFunction = async () => {
    const user = await instance.get(`/user/${deleteData}`)
    const res = await instance.delete(`/user/${user.data._id}`)
    console.log(res)
    setDeleteData(null)
  }
  return (
    <div className='fixed inset-0 bg-[#000000a0] grid place-items-center px-2'>
      <div className='bg-black border-2 border-white rounded-2xl min-h-2/7 min-w-2/5 md:min-w-2/5 flex flex-col justify-center items-center px-5 relative' >
        <div className='text-2xl md:text-3xl font-bold'>Confirmation</div>
        <div><p className='text-lg md:text-xl mt-3'>Are you sure you want to delete the User?</p></div>
        <div className='flex justify-start gap-4'>
          <button className='px-3 bg-green-500 rounded-lg text-xl md:text-2xl mt-4 active:bg-green-300' onClick={()=>{deleteFunction()}}>Yes</button>
          <button className='px-3 bg-red-500 rounded-lg text-xl md:text-2xl mt-4 active:bg-red-300' onClick={()=>{setDeleteData(null)}}>No</button>
        </div>
        <div className='absolute top-2 right-2 text-sm ' onClick={()=>{setDeleteData(null)}}><RxCross2 className='text-2xl'/></div>
      </div>
    </div>
  )
}

export default DeleteDialog