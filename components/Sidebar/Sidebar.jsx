import React from "react";
import Search from "./Search";
import Trending from "./Trending";
import Widgets from "./Widgets";

function Sidebar() {
  return (
    <div className="hidden md:w-[20rem] h-screen overflow-y-scroll scrollbar-hide lg:inline px-5 py-4 space-y-5">
      <Search />
      <Widgets />
      <Trending />
    </div>
  );
}

export default Sidebar;
