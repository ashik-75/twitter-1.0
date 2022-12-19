const addComment = async (req, res) => {
  const { text, username, profileImg, tweetId } = req.body || {};

  try {
    const mutations = [
      {
        create: {
          _type: "comment",
          text,
          profileImg,
          username,
          tweet: {
            _type: "reference",
            _ref: tweetId,
          },
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
  } catch (error) {
    res.status(400).json({
      message: error?.message,
    });
  }
};

export default addComment;
