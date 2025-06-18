import React from 'react';
import Navbar from '../../components/UserDashPage/MainPage/Navbar';

const UploadDb = () => {
  return (
    <>
      <form >
        <div className="text-white h-screen flex flex-col justify-center items-center gap-6">
          <div className='h-1/3 w-2/3 md:w-1/3 flex flex-col justify-center items-center gap-2'>
            <label
              htmlFor="file-upload"
              className="cursor-pointer h-full w-full bg-[#202020] rounded-2xl border-2 border-gray-600 text-gray-600 border-dashed flex justify-center items-center text-center"
            >
              Drag & Drop the File Here or Click to Upload
            </label>
            <input
              id="file-upload"
              type="file"
              className="translate-x-12 sm:translate-x-14"
            />
          </div>
          <div className='flex flex-col md:flex-row md:gap-2'>
            <label htmlFor="selectDB">
              Select the file you want to Upload:
            </label>
            <select name="selectDB" className='text-black bg-white rounded-sm'>
                <option value="product">Product</option>
                <option value="accounts">Accounts</option>
            </select>
          </div>
          <input type="submit" value="Submit" className='bg-green-600 active:bg-green-400 rounded-xl py-2 w-2/3 md:w-1/3'/>
        </div>
      </form>
      <Navbar />
    </>
  );
};

export default UploadDb;
