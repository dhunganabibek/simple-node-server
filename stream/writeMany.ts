import { open } from "node:fs/promises";

const timeStart = performance.now();

const fileHandler = await open("test.txt", "w");

const writeStream = fileHandler.createWriteStream();
console.log(writeStream.writableHighWaterMark);

writeStream.write("H");
const buffer = Buffer.alloc(16384, "a");
console.log(writeStream.write(buffer));
console.log(writeStream.writableLength);

fileHandler.close();
const timeEnd = performance.now();
console.log("Execution time: ", timeEnd - timeStart, "ms");
