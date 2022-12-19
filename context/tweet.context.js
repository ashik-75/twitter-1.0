import { createContext, useContext, useState } from "react";

const TweetListContext = createContext();

const TweetListContextProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);

  return (
    <TweetListContext.Provider value={[tweets, setTweets]}>
      {children}
    </TweetListContext.Provider>
  );
};

export default TweetListContextProvider;

export const useTweetListContext = () => {
  return useContext(TweetListContext);
};
