import os from "os"
import {welcome} from "./welcome.js"

/*console.log(os.homedir());
console.log(os.hostname());
console.log(os.version());*/

const osType = os.type();

console.log(welcome(osType));

