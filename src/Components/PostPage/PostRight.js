import { Avatar } from "@mui/material";
import React from "react";

const PostRight = () => {
  return (
    <div
      className="w-1/4 flex ss:hidden xs:hidden sm:block md:block lg:block xl:block  flex-col"
      style={{ placeItems: "center" }}
    >
      <div className="flex w-auto ml-10 mr-20  flex-col">
        <div className="mt-10 text-[25px] rounded-[20px] ">More Such Posts</div>

        <div className="bg-white mb-5 w-auto pl-5 cursor-pointer rounded-[20px]">
          <div className="text-[20px]">Title</div>
          <div className="text-[15px]">Post</div>
        </div>
        <div className="bg-white mb-5  w-auto pl-5 rounded-[20px] cursor-pointer">
          <div className="text-[20px]">Title</div>
          <div className="text-[15px]">Post</div>
        </div>
        <div className="bg-white w-auto mb-5  pl-5 rounded-[20px]  cursor-pointer">
          <div className="text-[20px]">Title</div>
          <div className="text-[15px]">Post</div>
        </div>
        <div className="bg-white w-auto mb-5 pl-5 rounded-[20px] cursor-pointer">
          <div className="text-[20px]">Title</div>
          <div className="text-[15px]">Post</div>
        </div>
      </div>
    </div>
  );
};

export default PostRight;
