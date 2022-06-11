import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
    // экземпляры классов
    this.carousel = new Carousel(slides)
    this.ribbonMenu = new RibbonMenu(categories)
    this.stepSlider = new StepSlider({
      steps: 5,
      value: 3
    });
    this.cartIcon = new CartIcon()
    this.cart = new Cart(this.cartIcon)

    this.dataCarouselHolder = document.querySelector('[data-carousel-holder]')
    this.dataRibbonHolder = document.querySelector('[data-ribbon-holder]')
    this.dataSliderHolder = document.querySelector('[data-slider-holder]')
    this.dataCartIconHolder = document.querySelector('[data-cart-icon-holder]');
    this.dataProductsGridHolder = document.querySelector('[data-products-grid-holder]');

  }

  async render() {
    this.dataCarouselHolder.append(this.carousel.elem)
    this.dataRibbonHolder.append(this.ribbonMenu.elem)
    this.dataSliderHolder.append(this.stepSlider.elem)
    this.dataCartIconHolder.append(this.cartIcon.elem)

    let url = 'products.json'
    let response = await fetch(url) // fetch возвращает промис,await
    let products = await response.json()
    if (response.ok) {
      this.dataProductsGridHolder.innerHTML = ""
      this.productsGrid = new ProductsGrid(products)
      this.dataProductsGridHolder.append(this.productsGrid.elem)
    }

    this.stepSlider.elem.addEventListener('slider-change', (event) => {
      this.productsGrid.updateFilter({
        maxSpiciness: event.detail
      });
    })

    document.body.addEventListener('product-add', (event) => {
      this.cart.addProduct(products.find(item => item.id === event.detail))
    })

    document.querySelector('.ribbon').addEventListener('ribbon-select', (event) => {
      console.log(event)
      this.productsGrid.updateFilter({
        category: event.detail
      });
    })

    let nutsCheckbox = document.getElementById('nuts-checkbox')
    nutsCheckbox.addEventListener('change', () =>
      this.productsGrid.updateFilter({
        noNuts: nutsCheckbox.checked
      })
    )
    let vegeterianCheckbox = document.getElementById('vegeterian-checkbox')
    vegeterianCheckbox.addEventListener('change', () =>
      this.productsGrid.updateFilter({
        vegeterianOnly: vegeterianCheckbox.checked
      })
    )










  }
}
