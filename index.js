const express = require("express");
const postRouter = require("./modules/posts/post.route");
const { dbConnect } = require("./config/dbConnect");
const { authRouter } = require("./modules/users/auth.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my server. use/posts to get all posts");
});
app.use("/auth", authRouter);
app.use("/posts", postRouter);

const start = async () => {
  await dbConnect();

  // async function start() {
  //   await dbConnect();

  app.listen(4000, () => {
    console.log("Server listening on http://localhost:4000");
  });
};

start();
