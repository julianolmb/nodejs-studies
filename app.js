const http = require("http");

// this is one way to start a server, create server

// function requestListener(request, response) {}

// http.createServer();

// another way with an anonymous function
// http.createServer(function (req, res) {});

// or you can use an arrow function syntax
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
