/*
 *Concepts проверки перехода в эдитор , через категорию
 * через отдельный клик на категорию\
 * без авторизации
 */
const backByHistory=require('../commands/backByHistory');
const conceptsCommand = {
    // goToEditorFinGroup(){
    //     return this
    //     //Finance group
    //         .waitForElementVisible('@financeGroup')
    //         .click('@financeGroup')
    //         //.waitForElementVisible("@clickedFinanceGroup")
    //         .click("@clickedFinanceGroup")
    //     //.url("http://localhost:8080/concepts")
    // },
    // goToEditorEcoFood(){
    //     //eco food company
    //     return this
    //         .waitForElementVisible("@ecoFoodCompany")
    //         .click('@ecoFoodCompany')
    //         //.waitForElementVisible("@clickedEcoFoodCompany")
    //         .click("@clickedEcoFoodCompany")
    //     //.url("http://localhost:8080/concepts")
    // },
    // goToEditorConstCompany(){
    //
    //     return this
    //     //construction company
    //         .waitForElementVisible("@constructionCompany")
    //         .click('@constructionCompany')
    //         //.waitForElementVisible("@clickedFinanceGroup")
    //         .click("@clickedFinanceGroup")
    //     //.url("http://localhost:8080/concepts")
    // },
    // goToEditorConstCompany3(){
    //     //3 construction company
    //     return this
    //         .waitForElementVisible("@constructionCompany3")
    //         .click('@constructionCompany3')
    //         //.waitForElementVisible("@clickedConstructionCompany3")
    //         .click("@clickedConstructionCompany3")
    //     //.url("http://localhost:8080/concepts")
    // },
    // goToEditorConstCompany4(){
    //     //3 construction company
    //     return this
    //         .waitForElementVisible("@constructionCompany4")
    //         //4 construction company
    //         .click('@constructionCompany4')
    //         //.waitForElementVisible("@clickedConstructionCompany4")
    //         .click("@clickedConstructionCompany4")
    //     //.url("http://localhost:8080/concepts")
    // },
    // goToEditorConstCompany5(){
    //     return this
    //         .waitForElementVisible("@constructionCompany5")
    //         //5 construction company
    //         .click('@constructionCompany5')
    //         //.waitForElementVisible("@clickedConstructionCompany5")
    //         .click("@clickedConstructionCompany5")
    // },
    // goToEditorConstCompany6(){
    //     return this
    //         .waitForElementVisible("@constructionCompany6")
    //         //6 construction company
    //         .click('@constructionCompany6')
    //         //.waitForElementVisible("@clickedConstructionCompany6")
    //         .click("@clickedConstructionCompany6")
    // },
    // goToEditorConstCompany7(){
    //     //3 construction company
    //     return this
    //         .waitForElementVisible("@constructionCompany7")
    //
    //         //7construction company
    //         .click('@constructionCompany7')
    //         //.waitForElementVisible("@clickedConstructionCompany7")
    //         .click("@clickedConstructionCompany7")
    //     //.url("http://localhost:8080/concepts")
    // },
    // goToEditorConstCompany8(){
    //     return this
    //         .waitForElementVisible("@constructionCompany8")
    //         .click('@constructionCompany8')
    //         //.waitForElementVisible("@clickedConstructionCompany8")
    //         .click("@clickedConstructionCompany8")
    //     //.url("http://localhost:8080/concepts")
    // },
    // //change category and go to editor after
    // clickCategories(){
    //     return this
    //         .click("@all")
    //         .click("@accomodation")
    //         .assert.attributeContains("@accomodation","class","active")
    //         .assert.attributeContains("@restauran","class","false")
    //         .click("@restauran")
    //         .assert.attributeContains("@restauran","class","active")
    //         .assert.attributeContains("@portfolio","class","false")
    //         .click("@portfolio")
    //         .assert.attributeContains("@portfolio","class","active")
    //         .assert.attributeContains("@restauran","class","false")
    //         .click("@ecommerce")
    //         .assert.attributeContains("@ecommerce","class","active")
    //         .click("@health_beauty")
    //         .assert.attributeContains("@health_beauty","class","active")
    //         .click("@blog")
    //         .assert.attributeContains("@blog","class","active")
    //         .click("@business")
    //         .assert.attributeContains("@business","class","active")
    //         .click("@events")
    //         .assert.attributeContains("@events","class","active")
    //         .click("@music")
    //         .assert.attributeContains("@music","class","active")
    //         .click('@all')
    // },
    // //go to editor after choosing category
    // goToFinGroupAfterChosCategory(){
    //     return this
    //         .click("@accomodation")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("@buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // },
    // goToEcoFoodAfterChosCategory(){
    //     return this
    //         .click("@restauran")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("@buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // },
    // goToConstCompanyAfterChosCategory(){
    //     return this
    //         .click("@portfolio")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("@buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // },
    // goToConstCompany3AfterChosCategory(){
    //     return this
    //         .click("@ecommerce")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // },
    // goToConstCompany4AfterChosCategory(){
    //     return this
    //         .click("@health_beauty")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("@buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // },
    // goToConstCompany5AfterChosCategory(){
    //     return this
    //         .click("@blog")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("@buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // },
    // goToConstCompany6AfterChosCategory(){
    //     return this
    //         .click("@business")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("@buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // },
    // goToConstCompany7AfterChosCategory(){
    //     return this
    //         .click("@events")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("@buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // },
    // goToConstCompany8AfterChosCategory(){
    //     return this
    //         .click("@music")
    //         .click("@conceptAfterChoosingCategory")
    //         .click("@buttonEditAfterChoosingCategory")
    //         .assert.urlContains('editor')
    // }
    assertCategories(){
        this.section.conceptCategory
            //Все категории не активны
            .click("@all")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")
            .assert.visible("@searchInput")
            //Активна категория accomodation
            .click("@accomodation")
            .assert.attributeContains("@accomodation",'class',"active")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")
            //restauran активная категория
            .click("@restaurant")
            //.assert.attributeContains("@accomodation",'class',"false")
            .assert.attributeContains("@restaurant",'class',"active")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")
            //portfolio аактивная категория
            .click("@portfolio")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            .assert.attributeContains("@portfolio",'class',"active")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")
            //eCommerce активная категория
            .click("@eCommerce")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            .assert.attributeContains("@eCommerce",'class',"active")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")
            //health & beauty активная категория
            .click("@health_beauty")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            .assert.attributeContains("@health_beauty",'class',"active")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")
            //blog активная категория
            .click("@blog")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            .assert.attributeContains("@blog",'class',"active")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")
            //business активная категория
            .click("@business")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            .assert.attributeContains("@business",'class',"active")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")
            //events активная категория 
            .click("@events")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            .assert.attributeContains("@events",'class',"active")
            // .assert.attributeContains("@music",'class',"false")
            //music активная категория
            .click("@music")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            .assert.attributeContains("@music",'class',"active")
            //все неактивные 
            .click("@all")
            // .assert.attributeContains("@accomodation",'class',"false")
            // .assert.attributeContains("@restaurant",'class',"false")
            // .assert.attributeContains("@portfolio",'class',"false")
            // .assert.attributeContains("@eCommerce",'class',"false")
            // .assert.attributeContains("@health_beauty",'class',"false")
            // .assert.attributeContains("@blog",'class',"false")
            // .assert.attributeContains("@business",'class',"false")
            // .assert.attributeContains("@events",'class',"false")
            // .assert.attributeContains("@music",'class',"false")

        return this;

    },
    goToEditorWithOutChoosingCategory(){
        
        this.section.itemsConcepts
            .click("@finGroup")
            .click("@editButFinGroup")
            .assert.urlContains("editor");
        this.backByHistory();
        this.section.itemsConcepts
            .click("@ecoFoodCompany")
            .click("@editButEcoFood")
            .assert.urlContains("editor");
        this.backByHistory();
        this.section.itemsConcepts
            .click("@constructionCompany")
            .click("@editButConstComp")
            .assert.urlContains("editor");
        this.backByHistory();
        this.section.itemsConcepts
            .click("@constructionCompany3")
            .click("@editButConstComp3")
            .assert.urlContains("editor");
        this.backByHistory();
        this.section.itemsConcepts
            .click("@constructionCompany4")
            .click("@editButConstComp4")
            .assert.urlContains("editor");
        this.backByHistory();
        this.section.itemsConcepts
            .click("@constructionCompany5")
            .click("@editButConstComp5")
            .assert.urlContains("editor");
        this.backByHistory();
        this.section.itemsConcepts
            .click("@constructionCompany6")
            .click("@editButConstComp6")
            .assert.urlContains("editor");
        this.backByHistory();
        this.section.itemsConcepts
            .click("@constructionCompany7")
            .click("@editButConstComp7")
            .assert.urlContains("editor");
        this.backByHistory();
        this.section.itemsConcepts
            .click("@constructionCompany8")
            .click("@editButConstComp8")
            .assert.urlContains("editor");
        this.backByHistory();
        
        return this;
    },
    goToEditorWithChoosingCategory(category){
        
        switch(category.toLowerCase())
        {
            case "accomodation":
                this.section.conceptCategory
                    .click("@accomodation");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")
                    .assert.urlContains("editor");
                this.backByHistory();
            break;
            case "restaurant":
                this.section.conceptCategory
                    .click("@restaurant");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")
                    .assert.urlContains("editor");
                this.backByHistory();
                break;
            case "portfolio":
                this.section.conceptCategory
                    .click("@portfolio");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")
                    .assert.urlContains("editor");
                this.backByHistory();
                break;
            case "eсommerce":
                this.section.conceptCategory
                    .click("@eCommerce");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")
                    .assert.urlContains("editor");
                this.backByHistory();
                break;
            case "health_beauty":
                this.section.conceptCategory
                    .click("@health_beauty");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")
                    .assert.urlContains("editor");
                this.backByHistory();
                break;
            case "blog":
                this.section.conceptCategory
                    .click("@accomodation");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")
                    .assert.urlContains("editor");
                this.backByHistory();
                break;
            case "business":
                this.section.conceptCategory
                    .click("@business");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")
                    .assert.urlContains("editor");
                this.backByHistory();
                break;
            case "events":
                this.section.conceptCategory
                    .click("@events");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")
                    .assert.urlContains("editor");
                this.backByHistory();
                break;
            case "music":
                this.section.conceptCategory
                    .click("@music");
                this.section.itemsConcepts
                    .click("@finGroup")
                    .click("@editButFinGroup")//TODO когда выбор просходит есть только один элемент 
                    .assert.urlContains("editor");
                this.backByHistory();
                break;

        }

    }
};


export default{
    url: "http://localhost:8080/",
    commands: [conceptsCommand],

    
    sections:{
        //Правое меню в концептах, для выбора концептов
        itemsConcepts:{
            selector                                    :".concepts-items-container.flex.row-wrap.center.block-inline",
            elements:{

                finGroup                                :"div:nth-child(1)",
                ecoFoodCompany                          :"div:nth-child(2)",
                constructionCompany                     :"div:nth-child(3)",
                constructionCompany3                    :"div:nth-child(4)",
                constructionCompany4                    :"div:nth-child(5)",
                constructionCompany5                    :"div:nth-child(6)",
                constructionCompany6                    :"div:nth-child(7)",
                constructionCompany7                    :"div:nth-child(8)",
                constructionCompany8                    :"div:nth-child(9)",

                editButFinGroup                         :"div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                editButEcoFood                          :"div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                editButConstComp                        :"div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                editButConstComp3                       :"div:nth-child(4)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                editButConstComp4                       :"div:nth-child(5)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                editButConstComp5                       :"div:nth-child(6)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                editButConstComp6                       :"div:nth-child(7)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                editButConstComp7                       :"div:nth-child(8)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                editButConstComp8                       :"div:nth-child(9)>div:nth-child(2)>div:nth-child(1)>a:nth-child(5)>div",
                //TODO когда добавится функционал , добавить разные кнопки , или что понадобится
            }
        },
        conceptCategory:{
            selector                                    :".concepts-category-list",
            elements:{
                all                                     :"li:nth-child(1)",
                accomodation                            :"li:nth-child(2)",
                restaurant                              :"li:nth-child(3)",
                portfolio                               :"li:nth-child(4)",
                eCommerce                               :"li:nth-child(5)",
                health_beauty                           :"li:nth-child(6)",
                blog                                    :"li:nth-child(7)",
                business                                :"li:nth-child(8)",
                events                                  :"li:nth-child(9)",
                music                                   :"li:nth-child(10)",
                searchInput                             :"li:nth-child(11)"

            }
        },
        
    }
}








