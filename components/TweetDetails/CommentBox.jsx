import React, { useState } from "react";
import { addTweetReply } from "../../services/tweet.services";
import Loader from "../Loader";

function CommentBox({ data, tweetId, setAllComments }) {
  const { image, email, name } = data?.user || {};
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReply = async () => {
    setLoading(true);
    const payload = {
      text,
      tweetId,
      username: name,
      profilePic: image,
      email,
    };

    const data = await addTweetReply(payload);
    setAllComments((prev) => [data, ...prev]);
    setText("");

    setLoading(false);
  };
  return (
    <div className="p-4 border-b flex gap-5">
      <div className="shrink-0">
        <img
          src={data?.user?.image}
          className="w-10 h-10 rounded-full"
          alt=""
        />
      </div>
      {/* center */}
      <div className="flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full outline-none p-3 placeholder:text-gray-500"
          placeholder="Tweet to Reply?"
        />
      </div>

      {/* right */}
      <div>
        <button
          disabled={!text}
          onClick={handleReply}
          className="rounded-full flex items-center space-x-3 px-4 py-2 font-bold text-white bg-twitter disabled:opacity-50"
        >
          <p>Reply</p>
          {loading && <Loader />}
        </button>
      </div>
    </div>
  );
}

export default CommentBox;
