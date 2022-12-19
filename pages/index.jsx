import { useSession } from "next-auth/react";
import React, { useState } from "react";
import AddTweet from "../components/AddTweet/AddTweet";
import Layout from "../components/Layout";
import LoginBanner from "../components/Login/LoginBanner";
import TweetList from "../components/Tweets/TweetList";
import sanity from "../lib/sanity";

function Homepage({ AllTweets, totalPage }) {
  const [tweets, setTweets] = useState(AllTweets || []);
  const session = useSession();

  return (
    <Layout>
      <div className="overflow-y-scroll h-screen scrollbar-hide w-full">
        <div className="font-bold text-lg p-4">Home</div>

        {session?.data?.user ? (
          <AddTweet user={session?.data?.user} setTweets={setTweets} />
        ) : (
          <LoginBanner />
        )}

        <TweetList
          tweets={tweets}
          setTweets={setTweets}
          totalPage={totalPage}
        />
      </div>
    </Layout>
  );
}

export default Homepage;

export async function getServerSideProps() {
  const response = await sanity.fetch(
    `*[_type == "tweet"] | order(_createdAt desc)[0...5]`
  );
  const count = await sanity.fetch(`count(*[_type == "tweet"])`);

  return {
    props: {
      AllTweets: response,
      totalPage: Math.ceil(count / 5),
    },
  };
}
