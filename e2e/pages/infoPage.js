const disableCSS = require('../commands/disableCSS'); //require custom command 

const infoPage = {
  isPresentBtnReg(){
    return this.waitForElementPresent('@btnReg')
  },
  isPresentBtnLogin(){
    return this.waitForElementPresent('@btnLogin')
  },
  isPresentTimer(){
    return this.waitForElementPresent('@timer')
  },
  isPresentInfoBlock(){
    return this.waitForElementPresent('@informationBlock')
  },
  goToLogin(){
    return this.click('@btnLogin')
  }

}
module.exports = {
    url:"http://localhost:8082", //base url to your website
    elements: {
      btnReg: ".create-user-button:first-child",
      btnLogin: ".create-user-button:last-child",
      timer: ".clock-time-show",
      informationBlock : ".information"
    },
    commands: [infoPage] //commands for this PO
}