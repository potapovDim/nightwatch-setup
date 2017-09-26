const disableCSS = require('../commands/disableCSS'); //require custom command 
const elemCount = require('../commands/elemCount'); //require custom command 

const cabinetPage = {
  isPresentJobsBtn(){
    return this.waitForElementPresent('@jobsBtn')
  },
  isPresentFriendsBtn(){
    return this.waitForElementPresent('@friendsBtn')
  },
  isPresentRelativesBtn(){
    return this.waitForElementPresent('@relativesBtn')
  },
  isPresentLogOutBtn(){
    return this.waitForElementPresent('@logOutBtn')
  },

  jobButtonClick(){
      this.click('@jobsBtn')
  },
  isPresentJobField(){
    return this.waitForElementPresent('@jobField')
  },
  isPresentJobName(){
    return this.waitForElementPresent('@jobName')
  },
  isPresentJobExecutor(){
    return this.waitForElementPresent('@jobExecutor')
  },
  isPresentJobDeadline(){
    return this.waitForElementPresent('@jobDeadline')
  },
  isPresentJobCreateBtn(){
    return this.waitForElementPresent('@jobCreateBtn')
  },
  jobList(n){
       //return this.elemCount('css selector', '@jobList', 1)
       const jobL = this.elements.jobList.selector
       return this.elemCount('css selector', jobL, n)
  }, 
  isPresentJobDeleteBtn(){
    return this.waitForElementPresent('@deleteJob')
  },
  
  createNewJob(name, exec, deadline){
      this.setValue('@jobName', name)
      this.setValue('@jobExecutor', exec)
      this.setValue('@jobDeadline', deadline)
      this.click('@jobCreateBtn')
  },

  deleteJob(name, exec, deadline){

      this.click('@deleteJob')
  },
  logutButtonClick(name, exec, deadline){

      this.click('@logOutBtn')
  }
}

module.exports = {
    url:"http://localhost:8082/cabinet", //base url to your website
    elements: {
      jobsBtn: " .cabinet> button:nth-child(1)",
      jobField: ".job-list",
      jobList: ".job",
      jobName: "#job-name",
      jobExecutor: "#job-executor",
      jobDeadline: "#job-deadline",
      jobCreateBtn: ".new-job-create button",
      deleteJob: ".job-controlers> button:first-child",

      friendsBtn: ".cabinet> button:nth-child(2)",
      relativesBtn: ".cabinet> button:nth-child(3)" ,
      logOutBtn: ".logout"
    },
    commands: [cabinetPage]
}