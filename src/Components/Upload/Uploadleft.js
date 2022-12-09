import React from "react";



const Uploadleft = () => {
  return (
    <div className="bg-white w-3/4" style={{ maxHeight: "100vh" }}>
      <div className="my-20" style={{marginLeft:"150px"}}>
        <div className="flex flex-col mr-20">

          <input className="text-[35px]" type="text" style={{border:"none",outlineWidth:"0px"}} placeholder="Title" />
          <textarea className="text-[20px] mt-5 w-full"  style={{border:"none", outlineWidth:"0px", height:"83vh"}} placeholder="Write Something"/>
        </div>
      </div>
    </div>
  );
};

export default Uploadleft;
