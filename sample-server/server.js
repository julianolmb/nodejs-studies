const http = require("http");
const endpoints = require("./endpoints");

console.log("Server is running on port 3000");

const server = http.createServer();

server.listen(3000);
