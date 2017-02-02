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
const request = require('request')

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


asyncGetData(dataGet).then(data => console.log(data)).catch(e => console.log(e))
asyncPostData(dataPost).then(data => console.log(data)).catch(e => console.log(e))

// Rx.Observable.of('hello world')
//   .map(letter => letter.toUpperCase())
//   .subscribe(
//     x => console.log(x));

describe('set up test', () => {
  it('assert response', () => {
    return asyncGetData(dataGet).then(data => {
      expect(data).to.eql('somedata')
    })
  })
})
