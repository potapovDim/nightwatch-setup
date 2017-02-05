const postData = ({url, data, callback}) => {
  const xhr = new XMLHttpRequest()
  xhr.open("POST", url, true)
  xhr.setRequestHeader('Content-type', 'application/json')

  xhr.onreadystatechange = () => {
    xhr.readyState === 4 && callback(xhr.status, JSON.parse(xhr.response))
  }
  xhr.send(JSON.stringify(data))
}

module.exports ={
  postData
}