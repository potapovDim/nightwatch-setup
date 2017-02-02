const data = {
  host: 'localhost',
  port: '3000',
  path: '/'
}

const util = require('./utils')
const http = require('http')

const asyncGetData = (data) => new Promise((resolve, reject) => {
  (function getData(data) {
    return http.get(data, response => {
      let body = ''
      response.on('data', d => {
        body += d.toString('utf8')
      });
      response.on('end', () => {
        var parsed = JSON.parse(body)
        resolve(parsed)
      })
    })
  })(data)
})

let initialValue 

(data => {
  asyncGetData(data).then(res => {
    initialValue = res
    console.log(initialValue)
  })
})(data)
