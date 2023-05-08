const path = require('path');
const fs = require('fs');


function filesInfo() {
  const dir = './secret-folder';
  const dirFiles = [];
  fs.readdir(dir, (err, files) => {
    if (err) return console.error(err.message);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fs.stat(`./secret-folder/${file}`, (err, status) => {
        if (err) return console.error(err.message);
        if (status.isFile()) {
          fullData = path.parse(file)
          dirFiles.push(`Имя файла: ${fullData.name}   Расширение: ${fullData.ext}   Размер: ${status['size']}`)
        }
      })
    }
  })
  process.on('exit', () => {
    dirFiles.forEach(file => console.log(file))
  })
}

filesInfo()
