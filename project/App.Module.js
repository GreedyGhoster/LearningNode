const http = require("http");
const fs = require("fs");

const PORT = 777;

const pathToContacts = "./pages/contacts.html";

// ----------------------------------------------------------------
// http
//   .createServer((req, res) => {
//     console.log("Hello");
//     console.log(req.url);
//     console.log(req.method);

//     res.setHeader("Content-Type", "text/html", "charset=utf-8");
//     res.write("<main class='App'><h1>Hello World</h1><p>Hi, Admin</p></main>");
//     res.end();
//   })
//   .listen(PORT);
// ----------------------------------------------------------------

http
  .createServer((req, res) => {
    const URL = req.url;

    switch (URL) {
      case "/":
        console.log("Main page");
        res.write("<h2>Main page</h2>");
        break;
      case "/child":
        console.log("Child page");
        let data = fs.readFileSync(pathToContacts, "utf8");
        res.write(data);
        break;
      default:
        console.log("Unknown page");
        res.write("<h2>Unknown page</h2>");
        break;
    }

    res.end();
  })
  .listen(PORT);
