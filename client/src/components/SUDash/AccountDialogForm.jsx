import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import instance from '../../api/axiosInstance';

const AccountDialogForm = ({ editData, setEditData }) => {
  const [formData, setFormData] = useState({
    firmname: '',
    firmcode: '',
    password: '',
    isSuperUser: false
  });

  // Fetch user data on component mount
  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(`/user/${editData}`);   // editData = firmcode
        console.log("Fetched user details:", res.data);

        if (res.data) {
          setFormData({
            firmname: res.data.firmname || '',
            firmcode: res.data.firmcode || '',
            password: '',  // Don't prefill passwords for security reasons
            isSuperUser: res.data.isSuperUser || false
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        alert("Error fetching user details!");
      }
    })();
  }, [editData]);

  // Handle form input changes
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
      const id = await instance.get(`/user/${editData}`);
      const res = await instance.put(`/user/${id.data._id}`, formData);
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

          <div className="flex flex-row mt-2 gap-2">
            <input
              type="checkbox"
              name="isSuperUser"
              checked={formData.isSuperUser}
              onChange={handleChange}
              className="bg-white h-6 rounded-lg text-black text-2xl px-2"
            />
            <label htmlFor="isSuperUser" className="text-gray-400 text-sm">Is Super User?</label>
          </div>

          <div className="flex flex-col mt-10">
            <button
              type="submit"
              className="bg-emerald-600 h-10 rounded-lg text-white text-xl"
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

export default AccountDialogForm;
