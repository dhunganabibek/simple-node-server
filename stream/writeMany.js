import { open } from "node:fs/promises";
const timeStart = performance.now();
const fileHandler = await open("test.txt", "w");
const writeStream = fileHandler.createWriteStream();
writeStream.write("Hello World\n".repeat(1000000));
fileHandler.close();
const timeEnd = performance.now();
console.log("Execution time: ", timeEnd - timeStart, "ms");
