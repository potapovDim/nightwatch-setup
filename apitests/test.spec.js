const {expect} = require('chai')
const {asyncPostData, asyncGetData} = require('./utils')

const dataGet = {
  host: 'localhost',
  port: '4422',
  path: '/'
}

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


describe('set up test', () => {
  it('assert response', () => {
    return asyncGetData(dataGet).then(data => {
      expect(data).to.eql('somedata')
    })
  })
  it('assert postdata', () => {
    return asyncPostData(postData, options).then(data => {
      expect(data).to.eql('somedata')
    })
  })
})
