exports.HomePage = 
class HomePage{
    constructor(page) {
        this.page = page;
        this.productsLink = '//div[@id="tbodyid"]//h4//a'
        this.pagesLink = "ul>li>a";
    }

    async goToPage(pageText){
        await this.page
                .locator(this.pagesLink)
                .filter({ hasText : pageText })
                .click();
    }

    async goToHomePage(){
        await this.page.goto("https://www.demoblaze.com/");
    }

    async goToProductPage(product){
        await this.page
                .locator(this.productsLink)
                .filter({hasText:product})
                .click();
    }


}