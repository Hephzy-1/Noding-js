const sayHi = (name) => {
  console.log((`Hello there ${name}`));
}

module.exports = sayHi

const { log } = require('console')
const os = require('os')

// [returns ifo about computer user]
const user = os.userInfo()
console.log(user); 


// returns about the run time
console.log(`The system uptime is : ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS);