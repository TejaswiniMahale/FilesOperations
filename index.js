// import functions from helper_functiones.js
import {makeCowSay,deleteAFile,readAFile,writeToFile,getIP} from "./helper_functiones"

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case a : makeCowSay(content)
  break;
  case b : deleteAFile(file)
  break;
  case c : readAFile(file)
  break;
  case d : writeToFile(file,content)
  break;
  case e : getIP()
  break;
  default:
    console.log(`Invalid operation '${operation}'`);
}

