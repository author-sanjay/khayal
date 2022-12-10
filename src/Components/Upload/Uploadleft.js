import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";


const Uploadleft = () => {
  return (
    <div className="bg-white ss:w-full xs:w-full w-3/4" style={{ minHeight: "100vh" }}>
      <div className="ss:block xs:block sm:hidden md:hidden lg:hidden xl:hidden bg-hotorange h-10 ">
          <div className="flex flex-row justify-between mx-3">
            <div className="mt-2 flex flex-row cursor-pointer">
              <HomeIcon style={{ fontSize: "20" }} />
              <span className="text-[15px] ml-1">Home</span>
            </div>

            <div className="mt-2 flex ml-3 flex-row cursor-pointer">
              <BookmarkIcon style={{ fontSize: "20" }} />
              <span className="text-[15px] ml-1">Bookmarks</span>
            </div>

            <div className="mt-2 flex flex-row ml-3 cursor-pointer">
              <WhatshotIcon style={{ fontSize: "20" }} />
              <span className="text-[15px] ml-1">Trending</span>
            </div>

            <div className="mt-2 ml-3 flex flex-row cursor-pointer">
              <SearchIcon style={{ fontSize: "20" }} />
              <span className="text-[15px] ml-1">Search</span>
            </div>

            <div className="ml-3 my-[-2px] flex flex-row cursor-pointer">
              <span className="text-[15px] bg-white rounded-[30px] px-1 py-1 ml-1 mt-2">
                Write
              </span>
            </div>
          </div>
        </div>
      <div className="ss:my-10 xs:my-10 my-20 ss:ml-10 xs:ml-10 xs:h-2/4 sm:hidden md:hidden lg:hidden xl:hidden" style={{overflow:"hidden"}} >
        <div className="flex flex-col mr-20">

          <input className="text-[35px]" type="text" style={{border:"none",outlineWidth:"0px"}} placeholder="Title" />
          <textarea className="text-[20px] mt-5 w-full"  style={{border:"none", outlineWidth:"0px", height:"83vh"}} placeholder="Write Something"/>
        </div>
      </div>

      <div className="ss:hidden xs:hidden sm:block md:block lg:block xl:block" style={{marginLeft:"150px", marginTop:"100px"}} >
        <div className="flex flex-col mr-20">

          <input className="text-[35px]" type="text" style={{border:"none",outlineWidth:"0px"}} placeholder="Title" />
          <textarea className="text-[20px] mt-5 w-full"  style={{border:"none", outlineWidth:"0px", height:"83vh"}} placeholder="Write Something"/>
        </div>
      </div>
      <div className="ss:block xs:block sm:hidden md:hidden lg:hidden xl:hidden" >
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
    </div>
  );
};

export default Uploadleft;
