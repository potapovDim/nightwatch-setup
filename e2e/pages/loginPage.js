const disableCSS = require('../commands/disableCSS'); //require custom command 

const loginPage = {
  isPresentLogin(){
    return this.waitForElementPresent('@login')
  },
  isPresentPass(){
    return this.waitForElementPresent('@pass')
  },
  isPresentBtnLogin(){
    return this.waitForElementPresent('@btn')
  },

  authorization(login, pass){
      this.setValue('@login', login)
      this.setValue('@pass', pass)
      this.click('@btn')
  }
 
}

module.exports = {
    url:"http://localhost:8082", //base url to your website
    elements: {
      login: ".user-name",
      pass: ".user-password",
      btn: ".btn" ,
      app: "#app"
    },
    commands: [loginPage] //commands for this PO
}