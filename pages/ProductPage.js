exports.ProductPage = 
class ProductPage{
    constructor(page) {
        this.page = page;
        this.addToCartButton = '//a[text()="Add to cart"]';
        this.productHeader = '#tbodyid>h2';
    }

    async addToCart(){
        await this.page.click(this.addToCartButton);
        
        await this.page.on('dialog',async dialog=>{
            await dialog.accept();
        })
    }

    async getProductName(){
        return await this.page.locator(this.productHeader).textContent();
    }
    
}