const disableCSS = require('../commands/disableCSS'); //require custom command 

const initialPage = {
  disableTransition (){
    return this.disableCSS(1) //nightwatch bug , run  custom command disable transition 
  },
  waitApp(){
    return this.waitForElementVisible('@app') //wait for render app
  }

}
module.exports = {
    url:"http://localhost:8080", //base url to your website
    elements: {
      app: "#app" // css selector 
    },
    commands: [initialPage] //commands for this PO
}