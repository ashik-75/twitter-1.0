import {
  ArrowsUpDownIcon,
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function Tweet({ tweet, totalComment }) {
  return (
    <Link href={`/status/${tweet?._id}`}>
      <div className="p-4 border-b flex gap-3 hover:bg-slate-100 transitions cursor-pointer">
        {/* left imgae */}
        <div className="shrink-0">
          <img
            src="/man.png"
            className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover object-top"
            alt=""
          />
        </div>
        {/* Middle */}
        <div className="flex-grow space-y-1">
          {/* Top (Name | email | time) */}
          <div className="flex items-center space-x-2">
            <p className="font-bold">{tweet?.username}</p>
            <p className="text-sm text-slate-500 hidden md:inline">
              {tweet?.email}
            </p>
          </div>

          {/* Middle (text) */}
          <div className="text-base ">{tweet?.text}</div>

          {tweet?.image && (
            <div>
              <img src={tweet?.image} className="h-60 rounded" />
            </div>
          )}

          {/* Bottom (reply(comment) | ReTweet(repost) | Love | share ) */}
          <div className="flex text-slate-500 justify-between">
            <div className="flex space-x-2 items-center group">
              <div className="p-2 group-hover:bg-twitter/10 rounded-full">
                <ChatBubbleOvalLeftIcon className="w-5 h-5 group-hover:text-twitter" />
              </div>
              <span className="group-hover:text-twitter">
                {totalComment || null}
              </span>
            </div>
            <div className="flex space-x-2 items-center group">
              <div className="p-2 group-hover:bg-green-600/20 rounded-full">
                <ArrowsUpDownIcon className="w-5 h-5 group-hover:text-green-600" />
              </div>
              <span className="group-hover:text-green-600">{null}</span>
            </div>
            <div className="flex space-x-2 items-center group transition ">
              <div className="p-2 rounded-full group-hover:bg-rose-400/40">
                <HeartIcon className="w-5 h-5 group-hover:text-rose-500 " />
              </div>
              <span className="group-hover:text-rose-500">{null}</span>
            </div>
            <div className="hover:bg-green-300/20 p-2 rounded-full">
              <ArrowUpTrayIcon className="w-5 h-5 hover:text-green-600" />
            </div>
          </div>
        </div>

        {/* right */}
        <div>
          <EllipsisHorizontalIcon className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}

export default Tweet;
