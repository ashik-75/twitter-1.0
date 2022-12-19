import { groq } from "next-sanity";
import sanity from "../../lib/sanity";

const commentQuery = groq`
*[_type=="comment" && tweet._ref==$tweetId] | order(_createdAt desc)
`;

const getComments = async (req, res) => {
  const { tweetId } = req.query || {};
  const comments = await sanity.fetch(commentQuery, {
    tweetId,
  });

  res.json(comments);
};

export default getComments;
