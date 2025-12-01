import fs from "fs";
import http2 from "http2";

const server = http2.createSecureServer(
  {
    key: fs.readFileSync("./keys/server.key"),
    cert: fs.readFileSync("./keys/server.crt"),
  },
  (req, res) => {
    try {
      console.log(req.url);
      /* const users = { name: "Jencler", age: 20, city: "Lima" };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users)); */

      if (req.url === "/") {
        const file = fs.readFileSync("./public/index.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
        return;
      }

      /*  if (req.url === "/about") {
    const file = fs.readFileSync("./public/about.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(file);
    return;
  } */

      if (req.url?.endsWith(".js")) {
        res.writeHead(200, { "Content-Type": "application/javascript" });
      } else if (req.url?.endsWith(".css")) {
        res.writeHead(200, { "Content-Type": "text/css" });
      }

      const responseFile = fs.readFileSync(`./public${req.url}`, "utf-8");
      res.end(responseFile);
    } catch (error) {
      console.log(error);
    }
  }
);

server.listen(8080, () => {
  console.log("server running");
});
