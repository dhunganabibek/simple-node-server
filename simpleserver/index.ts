import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const hostname = "localhost";
const port = 8080;
const currentDir = import.meta.dirname;

// creating a basic server
const server = createServer();

server.on("request", async (req, res) => {
  // text response
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
  }

  // json response
  if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        name: "Bibek Dhungana",
        age: 26,
        location: "Bloomington, IL",
      })
    );
  }

  // image response
  if (req.url === "/image") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpeg");
    const data = await readFile(join(currentDir, "../assets/earth.jpg"));
    res.end(data);
  }

  // html response
  if (req.url === "/html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const data = await readFile(join(currentDir, "../assets/index.html"));
    res.end(data);
  }
});

// server listening on port 8080
server.listen(8080, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
