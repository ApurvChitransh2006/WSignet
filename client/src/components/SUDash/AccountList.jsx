import React, { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AccountDialogForm from './AccountDialogForm';
import DeleteDialog from './DeleteDialog';
import instance from '../../api/axiosInstance';

const AccountList = () => {
  const[users, setUsers]  = useState([])

  useEffect(() => {
    (async ()=>{
      const res = await instance.get('/user/all')
      setUsers([...res.data])})()
  }, [])

  const [tableRow, setTableRow] = useState()
  const [editData, setEditData] = useState('')
  const [deleteData, setDeleteData] = useState()

  const handleEdit =async (e)=>{

    if (e.target.tagName == "path") {
      const text = e.target.parentElement.parentElement.parentElement.childNodes[1].innerHTML
      setEditData(text)
    }
    if (e.target.tagName == "svg") {
      const text = e.target.parentElement.parentElement.childNodes[1].innerHTML
      setEditData(text)
    }
  }
  
  useEffect(() => {
    console.log(editData)
  }, [setEditData])
  
  const handleDelete =async (e)=>{

    if (e.target.tagName == "path")
      setDeleteData(e.target.parentElement.parentElement.parentElement.childNodes[1].innerHTML)
    if (e.target.tagName == "svg")
      setDeleteData(e.target.parentElement.parentElement.childNodes[1].innerHTML)
    console.log(deleteData)
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
            <div key={user.firmcode} className={`w-full grid grid-cols-11 text-md rounded-sm ${tableRow == user.firmcode ? 'bg-[rgb(35,35,35)]' : ''}`} onMouseEnter={()=>setTableRow(user.firmcode)} onMouseLeave={()=>setTableRow(null)}>
              <div className='col-span-4 pl-3'>{user.firmname}</div>
              <div className='col-span-4 pl-3'>{user.firmcode}</div>
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