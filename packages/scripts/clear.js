const fs = require("fs");
const path = require("path");

const paths = process.argv;
for (let i = 0; i < paths.length; i += 2) {
    fs.rm(path.resolve(process.cwd(), paths[i]), {recursive: true, force: true}, () => {
        console.log(`${paths[i + 1]} 清空成功`);
    });
}