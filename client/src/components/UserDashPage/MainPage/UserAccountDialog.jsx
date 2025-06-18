import React from 'react'
import { RxCross2 } from "react-icons/rx";

const UserAccountDialog = ({setEditData}) => {

  return (
    <div className='fixed inset-0 bg-[#000000a0] grid place-items-center'>
      <div className='bg-black border-2 border-white rounded-2xl min-h-4/7 min-w-11/12 md:min-w-2/5 flex justify-center items-center px-5 relative' >
        <form className='w-11/12 md:w-3/5'>
        <div className='text-center text-3xl font-bold'>Edit</div>
          <div className='flex flex-col w-full mt-2'>
            <label htmlFor="userName" className='text-gray-400 text-sm'>User Name:</label>
            <input type="text" name="userName" className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full" placeholder="Apurv Chitransh" />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="userCode" className='text-gray-400 text-sm'>User Code:</label>
            <input type="text" name="userCode" className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full" placeholder="AC2006" readOnly/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="password" className='text-gray-400 text-sm'>Password:</label>
            <input type="password" name="userCode" className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full" placeholder="•••••••••" />
          </div>
          <div className="flex flex-col mt-10">
            <button className="bg-emerald-600 h-10 rounded-lg text-white text-xl" onClick={()=>{setEditData(false)}}>Save</button>
          </div>
        </form> 
        <div className='absolute top-2 right-2 text-sm ' onClick={()=>{setEditData(false)}}><RxCross2 className='text-2xl'/></div>
      </div>
    </div>
  )
}

export default UserAccountDialog