exports.command = function  ( selector, callback) {
  let resultValue
  this.getText(selector ,(result) => {
    callback(result.value)
  })

}
