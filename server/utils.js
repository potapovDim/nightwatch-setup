const toString = Object.prototype.toString

const assertArray = arg => toString.call(arg) === '[object Array]'
const assertString = arg => toString.call(arg) ==='[object String]'
const assertNumber = arg => toString.call(arg) ==='[object Number]'
const assertObject = arg => arg !== null && typeof arg ==='object'

module.exports = {
  assertNumber,
  assertArray,
  assertObject,
  assertString
}