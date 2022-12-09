import React from "react";
import ink from "./ink.png";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Avatar } from "@mui/material";
import Header from "./Header";
const Homeleft = () => {
  return (
    
    <div
      className="flex flex-col ss:hidden xs:hidden sm:grid md:grid lg:gird xl:grid justify-items-end w-1/4 mr-2"
      style={{ minHeight: "100vh", placeItems: "end" }}
    >
      <div
        className="flex flex-col mt-5 "
        style={{ justifyContent: "space-between" }}
      >
        <div className="flex flex-col " style={{marginBottom:"350px"}}>
          
          <img src={ink} alt="logo" style={{ width: "40px", height: "40px" }} />
          
          <div className="mt-10 flex flex-row cursor-pointer">
            <HomeIcon style={{ fontSize: "35" }} />
            <span className="text-[25px] ml-3">Home</span>
          </div>

          <div className="mt-5 flex flex-row cursor-pointer">
            <BookmarkIcon style={{ fontSize: "35" }} />
            <span className="text-[25px] ml-3">Bookmarks</span>
          </div>

          <div className="mt-5 flex flex-row cursor-pointer">
            <WhatshotIcon style={{ fontSize: "35" }} />
            <span className="text-[25px] ml-3">Trending</span>
          </div>

          <div className="mt-5 flex flex-row cursor-pointer">
            <SearchIcon style={{ fontSize: "35" }} />
            <span className="text-[25px] ml-3">Search</span>
          </div>
          
          <div className="mt-5 bg-white pl-4 py-2 rounded-[30px] flex flex-row cursor-pointer">
            <img src={ink} alt="logo" style={{ width: "40px", height: "40px" }} />
            <span className="text-[25px] ml-3 mt-1">Write</span>
          </div>
        
        </div>
        
        <div className="flex flex-col mt-40" >
          
          <div className="bg-white px-2 py-2 rounded-[30px]">
            
            <div className="flex flex-row cursor-pointer">
              
              <Avatar style={{ height: "60px", width: "60px" }} />
              <div className="flex flex-col">
                <span className="text-[18px] ml-3 mt-1">Sanjay Kumar</span>
                <span className="text-[12px] ml-3">@author-sanju</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Homeleft;
