import React from "react";
import image from "./login.png";

const LoginLeft = () => {
  return (
    <div className="bg-hotorange w-1/2 shadow-2xl shadow-black" style={{minHeight:"100vh"}}>
      <div className="mx-20 mt-20">
      <div className="ml-20 font-poppins font-normal text-[60px] text-black">
          Kagaz Kalam
        </div>
        <img className="mt-[-20px]" src={image} />
      </div>
    </div>
  );
};

export default LoginLeft;
