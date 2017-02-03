const {expect} = require('chai')
const dataGet = {
  host: 'localhost',
  port: '4422',
  path: '/'
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

var postData = querystring.stringify({
  'msg' : 'Hello World!'
});

var options = {
  hostname: 'localhost',
  port: 4422,
  path: '',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();


// asyncGetData(dataGet).then(data => console.log(data)).catch(e =>
// console.log(e)) asyncPostData(dataPost).then(data =>
// console.log(data)).catch(e => console.log(e)) Rx.Observable.of('hello world')
//   .map(letter => letter.toUpperCase())   .subscribe(     x =>
// console.log(x));

// describe('set up test', () => {
//   it('assert response', () => {
//     return asyncGetData(dataGet).then(data => {
//       expect(data).to.eql('somedata')
//     })
//   })
// })
