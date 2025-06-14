import React, { useEffect, useState } from 'react'
import CreateAccount from '../components/SUDash/CreateAccount'
import AccountList from '../components/SUDash/AccountList'

const SuperUserDashboard = () => {
  const [catoggle, setCatoggle] = useState(true)
  let toggleActiveCss = 'text-center bg-[rgb(50,50,50)] rounded-2xl flex-1 grid place-items-center'
  let toggleDeactiveCss = 'text-center rounded-l-2xl flex-1 grid place-items-center'
  let contentShowCSS = 'h-full w-full rounded-2xl flex flex-col justify-center items-center'
  let contentHideCSS = 'hidden h-full w-full rounded-2xl'
  
  return (
    <div className='h-screen bg-black text-white flex flex-col justify-center items-center'>
      {/* Navigation Tab */}
      <div className='h-2/12 w-10/12 md:w-8/12 relative'>
        <div className='absolute top-2/6 bg-[rgb(20,20,20)] flex justify-between h-14 w-72 rounded-2xl p-2'>
          <div className={catoggle?toggleActiveCss:toggleDeactiveCss} onClick={()=>{setCatoggle(true)}}>Create Account</div>
          <div className={catoggle?toggleDeactiveCss:toggleActiveCss} onClick={()=>{setCatoggle(false)}}>Account List</div>
        </div>
      </div>
      {/* Content Tab */}
      <div className='h-8/12 w-10/12 md:w-8/12 bg-[rgb(20,20,20)] rounded-2xl'>
        <div className={catoggle?contentShowCSS:contentHideCSS}><CreateAccount/></div>
        <div className={catoggle?contentHideCSS:contentShowCSS}><AccountList/></div>
      </div>
    </div>
  )
}

export default SuperUserDashboard