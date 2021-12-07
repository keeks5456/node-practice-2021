const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    //to read html file
    const readStream = fs.createReadStream("./static/index.html");
    res.writeHead(200, { "Content-type": "Text/html" }); //needs a request status code & header

    //to read image png file
    const readStream = fs.createReadStream("./static/image.png");
    res.writeHead(200, { "Content-type": "image/png" });

    //to read a json file
    const readStream = fs.createReadStream("./static/example.json");
    res.writeHead(200, { "Content-type": "application/json" });

    readStream.pipe(res);
  })
  .listen(3000);
