const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/api", (_, res) => {
  res.json({ message: "Hello from github-explorer server!!!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});