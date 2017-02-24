const disableCSS = require('../commands/disableCSS'); //require custom command 
const elemCount = require('../commands/elemCount'); //require custom command 

const friendsModule = {
  
 /* logutButtonClick(name, exec, deadline){
      this.click('@logOutBtn')
  },*/

  friendsButtonClick(){
     this.click('@friendsBtn')
  },
  
  isPresentFriendsField(){
    return this.waitForElementPresent('@friendsField')
  },
  isPresentFriendName(){
    return this.waitForElementPresent('@friendName')
  },
  isPresentFriendLastname(){
    return this.waitForElementPresent('@friendLastname')
  },
  isPresentFriendPhone(){
    return this.waitForElementPresent('@friendPhone')
  },
  isPresentFriendSocial(){
    return this.waitForElementPresent('@friendSocial')
  },
  
  isPresentFriendAddBtn(){
    return this.waitForElementPresent('@friendAddBtn')
  },

  friendList(n){
       //return this.elemCount('css selector', '@jobList', 1)
       const friendL = this.elements.friendList.selector
       return this.elemCount('css selector', friendL, n)
  }, 
  isPresentFriendDeleteBtn(){
    return this.waitForElementPresent('@deleteFriend')
  },
  
  addNewFriend(name, lastName, phone, social){
      this.setValue('@friendName', name)
      this.setValue('@friendLastname', lastName)
      this.setValue('@friendPhone', phone)
      this.setValue('@friendSocial', social)

      this.click('@friendAddBtn')
  },

  deleteFriend(name, exec, deadline){

      this.click('@deleteFriend')
  },
}

module.exports = {
    url:"http://localhost:8082/cabinet", //base url to your website
    elements: {
      friendsBtn: " .cabinet> button:nth-child(2)",
      friendsField: ".friend-list",
      
      friendList: ".friend",
      
      friendName: "#friend-name",
      friendLastname: "#friend-lastname",
      friendPhone: "#friend-phone",
      friendSocial: "#friend-social",
      
      friendAddBtn: ".new-friend-create button",
      deleteFriend: ".friend-controlers> button:first-child",

    },
    commands: [friendsModule] //commands for this PO
}