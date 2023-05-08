const fs = require('fs');

function readFile() {
  const readFileStream = fs.createReadStream('text.txt', 'utf-8');
  let fileInnerText = '';
  readFileStream.on('data', chunk => fileInnerText += chunk);
  readFileStream.on('end', () => console.log(fileInnerText));
  readFileStream.on('error', error => console.log(error.message))
}

readFile();