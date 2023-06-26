//import fs (file system module) to deal with files in node js
const fs = require('fs');

// create file called myfile
//fs.writeFileSync('./myfile', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

//read file (sync)
//console.log(fs.readFileSync('./myfile', 'utf-8'));

//read file 
// fs.readFile('./myfile', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//rename file
//fs.renameSync('./myfile', './newName');