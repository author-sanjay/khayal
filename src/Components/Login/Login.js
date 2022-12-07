import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const Login = () => {
  return (
    <div className="flex w-full flex-col" style={{backgroundColor:"#ebebeb"}}>
      <div className="flex justify-between">
        <LoginLeft />
        <LoginRight />
      </div>
    </div>
  );
};

export default Login;
