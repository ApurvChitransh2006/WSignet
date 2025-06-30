import React, { useEffect } from "react";
import HomeFormSection from "../components/HomePage/HomeFormSection";
import ImageSection from "../components/HomePage/ImageSection";
import useAuth from "../hooks/useAuth";
import ProtectedRoutes from "./ProtectedRoutes";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {user} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/dash')
  }, [user])
  
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
