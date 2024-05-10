import { open } from "node:fs/promises";
const timeStart = performance.now();
const fileHandler = await open("test.txt", "w");
for (let i = 0; i < 1000000; i++) {
    await fileHandler.write(`Hello World ${i}\n`);
}
fileHandler.close();
const timeEnd = performance.now();
console.log("Execution time: ", timeEnd - timeStart, "ms");
