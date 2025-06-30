import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'

const HomeFormSection = () => {

  const {login} = useAuth()

  const [form, setForm] = useState({
    firmcode: "",
    password: "",
  })
  
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({...form, [name]: value})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(res)
    await login(form)
    setForm({
    firmcode: "",
    password: "",
  })
  }

  return (
    <div className="flex-1 h-screen flex justify-center items-center">
        <div className="w-full flex flex-col text-white">
          {/* Header Part */}
          <div>
            <div className="text-center">
              <p className="text-3xl font-bold">Login</p>
            </div>
            <div className="w-full flex justify-center items-center mt-1">
              <div className="bg-white h-0.5 w-9/12"></div>
            </div>
          </div>
          {/* Content Part */}
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="w-full flex justify-center items-center mt-10">
              <div className="w-9/12">
                <div className="flex flex-col">
                  <label htmlFor="firmcode" className="text-gray-400 text-sm">User Code:</label>
                  <input type="text" name="firmcode" className="bg-white h-10 rounded-lg text-black text-xl px-2" placeholder="AC2006" value={form.firmcode} onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="password" className="text-gray-400 text-sm">Password:</label>
                  <input type="password" name="password" className="bg-white h-10 rounded-lg text-black text-xl px-2" placeholder="•••••••••" value={form.password} onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="flex flex-col mt-10">
                  <button className="bg-emerald-600 h-10 rounded-lg text-white text-xl">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default HomeFormSection