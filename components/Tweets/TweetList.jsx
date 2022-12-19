import React, { useState } from "react";
import { getTweets } from "../../services/tweet.services";
import Loader from "../Loader";
import Tweet from "./Tweet";

function TweetList({ tweets, setTweets, totalPage }) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleLoadMorePosts = async () => {
    setLoading(true);
    setPage((p) => Math.min(p + 1, totalPage));
    const data = await getTweets(page + 1);
    setTweets((prev) => [...prev, ...data]);
    setLoading(false);
  };

  return (
    <div>
      <div className="text-twitter text-center border-b p-4">
        Show {tweets?.length} Tweets
      </div>
      {tweets.map((tweet) => (
        <Tweet key={tweet._id} tweet={tweet} />
      ))}

      <div className="flex justify-center items-center my-5">
        {page !== totalPage && (
          <button
            className="bg-twitter flex outline-none gap-3 items-center py-2 px-4 rounded text-white font-bold"
            onClick={handleLoadMorePosts}
          >
            Load More
            {loading && <Loader />}
          </button>
        )}
      </div>
    </div>
  );
}

export default TweetList;
