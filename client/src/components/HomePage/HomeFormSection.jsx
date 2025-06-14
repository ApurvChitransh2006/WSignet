import React from 'react'

const HomeFormSection = () => {
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
          <form>
            <div className="w-full flex justify-center items-center mt-10">
              <div className="w-9/12">
                <div className="flex flex-col">
                  <label htmlFor="userCode" className="text-gray-400 text-sm">User Code:</label>
                  <input type="text" name="userCode" className="bg-white h-10 rounded-lg text-black text-xl px-2" placeholder="AC2006"/>
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="password" className="text-gray-400 text-sm">Password:</label>
                  <input type="password" name="password" className="bg-white h-10 rounded-lg text-black text-xl px-2" placeholder="•••••••••"/>
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