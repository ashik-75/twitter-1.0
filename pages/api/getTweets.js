import { groq } from "next-sanity";
import sanity from "../../lib/sanity";

const url = groq`
*[_type=="tweet" && !blockTweet] | order(_createdAt desc)
`;
const getAllTweet = async (req, res) => {
  try {
    // res.json("hello sanity");
    const response = await sanity.fetch(url);
    // console.log(response);

    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error?.message || "Something went wrong!",
    });
  }
};

export default getAllTweet;
