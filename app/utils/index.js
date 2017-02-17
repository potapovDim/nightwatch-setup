const setHeaders = (xhr, customHeaders) => {
  Object.keys(customHeaders).forEach(key => {
    xhr.setRequestHeader(key, customHeaders[key])
  })
}

const postData = ({url, data, callback, headers}) => {
  const xhr = new XMLHttpRequest()
  xhr.open("POST", url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  headers && setHeaders(xhr, headers)
  xhr.onreadystatechange = () => {
    xhr.readyState === 4 && callback && callback(xhr.status, JSON.parse(xhr.response))
  }
  xhr.send(JSON.stringify(data))
}


const getData = ({url, headers, callback}) => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  headers && setHeaders(xhr, headers)

  xhr.onreadystatechange = () => {
    xhr.readyState === 4 && callback && callback(xhr.status, JSON.parse(xhr.response))
  }
  xhr.send()
}

const captchaGenerat = (length) => {
  const string = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  let pass = '';
  const rand = () => parseInt((Math.random() * 55).toFixed(0))
  for (let i = 0; i < length; i++) {
    pass += string[rand()]
  }
  return pass
}

const imitateAsync = (ms, args, callback) => new Promise((resolve, reject) => {
  setTimeout(() => {
    callback && callback(args)
    resolve(true)
  }, ms)
})

const localStorageService = {
  set: (key, value) => {
    if (typeof value !== 'string') {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
  },
  get: (key) => {
    if (!localStorage.getItem(key)) {
      return
    }
    try {
      console.log(key)
      return localStorage.getItem(key)
    } catch (error) {
      return undefined
    }
  },
  clear: key => {
    localStorage.clear(key)
  },
  clearAll: () => {
    localStorage.clear()
  }
}

module.exports = {
  postData,
  getData,
  captchaGenerat,
  imitateAsync,
  localStorageService
}