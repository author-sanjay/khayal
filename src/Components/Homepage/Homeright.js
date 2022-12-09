import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Homeright = () => {
  return (
    <div className="w-1/4 flex ss:hidden xs:hidden sm:block md:block lg:block xl:block  flex-col" style={{ placeItems: "center" }}>
      <div className="mt-7 flex w-full flex-row">
        <textarea
          className="text-black ss:w-auto xs:w-auto sm:ml-auto md:mr-5 lg:mr-5 xl:mr-5 rounded-[30px] border-2 pl-5 pt-3 cursor-pointer"
          placeholder="Search Kagaz Kalam"
          style={{
            backgroundColor: "white",
            
            height: "5vh",
            borderColor: "black",
            overflow:"hidden"
          }}
        />
        <SearchIcon className="cursor-pointer md:mr-5 lg:mr-5 xl:mr-5 mt-2"
          style={{ width: "auto", height: "35px" }}
        />
      </div>
      <div className="flex w-full ml-2 mr-2 flex-col">
        <div className="mt-5 rounded-[20px]  ">
          <span className="text-[25px] mx-5 ml-5 text-black opacity-100">
            Trending
          </span>

          <div className="mt-2 cursor-pointer mx-5 ss:mx-auto xs: mx-auto sm:mx-auto flex flex-col">
            <span className="text-[20px] ml-10 ss:ml-auto xs:ml-auto sm:ml-auto md:mr-5 lg:mr-5 xl:mr-5  text-black opacity-100">
              Title of post
            </span>
            <span className="text-[10px] ml-10 ss:ml-auto xs:ml-auto sm:ml-auto md:mr-5 lg:mr-5 xl:mr-5 mb-4 text-black opacity-100 ss:ml-auto xs:ml-auto sm:ml-auto">
              BY
            </span>
            
          </div>
          <div className="mt-2 cursor-pointer mx-5 ss:mx-auto xs: mx-auto sm:mx-auto flex flex-col">
            <span className="text-[20px] ml-10 text-black opacity-100 ss:ml-auto xs:ml-auto sm:ml-auto md:mr-5 lg:mr-5 xl:mr-5">
              Title of post
            </span>
            <span className="text-[10px] ml-10 mb-4 text-black opacity-100 ss:ml-auto xs:ml-auto sm:ml-auto md:mr-5 lg:mr-5 xl:mr-5">
              BY
            </span>
            
          </div>
          <div className="mt-2 cursor-pointer mx-5 ss:mx-auto xs: mx-auto sm:mx-auto flex flex-col">
            <span className="text-[20px] ml-10 text-black opacity-100 ss:ml-auto xs:ml-auto sm:ml-auto md:mr-5 lg:mr-5 xl:mr-5">
              Title of post
            </span>
            <span className="text-[10px] ml-10 mb-4 text-black opacity-100 ss:ml-auto xs:ml-auto sm:ml-auto md:mr-5 lg:mr-5 xl:mr-5">
              BY
            </span>
            
          </div>
        </div>
        <div className="mt-5 w-full px-2 rounded-[20px] bg-black">
          <span className="text-[25px] ml-5 text-white opacity-100">
            Live Contests
          </span>
          <div className="flex flex-row  cursor-pointer justify-between mx-5 my-3">
            <div className="text-white">Title Of Contest</div>
            <div className="text-white">Contest Prize</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeright;
