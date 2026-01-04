"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http2_1 = __importDefault(require("http2"));
const server = http2_1.default.createSecureServer({
    key: fs_1.default.readFileSync("./keys/server.key"),
    cert: fs_1.default.readFileSync("./keys/server.crt"),
}, (req, res) => {
    try {
        console.log(req.url);
        /* const users = { name: "Jencler", age: 20, city: "Lima" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users)); */
        if (req.url === "/") {
            const file = fs_1.default.readFileSync("./public/index.html", "utf-8");
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
        }
        else if (req.url?.endsWith(".css")) {
            res.writeHead(200, { "Content-Type": "text/css" });
        }
        const responseFile = fs_1.default.readFileSync(`./public${req.url}`, "utf-8");
        res.end(responseFile);
    }
    catch (error) {
        console.log(error);
    }
});
server.listen(8080, () => {
    console.log("server running");
});
//# sourceMappingURL=app.http2.js.map