//fs is the filesystem module from node
const fs = require("fs");

// this will write a file to our hard drive, first argument is the path
// second argument is the content of the file.
fs.writeFileSync("hello.txt", "Hello from Node.js");
