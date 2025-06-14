import React from "react";
import HomeFormSection from "../components/HomePage/HomeFormSection";
import ImageSection from "../components/HomePage/ImageSection";

const HomePage = () => {
  return (
    <div className="h-screen bg-black flex flex-col-reverse sm:flex-row">
      {/* Form Section of the Website */}
      <HomeFormSection/>
      {/* Image Section of the Website */}
      <ImageSection/>
    </div>
  );
};

export default HomePage;
