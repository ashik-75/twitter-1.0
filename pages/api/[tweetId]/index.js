import { groq } from "next-sanity";
import sanity from "../../../lib/sanity";

const tweetQuery = groq`
*[_type == "tweet" && _id == $tweetId][0]
`;

export const getTweet = async (req, res) => {
  try {
    const { tweetId } = req.query || {};
    const tweet = await sanity.fetch(tweetQuery, {
      tweetId,
    });

    res.json(tweet);
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};

export default getTweet;
