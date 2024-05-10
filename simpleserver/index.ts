import { createServer } from "node:http";

// creating a basic server
const server = createServer();

server.on("request", (req, res) => {
  console.log("Request received");
});

// server listening on port 8080
server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
