function initCarousel() {
  let forward = document.querySelector('.carousel__arrow_right')
  let back = document.querySelector('.carousel__arrow_left')
  let carousel = document.querySelector('.carousel__inner')
  a = 0
  back.style.display = "none"

  forward.addEventListener('click', () => {
    back.style.display = ''
    if (a < (carousel.offsetWidth * 3)){
      a += carousel.offsetWidth
    carousel.style.transform = `translateX(-${a}px)`
  } 
   if (a === carousel.offsetWidth * 3){ forward.style.display = 'none'
  }})
   

  back.addEventListener('click', () => {
    if (a > 0){
    a -= carousel.offsetWidth
    carousel.style.transform = `translateX(-${a}px)`}
     
  if (a == 0){
    back.style.display = "none"}}
  )}