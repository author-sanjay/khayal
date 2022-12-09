import React from "react";

const Uploadright = () => {
  return (
    <div className="w-1/4" style={{ maxHeight: "100vh" }}>
      <div className="flex flex-col mx-10 my-10">
        <span className="text-[25px]">Tags</span>
        <input
          className="text-[20px] cursor-pointer mt-5 opacity-100 text-black"
          placeholder="Tags Seperated By Commas"
          type="text"
          style={{
            border: "none",
            backgroundColor: "transparent",
            outlineWidth: "0px",
          }}
        />

        <div className="mt-10">
          <span className="text-[20px]">Upload Images</span>
          <div className="">
            <input
              className="mt-2 cursor-pointer bg-white rounded-[30px] px-2 py-2"
              type="file"
            />
          </div>
        </div>
        <div className="mt-10 ">
          <button className="text-[20px] text-white w-full px-2 py-2 rounded-[30px]" style={{backgroundColor:"black"}}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Uploadright;
