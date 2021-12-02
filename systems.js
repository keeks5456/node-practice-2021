const fs = require("fs");

const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("example2.txt"); //how you can send a chunk over from another file

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

/*benefits of reading this in a chunk?
  once chunk received --> can immediate manipulate the chunk
  can send it to new file while reading data

*/

//why should we use Streams?
/*
- when dealing with a very large txt file, when we want to read it on the terminal we a "file size is greater then possible buffer error"
// */
fs.readFile("./largefile.txt", "utf-8", (err, file) => {
  if (err) console.log(err);
  else console.log(file);
});

//can see our readable stream has no issue reading our txt file
//why??
//streams uses buffers --> small buffer --> allows us to read the file in chunks
//easier for us to read it.
const readStream = fs.createReadStream("./largefile.txt", "utf-8");
readStream.on("data", (chunk) => {
  console.log(chunk);
});

//pipping & pipe chaining

//this is for compressing one file and piping to another
const readStream = fs.createReadStream("./example.txt", "utf-8");
const writeStream = fs.createWriteStream("example2.txt.gz");
//a module that compresses files
const zlib = require("zlib");
//takes input from readStream, manipulates data to something else
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);

//this is if we wanted to uncompress a file and pipe to another
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream("./example2.txt.gz");
const writeStream = fs.createWriteStream("uncompress.txt");
//this is a short handed way of sending chunks of data /text from one txt to another
readStream.pipe(gunzip).pipe(writeStream);
