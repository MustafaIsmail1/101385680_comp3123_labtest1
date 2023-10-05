const fs = require("fs");
const path = require('path');

const createLogs = () => {
  const target = "./logs";
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  process.chdir(target);
  for (let x = 0; x < 10; x++) {
    fs.writeFile(`log${x}.txt`, `This is the log file number ${x}`, (err) =>
      err ? console.error(`Error creating file 'log${x}.txt'`) : console.log(`log${x}.txt`)
    );
  }
};
createLogs();