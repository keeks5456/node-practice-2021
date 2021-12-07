const express = require("express");

const app = express();

//takes in a root args, and callback functon with request and respond
app.get("/", (req, res) => {
  //send this response to the browser
  res.send("hello world");
});

app.get("/example", (req, res) => {
  res.send("hitting example route");
});
//params data
app.get("/example/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.query); //==> {} because we havent passed in anything
  res.send(req.params.name + " " + req.params.age);
});

//give a port to listen to
app.listen(3000);

//to pass in a query  
//pass in a question mark ==> ?
//the name of the query string ==> tutorial=
//then the value ==> paramstutorial
//to pass in a another query string use ampersand ==> &
//then continue as such ==> sort=byage

/*
when should i use a route params VS a query string params
- route params ==> when you must HAVE that data

- query string params - when i want to give optional settings

*/