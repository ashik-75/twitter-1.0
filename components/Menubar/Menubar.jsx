import {
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon as SolidBellIcon,
  BookmarkIcon as SolidBookmarkIcon,
  EllipsisHorizontalCircleIcon as SolidEllipsisHorizontalCircleIcon,
  EnvelopeIcon as SolidEnvelopeIcon,
  HashtagIcon as SolidHashtagIcon,
  HomeIcon as SolidHomeIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React from "react";
import Menu from "./Menu";
import ProfileBar from "./ProfileBar";

function Menubar() {
  const { data } = useSession() || {};

  return (
    <div className="relative w-[8rem] h-screen md:w-[15rem]  overflow-y-scroll scrollbar-hide">
      <div className="w-14 h-14 mx-auto md:mx-0 my-2 p-3 transition hover:bg-twitter/10 rounded-full cursor-pointer">
        <img
          src="/twitter.png"
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <Menu SolidIcon={SolidHomeIcon} Icon={HomeIcon} url="/" text={"Home"} />
        <Menu
          SolidIcon={SolidHashtagIcon}
          Icon={HashtagIcon}
          url="/explore"
          text={"Explore"}
        />
        <Menu
          SolidIcon={SolidBellIcon}
          Icon={BellIcon}
          url="/notification"
          text={"Notification"}
        />
        <Menu
          SolidIcon={SolidEnvelopeIcon}
          Icon={EnvelopeIcon}
          url="/message"
          text={"Message"}
        />
        <Menu
          SolidIcon={SolidBookmarkIcon}
          Icon={BookmarkIcon}
          url="/bookmark"
          text={"Bookmark"}
        />
        <Menu
          SolidIcon={SolidUserIcon}
          Icon={UserIcon}
          url="/profile"
          text={"Profile"}
        />
        <Menu
          SolidIcon={SolidEllipsisHorizontalCircleIcon}
          Icon={EllipsisHorizontalCircleIcon}
          url="/more"
          text={"More"}
        />
        <button className="hidden md:inline mt-2 bg-twitter w-[60%] md:w-[80%] py-2 md:py-3 rounded-full font-bold text-white text-sm md:text-xl">
          Tweet
        </button>
      </div>

      <ProfileBar user={data?.user} />
    </div>
  );
}

export default Menubar;
