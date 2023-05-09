const { stdin, stdout, exit } = process;
const fs = require('fs');

function writeFile() {
  stdout.write('Hi there!\n');
  stdin.on('data', data => {
    initFile();
    let text = data.toString();
    fs.appendFile('./02-write-file/text.txt', text, error => {
      const str = [...text].slice(0, -2).join('');
      if (error) {
        return console.error(error.message);
      }
      if (str === 'exit') {
        console.log('Завершено exit');
        process.exit()
      }
    })

  });
  process.on('SIGINT', () => {
    console.log('Завершено CTRL+C');
    process.exit();
  });
}

function initFile() {
  fs.access('text.txt', fs.F_OK, error => {
    if (error) {
      fs.writeFile('text.txt','', error => {
        if (error) return console.error(error.message);
      });
    }
    return
  });
}

writeFile();
