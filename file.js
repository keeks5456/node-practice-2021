//working with file system modles part 2

const fs = require("fs");

//creates a folder
fs.mkdir("tutorial", (err) => {
  if (err) console.log(err);
  //deletes a folder
  else
    fs.rmdir("tutorial", (err) => {
      if (err) console.log(err);
      else console.log("delete success");
    });
});

//create a folder and make a file within it

fs.mkdir("tutorial", (err) => {
  if (err) console.log(err);
  else
    fs.writeFile("./tutorial/example.txt", "123", (err) => {
      if (err) console.log(err);
      else console.log("file create success");
    });
});

//how to delete a folder with a file in it

//can i just use rmDir function??
//cannot bc has to be used on dir thats empty

//we can fix this by deleting the file first then the folder
fs.unlink("./tutorial/example.txt", (err) => {
  if (err) console.log(err);
  else
    fs.rmdir("tutorial", (err) => {
      if (err) console.log(err);
      else console.log("folder deleted");
    });
});

//what if we want to delete multiple files

fs.readdir("examples", (err, files) => {
  if (err) console.log(err);
  else
    for (let file of files) {
      fs.unlink("./examples/" + file, (err) => {
        if (err) console.log(err);
        else
        //once the files are deleted you can then delete the folder 
          fs.rmdir("examples", (err) => {
            if (err) console.log(err);
            else console.log("folder delete success");
          });
      });
    }
});
