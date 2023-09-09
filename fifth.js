const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/third.txt', 
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)

const {readFileSync, writeFileSync} = require('fs')
console.log('Start');
const first1 = readFileSync('./content/first.txt', 'utf8');
const second2 = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/subfolder/test2.txt',
  `Here is the final result : ${first1}, ${second2}`,
  { flag: 'a'}
  ) 

console.log('done with this task');
console.log('starting the next one');
