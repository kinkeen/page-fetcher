const request = require('request');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

userInput = process.argv.slice(2)

const getFileSize = function(input, filePath){
 const path = fs.statSync(input[1]).size
 console.log(`Downloaded and saved ${path} bytes to ${filePath}`)
}

const fetchpage = function (url) {
  url = userInput[0];
  let path = userInput[1];

  request(url, (error, resp, body) => {
    let htmlBody = body;
    fs.writeFile(path, htmlBody, (err) => {
      if (err) throw err;
      getFileSize(userInput, path)

    })
  })
}

fetchpage(process.argv)
rl.close()
