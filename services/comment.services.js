import axios from "axios";

export const fetchComments = async (...keys) => {
  const tweetId = keys?.[1];

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getComments?tweetId=${tweetId}`;

  const response = await axios.get(url);
  return response.data;
};

export const addCommentToSanity = async (payload) => {
  const response = await axios.post("/api/addComment", payload);

  return response.data;
};
