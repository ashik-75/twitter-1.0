const addTweet = async (req, res) => {
  if (req.method === "POST") {
    const { text, profileImg, image, tweet, username, blockTweet } =
      req.body || {};

    const mutations = [
      {
        create: {
          _type: "tweet",
          text,
          profileImg,
          image,
          tweet,
          username,
          blockTweet,
        },
      },
    ];
    const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    });

    const result = await response.json();

    res.json(result);
  } else {
    res.status(401).json({
      message: "Something wrong happen",
    });
  }
};

export default addTweet;
