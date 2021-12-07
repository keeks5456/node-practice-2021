const express = require("express");

const app = express();
const path = require("path");
app.use("/public", express.static(path.join(__dirname,  'express')));

//takes in a root args, and callback functon with request and respond
app.get("/", (req, res) => {
  //send this response to the browser
  res.sendFile(path.join(__dirname, "express", "index.html"));
});

app.listen(3000);
