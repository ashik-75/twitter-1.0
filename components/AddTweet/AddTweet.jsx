import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import sanity from "../../lib/sanity";
import Loader from "../Loader";

function AddTweet({ user, setTweets }) {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEmojiOpen, setEmojiOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmoji = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
    setEmojiOpen(false);
  };

  const imageAdded = () => {
    toast.success("image url added");
    setIsOpen(false);
  };

  const handleAddTweet = async () => {
    setLoading(true);
    const payload = {
      text,
      image: imageUrl,
      username: user?.name,
      email: user?.email,
      profilePic: user?.image,
    };

    const result = await sanity.create(
      {
        _type: "tweet",
        ...payload,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
        },
      }
    );

    setTweets((prev) => [result, ...prev]);

    setLoading(false);
    setText("");
    setImageUrl("");
  };
  return (
    <div className="p-4 pt-0 border-b flex">
      <div className=" shrink-0">
        <img
          src={user?.image}
          className="w-14 h-14 object-cover object-top rounded-full"
          alt=""
        />
      </div>
      <div className="flex-grow">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="tweet"
          cols="30"
          rows="4"
          className="outline-none placeholder:text-xl border-b border-b-white focus:border-b-slate-200 placeholder:text-slate-500 w-full md:w-[90%] p-4"
          placeholder="What's happening?"
        />

        {isOpen && (
          <div className="flex gap-5">
            <div className="flex-1">
              <input
                value={imageUrl}
                type="text"
                placeholder="Enter Image Url ..."
                className="w-full outline-none border px-2 py-1 mb-2 rounded"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            <div>
              <button onClick={imageAdded} className="px-2 rounded py-1 border">
                Add
              </button>
            </div>
          </div>
        )}
        {isEmojiOpen && <EmojiPicker onEmojiClick={handleEmoji} />}
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 text-twitter">
            <PhotoIcon
              className="h-5 w-5 cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            <FaceSmileIcon
              className="h-5 w-5 cursor-pointer"
              onClick={() => setEmojiOpen((prev) => !prev)}
            />
          </div>
          <div>
            <button
              onClick={handleAddTweet}
              disabled={!text}
              className="rounded-full flex gap-3 items-center disabled:cursor-not-allowed disabled:opacity-50 text-white font-bold px-4 py-2 bg-twitter"
            >
              Tweet {loading && <Loader />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTweet;
