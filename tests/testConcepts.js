 const disableTransition  = require('../commands/offcssanimation.js').disableTransition

 function executedFunction () {
     console.log(window ,document)
 }
 module.exports =  {
     instance: null,
     beforeEach: function(browser) {
        this.instance = browser;
        browser.url('http://localhost:8080/')
            .execute(disableTransition,[], () => console.log('remove styles'));
     },
     'concepts tests with out login user fin group ': function(browser) {
         this.instance.resizeWindow(600,600)
         this.instance.resizeWindow(600,1200)
     }
 }
