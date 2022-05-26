import createElement from '../../assets/lib/create-element.js'
export default class ProductCard {
  constructor(product) {
    this.product = product
    this.creator()
    this.addEventListeners()    
  }
  creator (){
    this.elem = createElement (`
      <div class="card">
    <div class="card__top">
        <img src="/assets/images/products/...значение product.image..." class="card__image" alt="product">
        <span class="card__price">€<!--значение product.price--></span>
    </div>
    <div class="card__body">
        <div class="card__title"><!--значение product.name--></div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`)
let img = this.elem.querySelector ('.card__image')
img.src = `/assets/images/products/${this.product.image}`

let price = this.elem.querySelector ('.card__price')
price.innerHTML = `€${this.product.price.toFixed(2)}`

let title =  this.elem.querySelector ('.card__title')
title.innerHTML = this.product.name

}
 addEventListeners() {
  this.elem.onclick = (event) => this.onClick(event);
}

onClick(event) {
  this.elem.dispatchEvent(new CustomEvent("product-add", {
    detail: this.product.id,
    bubbles: true
  }))

} 
}
