import React from "react";
import Navbar from "../../components/UserDashPage/MainPage/Navbar";
import ReportPDF from "../../components/UserDashPage/ReportPDF/ReportPDF";

const ReportGeneration = () => {


  return (
    <>
      <div className="text-white h-screen flex justify-center items-center ">
        <div className="h-2/4 w-6/7 md:h-2/4 md:w-5/9 lg:w-3/9 bg-[#181818] rounded-xl">
          <form className="h-full w-full flex flex-col justify-center items-center p-3">
            <p className="text-2xl text-bold">Generate Report</p>
            <div className="flex flex-col w-full mt-2">
              <label htmlFor="accountName" className="text-gray-400 text-sm">
                Account Name:
              </label>
              <input
                type="text"
                name="accountName"
                className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full"
                placeholder="Apurv Chitransh"
              />
            </div>
            <div className="flex flex-col md:flex-row w-full mt-2 gap-2">
              <div className="flex-1">
                <div className="flex flex-col w-full mt-2">
                  <label htmlFor="startDate" className="text-gray-400 text-sm">
                    Start Date:
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col w-full mt-2">
                  <label htmlFor="endDate" className="text-gray-400 text-sm">
                    End Date:
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    className="bg-white h-10 rounded-lg text-black text-xl px-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 w-full">
              <button
                className="bg-emerald-600 h-10 rounded-lg text-white text-xl"
                onClick={() => {
                  setEditData(null);
                }}
              >
                Download
              </button>
            </div>
          </form>
        </div>
      </div>
      <ReportPDF/>
      <Navbar />
    </>
  );
};

export default ReportGeneration;
