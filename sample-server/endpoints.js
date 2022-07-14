const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  //   const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to my first server</h1>");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  //   if (url === "/users") {
  //   }

  //   if (url === "/create-user") {
  //   }
};

module.exports = {
  handler: requestHandler,
  serverMessage: "Handler was successfully created",
};
