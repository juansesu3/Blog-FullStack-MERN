const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const User = require("./api/models/User");
const bcrypt = require("bcryptjs");

const app = express();

const salt = bcrypt.genSaltSync(10);

const PORT = 7000;

app.use(cors());
app.use(express.json());
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

app.listen(PORT);
//mongodb+srv://blog:UBzVfykcx3QDNT1y@cluster0.ahnsr05.mongodb.net/?retryWrites=true&w=majority
//UBzVfykcx3QDNT1y
