import React, { useState } from 'react'
import UserAccountDialog from './UserAccountDialog'
import { Link } from 'react-router-dom'
import { ImMenu3 } from "react-icons/im";
import { ImMenu4 } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false)
  const [editData, setEditData] = useState(false)

  return (
    <div className='fixed text-xl border-2 border-white rounded-full p-2 cursor-pointer top-2 right-2 select-none text-white z-50' >
      <div className='h-full w-full' onClick={()=>setnavOpen(!navOpen)}>{!navOpen? <ImMenu3 className='text-2xl'/>:<ImMenu4 className='text-2xl'/>}</div>
      <div className={`${navOpen?'absolute':'hidden'} h-40 w-48 mt-2 border-2 border-white rounded-lg top-full right-0 flex flex-col justify-center p-2 bg-black `}>
        <Link to={'/udash'}><div className='rounded-lg px-2 hover:bg-[#262626]'>Product List</div></Link>
        <Link to={'/udash/uploaddb'}><div className='rounded-lg px-2 hover:bg-[#262626]'>Update Database</div></Link>
        <Link to={'/udash/report'}><div className='rounded-lg px-2 hover:bg-[#262626]'>Generate Report</div></Link>
        <div className='rounded-lg px-2 hover:bg-[#262626]' onClick={()=>{setEditData(true); setnavOpen(false)}}>Edit Account</div>
        <Link to={'/'}><div className='rounded-lg px-2 hover:bg-[#262626]'>Logout</div></Link>
      </div>
      {editData && <UserAccountDialog setEditData={setEditData}/>}
    </div>
  )
}

export default Navbar