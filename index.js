const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const User = require("./api/models/User");
const Post = require("./api/models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require("fs");
const uploadMiddleware = multer({ dest: "api/uploads/" });

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = "dfwsf436234gwegw567453w45wvg534";
const PORT = 7000;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/uploads/", express.static(__dirname + "/api/uploads/"));

mongoose.connect(
  "mongodb+srv://blog:UBzVfykcx3QDNT1y@cluster0.ahnsr05.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const userDoc = await User.create({
      userName,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});
app.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const userDoc = await User.findOne({ userName });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    //login
    jwt.sign({ userName, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        userName,
      });
    });
  } else {
    //not login
    res.status(400).json("Wrong creadentials -_-");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;

  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
  });
});

app.get("/post", async (req, res) => {
  const posts = await Post.find()
    .populate("author", ["userName"])
    .sort({ createdAt: -1 })
    .limit(20);
  res.json(posts);
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["userName"]);
  res.json(postDoc);
});

app.listen(PORT);
//mongodb+srv://blog:UBzVfykcx3QDNT1y@cluster0.ahnsr05.mongodb.net/?retryWrites=true&w=majority
//UBzVfykcx3QDNT1y
