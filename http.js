const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello from node js"); //write  a response
    res.end(); //send the response
  } else {
    res.write("using some other domain");
    res.end();
  }
});

server.listen("3000"); //this is the port we want to visit to see response

//req === is what the client request from us
//


//serve static files using http  & file system modules