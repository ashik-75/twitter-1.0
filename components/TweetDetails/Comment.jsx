import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function Comment({ comment }) {
  return (
    <Link href={`/status/${comment._id}`}>
      <div className="p-4 border-b flex gap-3 hover:bg-slate-100 transitions cursor-pointer">
        {/* left imgae */}
        <div className="h-10 w-10">
          <img
            src="/man.png"
            className=" w-full h-full rounded-full object-cover object-top"
            alt=""
          />
        </div>
        {/* Middle */}
        <div className="flex-grow space-y-1">
          {/* Top (Name | email | time) */}
          <div className="flex items-center space-x-2">
            <p className="font-bold">{comment?.username}</p>
            <p className="text-sm hidden md:inline text-slate-500">
              {comment?.email} .
            </p>
          </div>

          {/* Middle (text) */}
          <div className="text-base ">{comment?.text}</div>

          {comment?.image && (
            <div>
              <img src={comment?.image} className="h-60 rounded" />
            </div>
          )}
        </div>

        {/* right */}
        <div>
          <EllipsisHorizontalIcon className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}

export default Comment;
