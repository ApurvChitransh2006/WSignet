import React from 'react'

const CreateAccount = () => {
  return (
    <div className='w-7/9 md:w-5/9 lg:w-3/9'>
      <form>
        <p className='text-3xl text-center font-bold'>Create Account</p>
        <div className='bg-white h-0.5 ' ></div>
        <div className="flex flex-col mt-5">
          <label htmlFor="userName" className="text-gray-400 text-sm">User Name:</label>
          <input type="text" name="userName" className="bg-white h-10 rounded-lg text-black text-xl px-2" placeholder="Apurv Chitransh"/>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="userCode" className="text-gray-400 text-sm">User Code:</label>
          <input type="text" name="userCode" className="bg-white h-10 rounded-lg text-black text-xl px-2" placeholder="AC4859"/>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="password" className="text-gray-400 text-sm">Password:</label>
          <input type="password" name="password" className="bg-white h-10 rounded-lg text-black text-xl px-2" placeholder="•••••••••"/>
        </div>
        <div className="flex flex-row mt-2">
          <input type="checkbox" name="isSuperUser" className="bg-white h-6 rounded-lg text-black text-xl px-2"/>
          <label htmlFor="isSuperUser" className="text-gray-400 text-sm">Is the User A Super User?</label>
        </div>
        <button className='bg-white h-10 w-full rounded-lg text-black text-xl px-2 mt-5'>Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount