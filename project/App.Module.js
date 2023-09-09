const http = require("http");
const fs = require("fs");
const path = require("path");
const { mimeTypes } = require("./types/mimeTypes");

const PORT = 777;

const staticFile = (response, filePath, expansion) => {
  response.setHeader("Content-Type", mimeTypes[expansion]);
  fs.readFile("./public" + filePath, (err, data) => {
    err ? response.end("Error") : response.end(data);
  });
};

http
  .createServer((req, res) => {
    const URL = req.url;

    const error = () => {
      console.log("Error");
      res.statusCode = 404;
      res.end();
    };

    switch (URL) {
      case "/":
        console.log("contact page");
        staticFile(res, "/contacts.html", ".html");
        break;
      default:
        const extname = String(path.extname(URL)).toLocaleLowerCase();
        if (extname in mimeTypes) {
          staticFile(res, URL, extname);
        } else {
          error();
        }
    }
  })
  .listen(PORT);
