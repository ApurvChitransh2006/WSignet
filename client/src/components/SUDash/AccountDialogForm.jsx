import React, { useEffect } from 'react'

const AccountDialogForm = ({editData, setEditData}) => {

  return (
    <div className='fixed inset-0 bg-[#000000a0] grid place-items-center'>
      <div className='bg-black border-2 border-white rounded-2xl min-h-4/7 min-w-3/5 md:min-w-2/5 flex justify-center items-center px-5 relative' >
        <form className='md:w-3/5'>
        <div className='text-center text-3xl font-bold'>Edit</div>
          <div className='flex flex-col w-full mt-2'>
            <label htmlFor="userName" className='text-gray-400 text-sm'>User Name:</label>
            <input type="text" name="userName" className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full" placeholder="Apurv Chitransh" />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="userCode" className='text-gray-400 text-sm'>User Code:</label>
            <input type="text" name="userCode" className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full" placeholder="AC2006" />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="password" className='text-gray-400 text-sm'>Password:</label>
            <input type="password" name="userCode" className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full" placeholder="•••••••••" />
          </div>
          <div className="flex flex-row mt-2 gap-2">
          <input type="checkbox" name="isSuperUser" className="bg-white h-6 rounded-lg text-black text-2xl px-2"/>
          <label htmlFor="isSuperUser" className="text-gray-400 text-sm">Is the User A Super User?</label>
        </div>
          <div className="flex flex-col mt-10">
            <button className="bg-emerald-600 h-10 rounded-lg text-white text-xl" onClick={()=>{setEditData(null)}}>Save</button>
          </div>
        </form> 
        <div className='absolute top-2 right-2 text-sm ' onClick={()=>{setEditData(null)}}>❌</div>
      </div>
    </div>
  )
}

export default AccountDialogForm