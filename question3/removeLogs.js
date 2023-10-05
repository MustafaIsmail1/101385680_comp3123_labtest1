const fs = require("fs");
const path = require('path');

const removeLogs = () => {
    const target = "./logs";
    if (fs.existsSync(target)) {
      process.chdir(target);
      fs.readdir(process.cwd(), (err, files) => {
        files.forEach((file) => {
          fs.unlink(file, (err) =>
            err ? console.error(`Error deleting file '${file}'`) : console.log(`delete files ... ${file}`)
          );
        });
      });
    }
  };
removeLogs();