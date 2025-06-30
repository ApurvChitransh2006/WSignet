import React, { useState } from 'react'
import instance from '../../api/axiosInstance';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firmname: '',
    firmcode: '',
    password: '',
    isSuperUser: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const res = await instance.post('/user/', formData);
      console.log("User created successfully:", res.data);
      alert("Account Created Successfully!");
      setFormData({
    firmname: '',
    firmcode: '',
    password: '',
    isSuperUser: false
  })
      // Optional: Clear form or redirect
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account.");
      setFormData({
    firmname: '',
    firmcode: '',
    password: '',
    isSuperUser: false
  })
    }
  };

  return (
    <div className='w-7/9 md:w-5/9 lg:w-3/9'>
      <form onSubmit={handleSubmit}>
        <p className='text-3xl text-center font-bold'>Create Account</p>
        <div className='bg-white h-0.5 ' ></div>

        <div className="flex flex-col mt-5">
          <label htmlFor="firmname" className="text-gray-400 text-sm">User Name:</label>
          <input
            type="text"
            name="firmname"
            value={formData.firmname}
            onChange={handleChange}
            className="bg-white h-10 rounded-lg text-black text-xl px-2"
            placeholder="Apurv Chitransh"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="firmcode" className="text-gray-400 text-sm">User Code:</label>
          <input
            type="text"
            name="firmcode"
            value={formData.firmcode}
            onChange={handleChange}
            className="bg-white h-10 rounded-lg text-black text-xl px-2"
            placeholder="AC4859"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="password" className="text-gray-400 text-sm">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-white h-10 rounded-lg text-black text-xl px-2"
            placeholder="•••••••••"
          />
        </div>

        <div className="flex flex-row mt-2">
          <input
            type="checkbox"
            name="isSuperUser"
            checked={formData.isSuperUser}
            onChange={handleChange}
            className="bg-white h-6 rounded-lg text-black text-xl px-2"
          />
          <label htmlFor="isSuperUser" className="text-gray-400 text-sm ml-2">Is the User A Super User?</label>
        </div>

        <button
          type="submit"
          className='bg-white h-10 w-full rounded-lg text-black text-xl px-2 mt-5'
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default CreateAccount;
