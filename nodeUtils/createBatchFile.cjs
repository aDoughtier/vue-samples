const fs = require("fs");
const path = require("path");

// 指定要创建文件的目录
const directoryPathArr = [
  {
    path: "../src/views/vue",
    range: [1, 24]
  },
  {
    path: "../src/views/router",
    range: [24, 36]
  },
  {
    path: "../src/views/pinia",
    range: [36, 50]
  },
];


// 遍历文件名列表，创建每个文件
for (let index = 0; index < directoryPathArr.length; index++) {
  const { path: directoryPath, range: [start, end] } = directoryPathArr[index];
  // 创建目录（如果目录不存在）
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
  }
  for (let index = start; index < end; index++) {
    const zeroPad = `/${String(index).padStart(3, "0")}`
    fs.mkdirSync(`${directoryPath}/${zeroPad}`);
    const filePath = path.join(`${directoryPath}/${zeroPad}`, `${zeroPad}-Index.vue`);
    const fileContent = `文件名：${zeroPad}-Index.vue`


    fs.writeFileSync(filePath, fileContent, (err) => {
      if (err) {
        console.error("Error creating file:", err);
      } else {
        console.log(" created successfully.");
      }
    });
  }

}

console.log("Batch file creation completed.");
