const fs = require('fs');
const path = require('path');

function getAllSubDirectories(dirPath, subDirs = []) {
  const files = fs.readdirSync(dirPath);
  console.log(files.map(file => "" + file))

  // files.forEach(file => {
  //     const filePath = path.join(dirPath, file);
  //     if (fs.statSync(filePath).isDirectory()) {
  //         subDirs.push(filePath);
  //         // getAllSubDirectories(filePath, subDirs);
  //     }
  // });

  // return subDirs.map(subDir => path.basename(subDir));
}

const folderPath = '/src';  // 替换为你的文件夹路径
const subDirectories = getAllSubDirectories(folderPath);
console.log(subDirectories);