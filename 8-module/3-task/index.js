export default class Cart {
  cartItems = []; // [product: {...}, count: N]
  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product != null || product != undefined) {
      let index = this.cartItems.findIndex(item => item.product.id === product.id)
      if (index > -1) { // если продукт уже есть в массиве
        this.cartItems[index].count++
      } else { // если продукта нет - создаем новый объект
        let obj = {}
        obj.product = product
        obj.count = 1
        this.cartItems.push(obj)
      }
    }
    this.onProductUpdate(this.cartItems)
  }

  updateProductCount(productId, amount) {
    let index = this.cartItems.findIndex(item => item.product.id === productId)
    if (index > -1) amount == 1 ? this.cartItems[index].count++ : this.cartItems[index].count--
    let indexOfProductWithCountNull = this.cartItems.findIndex(item => item.count === 0)
    if (indexOfProductWithCountNull > -1) this.cartItems.splice(indexOfProductWithCountNull, 1)
    this.onProductUpdate(this.cartItems)
  }

  isEmpty() {
    return this.cartItems.length === 0
  }

  getTotalCount() {
    let totalCount = this.cartItems.reduce((sum, current) => sum + current.count, 0)
    return totalCount
  }

  getTotalPrice() {
    let getTotalPrice = this.cartItems.reduce((sum, current) => sum + current.product.price * current.count, 0)
    return getTotalPrice
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this)
  }
}


