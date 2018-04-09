":" //; exec /usr/bin/env node --harmony --expose-gc --trace-deprecation "$0" "$@"

const { expect } = require('chai')
const { asyncPostData, asyncGetData } = require('./apitests/utils')

const options = {
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub/session',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

let postData = JSON.stringify({
  desiredCapabilities:
  {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true,
    platform: 'ANY'
  }
})


const test = async () => {
  const { sessionId } = await asyncPostData(postData, options)
  console.log('!!!!!!!!')
  options.path = `/wd/hub/session/${sessionId}/url`
  postData = JSON.stringify({
   url: 'https://weblium.co'
  })
  console.log('!!!!!!!!!!!!!!')
  const data = await asyncPostData(postData, options)
  console.log(data)
}

test()