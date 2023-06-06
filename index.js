const express = require("express");
const app = express();
const PORT = 7000;

app.get("/test", (req, res) => {
  res.json("test ok");
  console.log("Server listening on PORT", PORT);
});

app.listen(PORT);
