const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.static("front/build"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require("path");

const router = require("./routes/index.routes");

app.use(cors());
app.use("/api", router);
app.use("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "../front/build/index.html"));
});

module.exports = app;
