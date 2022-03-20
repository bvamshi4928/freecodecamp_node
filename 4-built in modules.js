/*
some of the built in modules in node are 
OS
PATH
FS
HTTP
*/

/*****************OS module*********************/
// for interacting with server and operating system

const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//uptime of system
console.log(` the system uptime is ${os.uptime()} s`);

//
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
};

console.log(currentOS);


/*****************Path module*********************/

const path = require("path");

//seperator property
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//base name
const base = path.basename(filePath);
console.log(base);

//resove

const abs = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(abs);


/* FS module can be implemented in two ways 
1. synchronous way
2. asynchronous way*/

/**********synchronous**********/ 
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/test.txt", "utf8");

console.log(first);

writeFileSync(
  "./content/test3.txt",
  `here is the result of ${first}` 
);

/*****************async FS*********************/

const { readFile, writeFile } = require("fs");

readFile("./content/test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/test2.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/test4-async.txt",
      `hello world in ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});


/*******HTTP module *****/

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  

    if (req.url === "/") {
      res.end("Welcome to our home page");
    }
    if (req.url === "/about") {
      res.end("Welcome to our about page");
    }
    res.end(`
    <h1> OOps that page doesn't exist! </h1>
    <a href ='/'> back to home page</a>`);
});

server.listen(3000);
