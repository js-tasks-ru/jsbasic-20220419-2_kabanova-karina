export default class Cart {
  cartItems = []; // [product: {...}, count: N]
  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let index
    if (product != null || product != undefined) 
    {if (this.cartItems.length > 0 && this.cartItems.some(item => {
      index = this.cartItems.indexOf(item)
      return item.product.id === product.id
    })) {
      this.cartItems[index].count++
    } else {
      let obj = {}
      obj.product = product
      obj.count = 1
      this.cartItems.push(obj)
    }}
  this.onProductUpdate(this.cartItems) 
  }


  updateProductCount(productId, amount) {
    let index
    this.cartItems.map (item => {
      if (item.product.id === productId){
        amount == 1? item.count ++ : item.count --
      }
    })
    if (this.cartItems.some(item => {
      index = this.cartItems.indexOf(item)
      return item.count === 0
    })){
     this.cartItems.splice(index, 1) 
    }
   this.onProductUpdate(this.cartItem)  
  }

  isEmpty(cartItems) {
    return this.cartItems.length === 0
  }

  getTotalCount() {
    let totalCount = this.cartItems.reduce ((sum, current) => sum + current.count, 0)
    return totalCount
  }

  getTotalPrice() {
    let getTotalPrice =this.cartItems.reduce ((sum, current) => sum + current.product.price * current.count, 0)
    return getTotalPrice
  }

  onProductUpdate(cartItem) {
  /* this.cartIcon.update(cartItem) */ 
 
    
  }
}


