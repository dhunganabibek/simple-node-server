"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
// creating a basic server
const server = (0, node_http_1.createServer)();
server.on("request", (req, res) => {
    console.log("Request received");
});
// server listening on port 8080
server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
