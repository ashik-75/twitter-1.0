import sanity from "../lib/sanity";

export async function getTotalTweet() {
  const query = `count(*[_type == "tweet"])`;
  const count = await sanity.fetch(query);

  console.log({ count });

  return count;
}

export async function getTweets(page) {
  const itemPerPage = 5;
  const query = `*[_type == "tweet"] | order(_createdAt desc)[${
    (page - 1) * itemPerPage
  }...${page * itemPerPage}]`;
  const response = await sanity.fetch(query);

  return response;
}

export async function getSingleTweet(...keys) {
  const tweetId = keys?.[1];
  const tweetQuery = `*[_type=="tweet" && _id == "${tweetId}"][0]`;
  const tweet = await sanity.fetch(tweetQuery);
  let comments = [];

  if (tweet) {
    const commentQuery = `*[_type == "comment" && tweetId == "${tweetId}" ]`;
    comments = await sanity.fetch(commentQuery);
  }

  return {
    tweet,
    comments,
  };
}

export async function addTweetReply(payload) {
  const response = await sanity.create(
    {
      _type: "comment",
      ...payload,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
      },
    }
  );

  return response;
}
