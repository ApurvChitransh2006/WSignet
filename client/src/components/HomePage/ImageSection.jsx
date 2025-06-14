import React from 'react'
import darkBackground from "../../assets/darkBackground.jpg";

const ImageSection = () => {
  return (
    <div className="sm:flex-1 md:flex-[2_2_0%]  w-full sm:h-screen relative">
        <img
          className="object-cover w-full h-64 sm:h-full object-left rounded-b-3xl sm:rounded-l-3xl "
          src={darkBackground}
          alt=""
        />
        <div className=" text-white absolute bottom-5 right-5 sm:bottom-12 sm:right-12 text-right">
          <p className="text-4xl sm:text-7xl">Signet</p>
          <p className="mt-2 text-gray-400">Welcome to the Remote World</p>
        </div>
      </div>
  )
}

export default ImageSection