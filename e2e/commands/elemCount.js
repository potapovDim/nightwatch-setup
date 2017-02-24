exports.command = function  (locationStrategy, selector, quantity) {
  return this.elements(locationStrategy , selector ,(result) => {
    this.assert.equal(result.value.length, quantity); 
  }) 
}
