const {expect} = require('chai')
const dataGet = {
  host: 'localhost',
  port: '3000',
  path: '/'
}
const dataPost = {
  url: 'http://localhost:3000/',
  method: 'POST',
  json: true,
  body: {
    username: 'test@test.com',
    password: 'testpasss'
  }
}
const util = require('./utils')
const Rx = require('rxjs')
const http = require('http')
const querystring = require('querystring')


const asyncGetData = data => new Promise((resolve, reject) => {
  (getData = data => {
    return http.get(data, response => {
      let body = ''
      response.on('data', response => {
        body += response.toString('utf8')
        if(body.statusCode ===404){
          reject(body)
        }
      });
      response.on('end', () => {
        resolve(body)
      })
    })
  })(data)
})
const asyncPostData = data => new Promise((resolve, reject) => {
  (postData = data => {
    return request.post(data,(error, response, body) => {
      console.log(response.statusCode, body)
      if(!error && response.statusCode === 200) {
        resolve(body)
      }
      else {
        reject(error)
      }
    })
  })(data)
})



var postData = JSON.stringify({
  'name' : 'Hello World!'
});

var options = {
  hostname: 'localhost',
  port: 4422,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`)
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  })
  res.on('end', () => {
    console.log('No more data in response.');
  })
})

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

req.write(postData)
req.end()


// describe('set up test', () => {
//   it('assert response', () => {
//     return asyncGetData(dataGet).then(data => {
//       expect(data).to.eql('somedata')
//     })
//   })
// })
