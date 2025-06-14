import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AccountDialogForm from './AccountDialogForm';
import DeleteDialog from './DeleteDialog';

const AccountList = () => {
  const users = [
  { userName: "Aarav Mehta", userCode: "AM1023", isSuperUser: false },
  { userName: "Ritika Sharma", userCode: "RS4590", isSuperUser: true },
  { userName: "Kabir Malhotra", userCode: "KM7834", isSuperUser: false },
  { userName: "Naina Kapoor", userCode: "NK2351", isSuperUser: false },
  { userName: "Yash Tiwari", userCode: "YT9987", isSuperUser: true },
  { userName: "Isha Gupta", userCode: "IG1204", isSuperUser: false },
  { userName: "Rohit Singh", userCode: "RS3210", isSuperUser: true },
  { userName: "Tanvi Joshi", userCode: "TJ8891", isSuperUser: false },
  { userName: "Vivaan Desai", userCode: "VD5642", isSuperUser: false },
  { userName: "Meera Rathi", userCode: "MR4830", isSuperUser: true },
  { userName: "Aditya Verma", userCode: "AV2211", isSuperUser: false },
  { userName: "Sneha Chauhan", userCode: "SC1199", isSuperUser: false },
  { userName: "Dev Sharma", userCode: "DS3024", isSuperUser: true },
  { userName: "Pooja Bhat", userCode: "PB9012", isSuperUser: false },
  { userName: "Kunal Shah", userCode: "KS6633", isSuperUser: true },
  { userName: "Ananya Iyer", userCode: "AI4567", isSuperUser: false },
  { userName: "Harsh Vora", userCode: "HV3300", isSuperUser: true },
  { userName: "Tanya Mehra", userCode: "TM1245", isSuperUser: false },
  { userName: "Siddharth Jain", userCode: "SJ7654", isSuperUser: true },
  { userName: "Diya Bhatt", userCode: "DB1122", isSuperUser: false }
];

const [tableRow, setTableRow] = useState()
const [editData, setEditData] = useState()
const [deleteData, setDeleteData] = useState()

const handleEdit =async (e)=>{

  if (e.target.tagName == "path")
    setEditData(e.target.parentElement.parentElement.parentElement.childNodes[1].innerHTML)
  if (e.target.tagName == "svg")
    setEditData(e.target.parentElement.parentElement.childNodes[1].innerHTML)
}

const handleDelete =async (e)=>{

  if (e.target.tagName == "path")
    setDeleteData(e.target.parentElement.parentElement.parentElement.childNodes[1].innerHTML)
  if (e.target.tagName == "svg")
    setDeleteData(e.target.parentElement.parentElement.childNodes[1].innerHTML)
}

  return (
    <div className='w-full md:w-8/12 h-full flex flex-col items-center px-2'>
      <div className='text-2xl font-bold'>List Of Accounts</div>
      <div className='w-7/9 md:w-4/9 bg-white h-0.5'></div>
      {/* Table Head */}
      <div className='w-full grid grid-cols-11 text-lg md:text-xl mt-3 font-bold'>
        <div className='col-span-4'>User Name</div>
        <div className='col-span-4'>User Code</div>
        <div className='col-span-1 grid place-items-center'>SU</div>
        <div className='col-span-1 grid place-items-center'><MdEdit className='text-green-700 text-2xl'/></div>
        <div className='col-span-1 grid place-items-center'><MdDelete className='text-red-700 text-2xl'/></div>
      </div>
      <div className='w-full h-full overflow-y-scroll hide-scrollbar mt-2'>
        {users.map(user=>(
          <div key={user.userCode} className={`w-full grid grid-cols-11 text-md rounded-sm ${tableRow == user.userCode ? 'bg-[rgb(35,35,35)]' : ''}`} onMouseEnter={()=>setTableRow(user.userCode)} onMouseLeave={()=>setTableRow(null)}>
            <div className='col-span-4 pl-3'>{user.userName}</div>
            <div className='col-span-4 pl-3'>{user.userCode}</div>
            <div className='col-span-1 grid place-items-center'><input type="checkbox" className='text-red-900' checked={user.isSuperUser} readOnly/></div>
            <div className='col-span-1 grid place-items-center' ><MdEdit className='text-green-700 text-lg hover:text-green-400 active:scale-90'  onClick={(e)=>{ handleEdit(e);}}/></div>
            <div className='col-span-1 grid place-items-center'><MdDelete className='text-red-700 text-lg hover:text-red-400 active:scale-90' onClick={(e)=>{ handleDelete(e);}}/></div>
          </div>
        ))}
      </div>
      {editData && <AccountDialogForm editData={editData} setEditData={setEditData}/>}
      {deleteData && <DeleteDialog deleteData={deleteData} setDeleteData={setDeleteData}/>}
    </div>
  )
}

export default AccountList