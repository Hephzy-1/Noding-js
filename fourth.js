module.exports.items = ['item1', 'item2']
const person = {
  name: 'Bob',
  email: 'bobbylashley@gmail.com',
  matricNo: 947380
}

module.exports.singlePerson = person

const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath);

const base = path.basename(filePath)
// console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);