import { Avatar } from "@material-ui/core";
import { AvTimer } from "@material-ui/icons";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppsIcon from '@mui/icons-material/Apps';

const Profileright = () => {
  return (
    <div className="w-3/4 mt-20">
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
      <div className="flex flex-col mb-5" style={{ placeItems: "center" }}>
        <div className="flex flex-col" style={{ placeItems: "center" }}>
          <Avatar className="" style={{ height: "150px", width: "150px" }} />
          <span className="text-[30px] font-semibold mt-5">Name</span>
          <div className="flex flex-row">
            <div
              className="mx-5 mt-5 flex flex-col"
              style={{ placeItems: "center" }}
            >
              <span className="text-[25px] ">Followers</span>
              <span className="text-[20px] ">15M</span>
            </div>
            <div className="mx-5 mt-5 flex flex-col">
              <span className="text-[25px] ">Following</span>
              <span className="text-[20px] ">15M</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-rows-1 mt-5 mb-5 grid-flow-col gap-4" style={{placeItems:"center"}}>
        <div className='cursor-pointer'>
            <AppsIcon style={{height:"30px",width:"30px"}}/>
            <span className="ml-5 text-[20px] ">Posts</span>
        </div>
        <div className='cursor-pointer'>
            <FavoriteIcon style={{height:"30px",width:"30px"}}/>
            <span className="ml-5 text-[20px] ">Liked</span>
        </div>
        <div className='cursor-pointer'>
            <BookmarkIcon style={{height:"30px",width:"30px"}}/>
            <span className="ml-5 text-[20px] ">Saved</span>
        </div>
        

      </div>
      <hr/>
      <div className='grid grid-cols-3 mt-5 mb-5 gap-4' style={{placeItems:"center"}}>
        <div className='bg-white w-full rounded-[20px]'>
            <div className='text-[25px] ml-3'>Title</div>
            <div className='text-[15px] ml-3'>Content</div>
        </div>
        <div className='bg-white w-full rounded-[20px]'>
            <div className='text-[25px] ml-3'>Title</div>
            <div className='text-[15px] ml-3'>Content</div>
        </div>
        <div className='bg-white w-full rounded-[20px]'>
            <div className='text-[25px] ml-3'>Title</div>
            <div className='text-[15px] ml-3'>Content</div>
        </div>
        <div className='bg-white w-full rounded-[20px]'>
            <div className='text-[25px] ml-3'>Title</div>
            <div className='text-[15px] ml-3'>Content</div>
        </div>
        <div className='bg-white w-full rounded-[20px]'>
            <div className='text-[25px] ml-3'>Title</div>
            <div className='text-[15px] ml-3'>Content</div>
        </div>
                <div className='bg-white w-full rounded-[20px]'>
            <div className='text-[25px] ml-3'>Title</div>
            <div className='text-[15px] ml-3'>Content</div>
        </div>        <div className='bg-white w-full rounded-[20px]'>
            <div className='text-[25px] ml-3'>Title</div>
            <div className='text-[15px] ml-3'>Content</div>
        </div>

        
        

      </div>
    </div>
  );
};

export default Profileright;
