module.exports =  {
 
     'execute disable transition': (client) => {
         const initialPage = client.page.initialPage(); //initialize page
         initialPage.navigate() //go to url declare in page
         client.resizeWindow(600, 800) //resize browser window
         initialPage.waitApp() // wait render app
         initialPage.disableTransition() // execute script for disable css effects
         client.end() // end test
     },


     'should have elements on Information  page' : (browser) => {
         const infoPage = browser.page.infoPage();
         infoPage.navigate()
         infoPage.isPresentBtnReg()
         infoPage.isPresentBtnLogin()
         infoPage.isPresentTimer()
         infoPage.isPresentInfoBlock()
         browser.end()
     }, 

     'user authorization' : (browser) => {
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();

         loginPage.navigate()
         infoPage.goToLogin()

         loginPage.isPresentLogin()
         loginPage.isPresentPass()
         loginPage.isPresentBtnLogin()
        
         loginPage.authorization('qwe', 'test')
         browser.pause(1000)
         browser.assert.urlContains('http://localhost:8082/cabinet')
         browser.end()
     },

     'should not enter unregister user' : (browser) => {
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();

         loginPage.navigate()
         infoPage.goToLogin()
        
         loginPage.authorization('qwe1', 'test')
         browser.pause(1000)
         browser.assert.urlEquals('http://localhost:8082/')
         browser.end()
     },

     'cabinet should have elements' : (browser) => {
         const cabinetPage = browser.page.cabinetPage();
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();
         
         infoPage.navigate()
         infoPage.goToLogin()
         loginPage.authorization('qwe', 'test')
         browser.pause(1000)

         cabinetPage.isPresentJobsBtn()
         cabinetPage.isPresentFriendsBtn()
         cabinetPage.isPresentRelativesBtn()
         cabinetPage.isPresentLogOutBtn()
         browser.end()
     },

     'add jobs' : (browser) => {
         const cabinetPage = browser.page.cabinetPage();
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();
         
         infoPage.navigate()
         infoPage.goToLogin()
         loginPage.authorization('qwe', 'test')
         browser.pause(1000)
        
         cabinetPage.jobButtonClick()
         cabinetPage.isPresentJobField()
         cabinetPage.isPresentJobName()
         cabinetPage.isPresentJobExecutor()
         cabinetPage.isPresentJobDeadline()
         cabinetPage.isPresentJobCreateBtn()

         cabinetPage.createNewJob('qqq', 'aaa', 'zzz')

         cabinetPage.jobList(1)
                  
         browser.end()
     },

     'delete jobs' : (browser) => {
         const cabinetPage = browser.page.cabinetPage();
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();
         
         infoPage.navigate()
         infoPage.goToLogin()
         loginPage.authorization('qwe', 'test')
         browser.pause(1000)
         cabinetPage.jobButtonClick()

         cabinetPage.createNewJob('qqq', 'aaa', 'zzz')

         cabinetPage.isPresentJobDeleteBtn()

         browser.moveToElement(".job:first-child", 10, 10)
         browser.pause(1000)
         cabinetPage.deleteJob();

         cabinetPage.jobList(0)
         browser.pause(1000)
         browser.end()
     },

     'relogin user' : (browser) => {
         const cabinetPage = browser.page.cabinetPage();
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();
         
         infoPage.navigate()
         infoPage.goToLogin()
         loginPage.authorization('qwe', 'test')
         browser.pause(1000)
         
         cabinetPage.logutButtonClick();
         browser.pause(1000)
         
         infoPage.goToLogin()
         loginPage.authorization('qwe', 'test')
         browser.pause(1000)

         cabinetPage.jobButtonClick()
         cabinetPage.jobList(0)
         browser.end()
    },
    
    'add friends' : (browser) => {
         const friendsModule = browser.page.friendsModule();
         const cabinetPage = browser.page.cabinetPage();
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();
         
         infoPage.navigate()
         infoPage.goToLogin()
         loginPage.authorization('name2', 'test')
         browser.pause(1000)
        
         friendsModule.friendsButtonClick()
         
         friendsModule.isPresentFriendsField()
         friendsModule.isPresentFriendName()
         friendsModule.isPresentFriendLastname()
         friendsModule.isPresentFriendPhone()
         friendsModule.isPresentFriendSocial()
         friendsModule.isPresentFriendAddBtn()

         friendsModule.addNewFriend('name', 'lastName', '123-123-132', 'social.com')

         friendsModule.friendList(1)
                  
         browser.end()
     },
     'delete friend' : (browser) => {
         const friendsModule = browser.page.friendsModule();
         const cabinetPage = browser.page.cabinetPage();
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();
         
         infoPage.navigate()
         infoPage.goToLogin()
         loginPage.authorization('name2', 'test')
         browser.pause(1000)

         friendsModule.friendsButtonClick()

         friendsModule.addNewFriend('name', 'lastName', '123-123-132', 'social.com')

         friendsModule.isPresentFriendDeleteBtn()

         browser.moveToElement(".friend:first-child", 10, 10)
         browser.pause(1000)
         friendsModule.deleteFriend();

         friendsModule.friendList(0)
         browser.pause(1000)
         browser.end()
     },
     'should not add letters in phone' : (browser) => {
         const friendsModule = browser.page.friendsModule();
         const cabinetPage = browser.page.cabinetPage();
         const loginPage = browser.page.loginPage();
         const infoPage = browser.page.infoPage();
         
         infoPage.navigate()
         infoPage.goToLogin()
         loginPage.authorization('qwe', 'test')
         browser.pause(1000)
        
         friendsModule.friendsButtonClick()
         
         friendsModule.isPresentFriendsField()
         friendsModule.isPresentFriendName()
         friendsModule.isPresentFriendLastname()
         friendsModule.isPresentFriendPhone()
         friendsModule.isPresentFriendSocial()
         friendsModule.isPresentFriendAddBtn()

         friendsModule.addNewFriend('name', 'lastName', 'blabla', 'social.com')

         friendsModule.friendList(0)
                  
         browser.end()
     },
    
     'should create new user and login' : (browser) => {
         const userRegisterModule = browser.page.userRegisterModule();
         const infoPage = browser.page.infoPage();
         const loginPage = browser.page.loginPage();
         
         userRegisterModule.navigate()
         userRegisterModule.goToRegistration()

         userRegisterModule.isPresentName()
         userRegisterModule.isPresentBtnCreate()
         userRegisterModule.registration("name2")
         browser.pause(1000)

         infoPage.goToLogin()
         loginPage.authorization('name2', 'test')
         browser.pause(1000)
         browser.assert.urlContains('http://localhost:8082/cabinet')         
         browser.end()
     },

}
