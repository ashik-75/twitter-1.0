import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Tweet from "../Tweets/Tweet";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

function TweetDetails({ tweet, comments, setAllComments }) {
  const { data } = useSession();

  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <div className="p-5 flex space-x-3 items-center ">
        <div className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-slate-200 transition cursor-pointer">
          <Link href={"/"}>
            <ArrowLeftIcon className="w-5 h-5 font-bold" />
          </Link>
        </div>
        <p className="font-bold text-lg">Tweet</p>
      </div>
      <Tweet tweet={tweet} totalComment={comments?.length} />

      {data?.user && (
        <CommentBox
          data={data}
          tweetId={tweet?._id}
          setAllComments={setAllComments}
        />
      )}
      <CommentList comments={comments} />
    </div>
  );
}

export default TweetDetails;
