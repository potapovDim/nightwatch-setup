const disableCSS = require('../commands/disableCSS'); //require custom command 

const infoPage = {
  disableTransition (){
    return this.disableCSS(1) //nightwatch bug , run  custom command disable transition 
  },
  isBtnPresent(){
    return this.btnReg();// waitForElementVisible('@app') //wait for render app
  }

}
module.exports = {
    url:"http://localhost:8080", //base url to your website
    elements: {
      btnReg: ".create-user-button:first-child" // css selector 
    },
    commands: [infoPage] //commands for this PO
}