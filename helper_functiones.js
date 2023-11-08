// import all modules require



// complete the functions.
const fs = require('fs')

function getIP(website_name) {
  console.log(website_name)

}

function writeToFile(filename, content) {
fs.writeFile(filename,content,(err)=>{
    if(err){
        throw err;
    }
    console.log('The data has been written to the file!')
})
  
}

function readAFile(filename) {
    fs.readFileSync(filename)
}

function deleteAFile(filename) {
    fs.unlink(filename,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('File deleted successfully!')
        }
    })
}

function makeCowSay(content) {
  var cowsay = require("cowsay")
  console.log(cowsay.say({
    text:content,
    e:"oO",
    T:"U"
  }))
}

export {makeCowSay,deleteAFile,readAFile,writeToFile,getIP}
// exports all functions
