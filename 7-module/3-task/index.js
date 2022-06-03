import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps
    this.value = value
    this.create()
    this.addEventListener ()

  }
  create() {
    this.elem = createElement(`
    <div class="slider">
    <div class="slider__thumb" style="left: ${this.value}%;">
      <span class="slider__value">${this.value}</span>
    </div>
    <div class="slider__progress" style="width: ${this.value};"></div>
    <div class="slider__steps">
    </div>
  </div>
`)

    this.sliderSteps = this.elem.querySelector('.slider__steps')
    let numberOfSteps = this.steps

    for (let i = 0; i < numberOfSteps; i++) {
      let span = document.createElement('span')
      this.sliderSteps.append(span)

    }
    this.elem.querySelector('.slider__steps').children[this.value].classList.add('slider__step-active') 

  }

  addEventListener (){

    this.elem.addEventListener('click', (event) =>{
      let left = event.clientX - this.elem.getBoundingClientRect().left // от начала слайдера до места клика
      let leftRelative = left / this.elem.offsetWidth
      let segments = this.steps - 1
      let approximateValue = leftRelative * segments
      let value = Math.round( approximateValue)
      let valuePercents = value / segments * 100
      this.changeStep(value, valuePercents)

      this.sliderSteps = this.elem.querySelector('.slider__steps')
      let spanList = this.sliderSteps.querySelectorAll("span")

     
        for (let span of spanList) {
          span.classList.remove("slider__step-active")
        }
   
      this.elem.querySelector('.slider__steps').children[value].classList.add('slider__step-active') 

      this.elem.dispatchEvent(new CustomEvent('slider-change', { 
        detail: value, 
        bubbles: true 
      }))
   

    })
  }

  changeStep(value, valuePercents){
    this.elem.querySelector('.slider__value').innerHTML = value
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress')
    thumb.style.left =`${valuePercents}%`;
    progress.style.width = `${valuePercents}%`
  
  }
  

}
