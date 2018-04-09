const http = require('http')
const querystring = require('querystring')

const toString = Object.prototype.toString

const assertArray = arg => toString.call(arg) === '[object Array]'
const assertString = arg => toString.call(arg) === '[object String]'
const assertNumber = arg => toString.call(arg) === '[object Number]'
const assertObject = arg => arg !== null && typeof arg === 'object'

const asyncGetData = data => new Promise((resolve, reject) => http.get(data, response => {
  let body = ''
  response.on('data', response => {
    body += response.toString('utf8')
    if (body.statusCode === 404) {
      reject(body)
    }
  });
  response.on('end', () => {
    resolve(body)
  })
}))

const asyncPostData = (data, options) => new Promise((resolve, reject) => {
  const req = http.request(options, (res) => {
    res.setEncoding('utf8')
    res.on('data', (body) => {
      resolve(JSON.parse(body))
    })
    res.on('end', () => {
      console.log('No more data in response.');
    })
  })
  req.write(data)
  req.end()
  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });
})

module.exports = {
  assertNumber,
  assertArray,
  assertObject,
  assertString,
  asyncGetData,
  asyncPostData
}