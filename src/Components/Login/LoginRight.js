import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import table from "./table.jpg";
const LoginRight = () => {
  return (
    <div className="w-1/2 mt-40 " style={{ minHeight: "100vh" }}>
      <div className="flex mt-40 flex-col" style={{ placeItems: "center" }}>
        
        <div className="font-poppins font-normal text-[60px] text-black">
          Login
        </div>

        <div className="font-poppins font-normal text-[20px] text-black">
          Login to your account get access to your writing space and
          competitions
        </div>
        <div className="mt-5 flex flex-row cursor-pointer">
          <div className=" font-poppins font-normal text-[20px] text-black">
            Login Using
          </div>
          <GoogleIcon className="mt-1 ml-2" />
          <div className=" font-poppins font-normal text-[20px] text-black">
            oogle
          </div>
        </div>
        </div>
      
    </div>
  );
};

export default LoginRight;
