import { Avatar } from "@material-ui/core";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ink from "./ink.png";

const Homemiddel = () => {
  return (
    <div
      className="shadow-inner shadow-black ss:w-full xs:w-full sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 "
      style={{
        backgroundColor: "#ebebeb",
        maxHeight: "100vh",
        overflow: "scroll",
      }}
    >
      <div className="flex ss:mt-0 xs:mt-0 sm:mt-5 md:mt-20 lg:mt-20 xl:mt-20  mx-auto flex-col ">
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
        <div className='' style={{overflow:"hidden"}}>
        <div
          className="ml-3 mt-5 rounded-[20px] border-2 shadow-2xl"
          style={{ borderColor: "black" }}
        >
          <div className="border-x-stone-900 w-auto">
            <div className="flex flex-row ml-5 mt-5">
              <Avatar
                className="cursor-pointer"
                style={{ width: "55px", height: "55px" }}
              />
              <div className="flex flex-col ">
                <span className="text-[25px] ml-10">Heading</span>
                <p
                  className="outline-none text-lg ml-10"
                  style={{ width: "auto", backgroundColor: "transparent" }}
                >
                  kjkbhkjkhjkhh jbjh bn
                </p>
                <div className="cursor-pointer">
                  <a className="ml-10 mt-5 ">Read More</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-4 ml-4">
              <div className="mr-auto " style={{ cursor: "pointer" }}>
                <ThumbUpIcon className="cursor-pointer" />
                <span className="text-[20px] mt-auto ml-auto cursor-pointer">
                  Like
                </span>
              </div>
              <div className="mr-auto cursor-pointer">
                <CommentIcon className="ml-8" />
                <span className="text-[20px] mt-9 ml-auto">Comment</span>
              </div>
              <div className="mr-auto cursor-pointer">
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
              <Avatar
                className="cursor-pointer"
                style={{ width: "55px", height: "55px" }}
              />
              <div className="flex flex-col ">
                <span className="text-[25px] ml-10">Heading</span>
                <p
                  className="outline-none text-lg ml-10"
                  style={{ width: "auto", backgroundColor: "transparent" }}
                >
                  kjkbhkjkhjkhh jbjh bn
                </p>
                <div className="cursor-pointer">
                  <a className="ml-10 mt-5 ">Read More</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-4 ml-4">
              <div className="mr-auto " style={{ cursor: "pointer" }}>
                <ThumbUpIcon className="cursor-pointer" />
                <span className="text-[20px] mt-auto ml-auto cursor-pointer">
                  Like
                </span>
              </div>
              <div className="mr-auto cursor-pointer">
                <CommentIcon className="ml-8" />
                <span className="text-[20px] mt-9 ml-auto">Comment</span>
              </div>
              <div className="mr-auto cursor-pointer">
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
              <Avatar
                className="cursor-pointer"
                style={{ width: "55px", height: "55px" }}
              />
              <div className="flex flex-col ">
                <span className="text-[25px] ml-10">Heading</span>
                <p
                  className="outline-none text-lg ml-10"
                  style={{ width: "auto", backgroundColor: "transparent" }}
                >
                  kjkbhkjkhjkhh jbjh bn
                </p>
                <div className="cursor-pointer">
                  <a className="ml-10 mt-5 ">Read More</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-4 ml-4">
              <div className="mr-auto " style={{ cursor: "pointer" }}>
                <ThumbUpIcon className="cursor-pointer" />
                <span className="text-[20px] mt-auto ml-auto cursor-pointer">
                  Like
                </span>
              </div>
              <div className="mr-auto cursor-pointer">
                <CommentIcon className="ml-8" />
                <span className="text-[20px] mt-9 ml-auto">Comment</span>
              </div>
              <div className="mr-auto cursor-pointer">
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
              <Avatar
                className="cursor-pointer"
                style={{ width: "55px", height: "55px" }}
              />
              <div className="flex flex-col ">
                <span className="text-[25px] ml-10">Heading</span>
                <p
                  className="outline-none text-lg ml-10"
                  style={{ width: "auto", backgroundColor: "transparent" }}
                >
                  kjkbhkjkhjkhh jbjh bn
                </p>
                <div className="cursor-pointer">
                  <a className="ml-10 mt-5 ">Read More</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-4 ml-4">
              <div className="mr-auto " style={{ cursor: "pointer" }}>
                <ThumbUpIcon className="cursor-pointer" />
                <span className="text-[20px] mt-auto ml-auto cursor-pointer">
                  Like
                </span>
              </div>
              <div className="mr-auto cursor-pointer">
                <CommentIcon className="ml-8" />
                <span className="text-[20px] mt-9 ml-auto">Comment</span>
              </div>
              <div className="mr-auto cursor-pointer">
                <BookmarkIcon />
                <span className="text-[20px] mt-9 ml-auto">Save</span>
              </div>
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
              <Avatar
                className="cursor-pointer"
                style={{ width: "55px", height: "55px" }}
              />
              <div className="flex flex-col ">
                <span className="text-[25px] ml-10">Heading</span>
                <p
                  className="outline-none text-lg ml-10"
                  style={{ width: "auto", backgroundColor: "transparent" }}
                >
                  kjkbhkjkhjkhh jbjh bn
                </p>
                <div className="cursor-pointer">
                  <a className="ml-10 mt-5 ">Read More</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-4 ml-4">
              <div className="mr-auto " style={{ cursor: "pointer" }}>
                <ThumbUpIcon className="cursor-pointer" />
                <span className="text-[20px] mt-auto ml-auto cursor-pointer">
                  Like
                </span>
              </div>
              <div className="mr-auto cursor-pointer">
                <CommentIcon className="ml-8" />
                <span className="text-[20px] mt-9 ml-auto">Comment</span>
              </div>
              <div className="mr-auto cursor-pointer">
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
              <Avatar
                className="cursor-pointer"
                style={{ width: "55px", height: "55px" }}
              />
              <div className="flex flex-col ">
                <span className="text-[25px] ml-10">Heading</span>
                <p
                  className="outline-none text-lg ml-10"
                  style={{ width: "auto", backgroundColor: "transparent" }}
                >
                  kjkbhkjkhjkhh jbjh bn
                </p>
                <div className="cursor-pointer">
                  <a className="ml-10 mt-5 ">Read More</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-4 ml-4">
              <div className="mr-auto " style={{ cursor: "pointer" }}>
                <ThumbUpIcon className="cursor-pointer" />
                <span className="text-[20px] mt-auto ml-auto cursor-pointer">
                  Like
                </span>
              </div>
              <div className="mr-auto cursor-pointer">
                <CommentIcon className="ml-8" />
                <span className="text-[20px] mt-9 ml-auto">Comment</span>
              </div>
              <div className="mr-auto cursor-pointer">
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
              <Avatar
                className="cursor-pointer"
                style={{ width: "55px", height: "55px" }}
              />
              <div className="flex flex-col ">
                <span className="text-[25px] ml-10">Heading</span>
                <p
                  className="outline-none text-lg ml-10"
                  style={{ width: "auto", backgroundColor: "transparent" }}
                >
                  kjkbhkjkhjkhh jbjh bn
                </p>
                <div className="cursor-pointer">
                  <a className="ml-10 mt-5 ">Read More</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-4 ml-4">
              <div className="mr-auto " style={{ cursor: "pointer" }}>
                <ThumbUpIcon className="cursor-pointer" />
                <span className="text-[20px] mt-auto ml-auto cursor-pointer">
                  Like
                </span>
              </div>
              <div className="mr-auto cursor-pointer">
                <CommentIcon className="ml-8" />
                <span className="text-[20px] mt-9 ml-auto">Comment</span>
              </div>
              <div className="mr-auto cursor-pointer">
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
              <Avatar
                className="cursor-pointer"
                style={{ width: "55px", height: "55px" }}
              />
              <div className="flex flex-col ">
                <span className="text-[25px] ml-10">Heading</span>
                <p
                  className="outline-none text-lg ml-10"
                  style={{ width: "auto", backgroundColor: "transparent" }}
                >
                  kjkbhkjkhjkhh jbjh bn
                </p>
                <div className="cursor-pointer">
                  <a className="ml-10 mt-5 ">Read More</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between mb-4 ml-4">
              <div className="mr-auto " style={{ cursor: "pointer" }}>
                <ThumbUpIcon className="cursor-pointer" />
                <span className="text-[20px] mt-auto ml-auto cursor-pointer">
                  Like
                </span>
              </div>
              <div className="mr-auto cursor-pointer">
                <CommentIcon className="ml-8" />
                <span className="text-[20px] mt-9 ml-auto">Comment</span>
              </div>
              <div className="mr-auto cursor-pointer">
                <BookmarkIcon />
                <span className="text-[20px] mt-9 ml-auto">Save</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Homemiddel;
