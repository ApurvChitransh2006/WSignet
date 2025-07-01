import React, { useState } from 'react';
import Navbar from '../../components/UserDashPage/MainPage/Navbar';
import instance from '../../api/axiosInstance'; // Your custom Axios instance
import useAuth from '../../hooks/useAuth';

const UploadDb = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDB, setSelectedDB] = useState('product');
  const [status, setStatus] = useState('');
  const { user } = useAuth();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDbChange = (e) => {
    setSelectedDB(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setStatus('Please select a file first.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      let endpoint = ''
      if (selectedDB === 'product'){
         endpoint = `/item/update/${user.firmcode}`
      } else if (selectedDB === 'accounts') {
        endpoint = `/accounts/update/${user.firmcode}`
      } else {
        endpoint = `/ledger/update/${user.firmcode}`
      }

      const response = await instance.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setSelectedDB(null)
      setStatus('Upload Successful: ' + response.data);
    } catch (error) {
      console.error(error);
      setStatus('Upload Failed: ' + error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              className="hidden"
              onChange={handleFileChange}
            />
            {selectedFile && (
              <p className="text-green-500 text-sm">{selectedFile.name}</p>
            )}
          </div>

          <div className='flex flex-col md:flex-row md:gap-2'>
            <label htmlFor="selectDB">
              Select the file you want to Upload:
            </label>
            <select
              name="selectDB"
              className='text-black bg-white rounded-sm'
              value={selectedDB}
              onChange={handleDbChange}
            >
              <option value="product">Product</option>
              <option value="accounts">Accounts</option>
              <option value="ledger">Ledger</option>
            </select>
          </div>

          <input
            type="submit"
            value="Submit"
            className='bg-green-600 active:bg-green-400 rounded-xl py-2 w-2/3 md:w-1/3'
          />

          {status && <p className="text-sm mt-2">{status}</p>}
        </div>
      </form>

      <Navbar />
    </>
  );
};

export default UploadDb;
