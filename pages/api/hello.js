const hello = (req, res) => {
  console.log(req.body);
  res.json({ message: "hi john" });
};

export default hello;
