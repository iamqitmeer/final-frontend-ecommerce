import React from "react";
import Post from "../LeftSideBar/Post";

function Center() {
  return (
    <div className="ml-[200px] mr-[200px] overflow-auto gap-3 p-12 border-r-2 border-black flex items-center justify-center flex-col ">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Center;
