const postData = ({url, data, callback}) => {
  const xhr = new XMLHttpRequest()
  xhr.open("POST", url, true)
  xhr.setRequestHeader('Content-type', 'application/json')

  xhr.onreadystatechange = () => {
    xhr.readyState === 4 &&  callback && callback(xhr.status, JSON.parse(xhr.response))
  }
  xhr.send(JSON.stringify(data))
}


const getData = ({url, data, callback}) => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.setRequestHeader('Content-type', 'application/json')

  xhr.onreadystatechange = () => {
    xhr.readyState === 4 && callback && callback(xhr.status, JSON.parse(xhr.response))
  }
  xhr.send(JSON.stringify(data))
}

const captchaGenerat = (length) => {
  const string = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  let pass = '';
  const rand = () => parseInt((Math.random() * 55).toFixed(0))
  for(let i =0; i < length; i++){
    pass += string[rand()]
  }
  return pass
}

module.exports = {
  postData,
  getData,
  captchaGenerat
}