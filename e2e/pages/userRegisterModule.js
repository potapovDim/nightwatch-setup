const getElementText = require('../commands/getElementText'); //require custom command 

const userRegisterModule = {

  goToRegistration(){
    return this.click('@btnRegistration')
  },
  isPresentName(){
    return this.waitForElementPresent('@userName')
  },
  isPresentBtnCreate(){
    return this.waitForElementPresent('@btnCreate')
  },
  registration(name){
      this.setValue('@userName', name)
      this.click('@btnCreate')
      //var captcha = this.getValue('@captcha')
     
      const captchaTag = this.elements.captcha.selector
      //const captchaTag = this.element. .captcha.selector
       this.getElementText(captchaTag,  this.setValue.bind(this,'@captchaInput') )
     
      this.click('@btnCreate')
      
  },

}

module.exports = {
    url:"http://localhost:8082/", //base url to your website
    elements: {
      btnRegistration:  ".create-user-button:first-child",
      userName: ".create-user-input",
      btnCreate: ".registration button",
      captcha: ".captcha-value",
      captchaInput: ".captcha-input"
     
    },
    commands: [userRegisterModule] //commands for this PO
}