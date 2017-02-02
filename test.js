const data = {
  host: 'localhost',
  port: '3000',
  path: '/'
}

const util = require('./utils')
const http = require('http')
const Rx = require('rxjs')

const asyncGetData = (data) => new Promise((resolve, reject) => {
  ( getData = (data) => {
    return http.get(data, response => {
      let body = ''
      response.on('data', d => {
        body += d.toString('utf8')
      });
      response.on('end', () => {
        let parsed = JSON.parse(body)
        resolve(parsed)
      })
    })
  })(data)
})

asyncGetData(data).then(data => console.log(data))

Rx.Observable.from('hello world')
  .map(letter => letter.toUpperCase())
  .subscribe(
    x => console.log(x));