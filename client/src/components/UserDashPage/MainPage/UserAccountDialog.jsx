import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import useAuth from '../../../hooks/useAuth';
import instance from '../../../api/axiosInstance';

const UserAccountDialog = ({ setEditData }) => {
  const [formData, setFormData] = useState({
    firmname: '',
    firmcode: '',
    password: '',
    isSuperUser: false
  });

  const {user} = useAuth()

  // Fetch user data on component mount
  useEffect(() => {
    (async () => {
      try {
        console.log(user.firmcode)
        const res = await instance.get(`/user/${user.firmcode}`);   // editData = firmcode
        console.log("Fetched user details:", res.data);

        if (res.data) {
          setFormData({
            firmname: res.data.firmname || '',
            firmcode: res.data.firmcode || '',
            password: '',  // Don't prefill passwords for security reasons
            isSuperUser: false
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        alert("Error fetching user details!");
      }
    })();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await instance.put(`/user/${user._id}`, formData);
      console.log("User updated successfully:", res.data);
      alert("User updated successfully!");
      setEditData(null);  // Close dialog
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className='fixed inset-0 bg-[#000000a0] grid place-items-center z-50'>
      <div className='bg-black border-2 border-white rounded-2xl min-h-4/7 min-w-11/12 md:min-w-2/5 flex justify-center items-center px-5 relative'>
        <form className='w-11/12 md:w-3/5' onSubmit={handleSubmit}>
          <div className='text-center text-3xl font-bold'>Edit User</div>

          <div className='flex flex-col w-full mt-2'>
            <label htmlFor="firmname" className='text-gray-400 text-sm'>Firm Name:</label>
            <input
              type="text"
              name="firmname"
              value={formData.firmname}
              onChange={handleChange}
              className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full"
              placeholder="Firm Name"
              required
            />
          </div>

          <div className='flex flex-col w-full mt-2'>
            <label htmlFor="firmcode" className='text-gray-400 text-sm'>Firm Code:</label>
            <input
              type="text"
              name="firmcode"
              value={formData.firmcode}
              onChange={handleChange}
              className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full"
              placeholder="Firm Code"
              disabled
            />
          </div>

          <div className='flex flex-col w-full mt-2'>
            <label htmlFor="password" className='text-gray-400 text-sm'>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full"
              placeholder="New Password"
            />
          </div>

          <div className="flex flex-col mt-10">
            <button
              type="submit"
              className="bg-emerald-600 h-10 rounded-lg text-white text-xl"
              disabled = {user.firmcode === "DEMO"}
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* Close Button */}
        <div
          className='absolute top-2 right-2 text-sm cursor-pointer'
          onClick={() => { setEditData(null); }}
        >
          <RxCross2 className='text-2xl' />
        </div>
      </div>
    </div>
  );
};

export default UserAccountDialog;
