const {expect} = require('chai')
const dataGet = {
  host: 'localhost',
  port: '4422',
  path: '/'
}
// const dataPost = {
//   host: 'localhost',
//   port: '4422',
//   method: 'POST',
//   json: true,
//   body: 
// }


var options = {
  hostname: 'localhost',
  port: 4422,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(JSON.stringify({
    username: 'test@test.com',
    password: 'testpasss'
  }))
  }
}



const util = require('./utils')
const Rx = require('rxjs')
const http = require('http')
const request = require('request')

const asyncGetData = data => new Promise((resolve, reject) => {
  console.log("!!!!!!!!!!!");
  (getData = data => {
    return http.get(data, response => {
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
    })
  })(data)
})

const asyncPostData = option => new Promise((resolve, reject) => {
  console.log('-------------------', option);
  (postData = option => {
    return http.request(option, (response) => {
      console.log("insidedsalkdlasjdlkasjlkfasjfjsafhajshfasfjsafjsajhfhajshlfjsahlfjs")
      res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
        console.log('No more data in response.');
      });
    })
  })(option).write(option).end()
})

// asyncGetData(dataGet).then(data => console.log(data)).catch(e =>
// console.log(e)) asyncPostData(dataPost).then(data =>
// console.log(data)).catch(e => console.log(e)) Rx.Observable.of('hello world')
//   .map(letter => letter.toUpperCase())   .subscribe(     x =>
// console.log(x));

describe('set up test', () => {
  it('assert response', () => {
    return asyncGetData(dataGet).then(data => {
      expect(data).to.eql('somedata')
    })
  })
  it('assert post', () => {
    return asyncPostData(options).then(data => {
      expect(data).to.eql('somedata')
    })
  })
})
