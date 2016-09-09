 export default{
     'concepts tests with out login user fin group ':(client)=>{
         const conceptsPage=client.page.conceptsPage();
         client.resizeWindow(600,600);
         conceptsPage
             .navigate()
             .assertCategories()
             .goToEditorWithOutChoosingCategory()
             .goToEditorWithChoosingCategory("accomodation");
         conceptsPage
             .goToEditorWithChoosingCategory("events");
         conceptsPage
             .goToEditorWithChoosingCategory("portfolio");
         conceptsPage
             .goToEditorWithChoosingCategory("health_beauty");
         conceptsPage
             .goToEditorWithChoosingCategory("blog");
         conceptsPage
             .goToEditorWithChoosingCategory("business");
         conceptsPage
             .goToEditorWithChoosingCategory("eсommerce");
          
         client.end();
     }
 }
