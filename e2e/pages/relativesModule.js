const disableCSS = require('../commands/disableCSS'); //require custom command 
const elemCount = require('../commands/elemCount'); //require custom command 

const relativesModule = {
  
 /* logutButtonClick(name, exec, deadline){
      this.click('@logOutBtn')
  },*/

  relativesButtonClick(){
     this.click('@relativesBtn')
  },
  /*
  isPresentRelativesField(){
    return this.waitForElementPresent('@friendsField')
  },*/
  isPresentRelativesName(){
    return this.waitForElementPresent('@relativeName')
  },
  isPresentRelativesLastname(){
    return this.waitForElementPresent('@relativeLastname')
  },
  isPresentRelativesPhone(){
    return this.waitForElementPresent('@relativePhone')
  },
  isPresentRelativesAddress(){
    return this.waitForElementPresent('@relativeAddress')
  },
  
  isPresentRelativesAddBtn(){
    return this.waitForElementPresent('@relativeAddBtn')
  },

  relativeList(n){
       //return this.elemCount('css selector', '@jobList', 1)
       const relativeL = this.elements.relativeList.selector
       return this.elemCount('css selector', relativeL, n)
  }, 
 /* isPresentRelativeDeleteBtn(){
    return this.waitForElementPresent('@deleteFriend')
  },*/
  
  addNewRelative(name, lastName, phone, social){
      this.setValue('@relativeName', name)
      this.setValue('@relativeLastname', lastName)
      this.setValue('@relativePhone', phone)
      this.setValue('@relativeAddress', social)

      this.click('@relativeAddBtn')
  },
/*
  deleteRelative(name, exec, deadline){

      this.click('@deleteRelative')
  },*/
}

module.exports = {
    url:"http://localhost:8082/cabinet", //base url to your website
    elements: {
      relativesBtn: " .cabinet> button:nth-child(3)",
      relativesField: ".job-list",
      
      //relativeList: ".friend",
      
      relativeName: "#relative-name",
      relativeLastname: "#relative-lastname",
      relativePhone: "#relative-phone",
      relativeAddress: "#frelative-address",
      
      relativeAddBtn: ".new-relative-create button",
     // deleteRelative: ".friend-controlers> button:first-child",

    },
    commands: [relativesModule] //commands for this PO
}