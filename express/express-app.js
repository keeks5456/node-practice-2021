const express = require("express");

const app = express();

//takes in a root args, and callback functon with request and respond
app.get("/", (req, res) => {
  //send this response to the browser
  res.send("hello world");
});
//give a port to listen to
app.listen(3000);
