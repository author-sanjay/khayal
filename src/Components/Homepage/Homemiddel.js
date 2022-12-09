import { Avatar } from "@material-ui/core";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const Homemiddel = () => {
  return (
    <div
      className="shadow-inner shadow-black ss:w-full xs:w-full sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 "
      style={{
        backgroundColor: "#ebebeb",
        minHeight: "100vh",
        overflow: "scroll",
      }}
    >
      <div className="flex mt-20 mx-auto flex-col ">
        <span className="text-[30px] ml-3">Home</span>
        <div className="">
          <div
            className="ml-3 mt-5 rounded-[20px] border-2 shadow-2xl"
            style={{ borderColor: "black" }}
          >
            <div className="border-x-stone-900 w-auto">
              <div className="flex flex-row ml-5 mt-5">
                <Avatar style={{ width: "55px", height: "55px" }} />
                <div className="flex flex-col">
                  <span className="text-[25px] ml-10">Heading</span>
                  <p
                    className="outline-none text-lg ml-10"
                    style={{ width: "auto", backgroundColor: "transparent" }}
                  >
                    kjkbhkjkhjkhh jbjh bn
                  </p>
                  <p className="ml-10 mt-5">Read More</p>
                </div>

              </div>
              <div className="flex flex-row justify-between mb-4 ml-4">
                <div className="mr-auto">
                  <ThumbUpIcon />
                  <span className="text-[20px] mt-auto ml-auto">Like</span>
                </div>
                <div className="mr-auto">
                  <CommentIcon className="sm:ml-8"/>
                  <span className="text-[20px] mt-9 ml-auto">Comment</span>
                </div>
                <div className="mr-auto">
                  <BookmarkIcon />
                  <span className="text-[20px] mt-9 ml-auto">Save</span>
                </div>
              </div>
              
            </div>
          </div>
          
          <div
            className="ml-3 mt-5 rounded-[20px] border-2 shadow-2xl"
            style={{ borderColor: "black" }}
          >
            <div className="border-x-stone-900 w-auto">
              <div className="flex flex-row ml-5 mt-5">
                <Avatar style={{ width: "55px", height: "55px" }} />
                <div className="flex flex-col">
                  <span className="text-[25px] ml-10">Heading</span>
                  <p
                    className="outline-none text-lg ml-10"
                    style={{ width: "auto", backgroundColor: "transparent" }}
                  >
                    kjkbhkjkhjkhh jbjh bn
                  </p>
                  <p className="ml-10 mt-5">Read More</p>
                </div>

              </div>
              <div className="flex flex-row justify-between mb-4 ml-4">
                <div className="mr-auto">
                  <ThumbUpIcon />
                  <span className="text-[20px] mt-auto ml-auto">Like</span>
                </div>
                <div className="mr-auto">
                  <CommentIcon className="sm:ml-8"/>
                  <span className="text-[20px] mt-9 ml-auto">Comment</span>
                </div>
                <div className="mr-auto">
                  <BookmarkIcon />
                  <span className="text-[20px] mt-9 ml-auto">Save</span>
                </div>
              </div>
              
            </div>
          </div>
          <div
            className="ml-3 mt-5 rounded-[20px] border-2 shadow-2xl"
            style={{ borderColor: "black" }}
          >
            <div className="border-x-stone-900 w-auto">
              <div className="flex flex-row ml-5 mt-5">
                <Avatar style={{ width: "55px", height: "55px" }} />
                <div className="flex flex-col">
                  <span className="text-[25px] ml-10">Heading</span>
                  <p
                    className="outline-none text-lg ml-10"
                    style={{ width: "auto", backgroundColor: "transparent" }}
                  >
                    kjkbhkjkhjkhh jbjh bn
                  </p>
                  <p className="ml-10 mt-5">Read More</p>
                </div>

              </div>
              <div className="flex flex-row justify-between mb-4 ml-4">
                <div className="mr-auto">
                  <ThumbUpIcon />
                  <span className="text-[20px] mt-auto ml-auto">Like</span>
                </div>
                <div className="mr-auto">
                  <CommentIcon className="sm:ml-8"/>
                  <span className="text-[20px] mt-9 ml-auto">Comment</span>
                </div>
                <div className="mr-auto">
                  <BookmarkIcon />
                  <span className="text-[20px] mt-9 ml-auto">Save</span>
                </div>
              </div>
              
            </div>
          </div>
           <div
            className="ml-3 mt-5 rounded-[20px] border-2 shadow-2xl"
            style={{ borderColor: "black" }}
          >
            <div className="border-x-stone-900 w-auto">
              <div className="flex flex-row ml-5 mt-5">
                <Avatar style={{ width: "55px", height: "55px" }} />
                <div className="flex flex-col">
                  <span className="text-[25px] ml-10">Heading</span>
                  <p
                    className="outline-none text-lg ml-10"
                    style={{ width: "auto", backgroundColor: "transparent" }}
                  >
                    kjkbhkjkhjkhh jbjh bn
                  </p>
                  <p className="ml-10 mt-5">Read More</p>
                </div>

              </div>
              <div className="flex flex-row justify-between mb-4 ml-4">
                <div className="mr-auto">
                  <ThumbUpIcon />
                  <span className="text-[20px] mt-auto ml-auto">Like</span>
                </div>
                <div className="mr-auto">
                  <CommentIcon className="sm:ml-8"/>
                  <span className="text-[20px] mt-9 ml-auto">Comment</span>
                </div>
                <div className="mr-auto">
                  <BookmarkIcon />
                  <span className="text-[20px] mt-9 ml-auto">Save</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homemiddel;
