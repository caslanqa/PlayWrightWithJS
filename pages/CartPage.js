exports.CartPage = 
class CartPage{
    constructor(page) {
        this.page = page;
        this.productsNameLoc = '#tbodyid>tr>td:nth-child(2)';
        this.deleteButtonLoc = `#tbodyid>tr:nth-child(${this.index})>td>a`;
        this.index = 0;
    }

    async validateCart(productName){
        const products = await this.page.$$(this.productsNameLoc);
        const flag = false;

        for (const product of products) {
            if (await product.textContent()===productName) {
                flag = true;
                break;
            }
        }
        return await flag;
    }
    

}