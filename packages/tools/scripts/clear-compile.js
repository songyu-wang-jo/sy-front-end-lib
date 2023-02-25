const fs = require("fs");
const path = require("path");

fs.rm(path.resolve(process.cwd(),'lib'), { recursive: true, force: true }, ()=>{
    console.log('历史编译的 js 文件清空成功');
});

fs.rm(path.resolve(process.cwd(),'types'), { recursive: true, force: true }, ()=>{
    console.log('历史生成的类型定义文件清空成功');
});
