import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import TweetDetails from "../../components/TweetDetails/index.js";
import { getSingleTweet } from "../../services/tweet.services";

function Tweet() {
  const router = useRouter();
  const tweetId = router.query?.tweetId;
  const { data, error } = useSWR(["tweet", tweetId], getSingleTweet);
  const { tweet, comments } = data || {};
  const [allComments, setAllComments] = useState(comments || []);

  useEffect(() => {
    if (comments) {
      setAllComments(comments);
    }
  }, [comments]);

  return (
    <Layout>
      {!data && !error ? (
        <div className="h-40 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <TweetDetails
          tweet={tweet}
          comments={allComments}
          setAllComments={setAllComments}
        />
      )}
    </Layout>
  );
}

export default Tweet;
