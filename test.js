const http = require('http')
const parseOptionData = require('./utils')

const data = {
  host: 'localhost',
  port: '3000',
  path: '/',
}

function getData(data, callback) {
  return http.get(data, function (response) {
    var body = '';
    response.on('data', function (d) {
      console.log(d.toString('utf8'))
      body += d;
    });
    response.on('end', function () {
      var parsed = JSON.parse(body);
      callback({email: parsed.email, password: parsed.pass});
    });
  });
}

getData(data, (res) => console.log(res))