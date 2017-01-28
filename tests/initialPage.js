 module.exports =  {
     'execute disable transition': (client) => {
         const initialPage = client.page.initialPage(); //initialize page
         initialPage.navigate() //go to url declare in page
         client.resizeWindow(600, 800) //resize browser window
         initialPage.waitApp() // wait render app
         initialPage.disableTransition() // execute script for disable css effects
         client.end() // end test
     }
 }
