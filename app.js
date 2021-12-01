// const tutorial = require("./tutorial");

// console.log(tutorial.sum(1,2));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObj());

//event modules - event driven

const EventEmmitter = require("events");

const eventEmmitter = new EventEmmitter();
//takes in two args ==> the listener & the function you want to execute
eventEmmitter.on("tutorial", (num1, num2) => {
  console.log("tutorial event occured");
  console.log(num1 + num2);
});

eventEmmitter.emit("tutorial", 1, 2);

class Person extends EventEmmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let pedro = new Person("Pedro");
let karen = new Person("Karen");

karen.on("name", () => {
  console.log("my name is " + karen.name);
});
pedro.on("name", () => {
  console.log("my name is " + pedro.name);
});

pedro.emit("name");
karen.emit("name");

//working with ReadLine Module

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n1 = Math.floor(Math.random() * 10 + 1);
let n2 = Math.floor(Math.random() * 10 + 1);
let answer = n1 + n2;

//first arg is a string, second is a function
rl.question(`What is ${n1} + ${n2}?\n`, (userInput) => {
  if (userInput.trim() === answer) {
    rl.close();
  } else {
    rl.setPrompt("Incorrect response, Please try again\n");
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput.trim() == answer) {
        rl.close();
      } else {
        rl.setPrompt(`Your answer of ${userInput} is incorrect. Try Again\n`);
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("Correct!!");
});

//working with file system modules (CRUD ish way)

const fs = require("fs");

//create files
//first arg is the file name, seond arg is what you want written in file, third is call back function
fs.writeFile("example.txt", "this is example", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file created! yaya ");
    fs.readFile("example.txt", "utf8", (error, file) => {
      if (error) {
        console.log(error);
      } else {
        console.log(file);
      }
    });
  }
});

//rename a file
//first arg is original file name, second
fs.rename("example.txt", "example2.txt", (error) => {
  if (error) console.log(error);
  else console.log("rename success");
});

//updating the file

fs.appendFile("example2.txt", " add this to file", (error) => {
  if (error) console.log(error);
  else console.log("append data success");
});

//delete files

fs.unlink("example2.txt", (error) => {
  if (error) console.log(error);
  else console.log("file deleted");
});
