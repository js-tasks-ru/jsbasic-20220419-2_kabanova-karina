function toggleText() {
  let button = document.querySelector(".toggle-text-button")
  let div = document.querySelector("#text")
  button.addEventListener('click', () => {

    if (div.hasAttribute('hidden') == false){
      div.setAttribute('hidden', true)
    } else if (div.hasAttribute('hidden') == true){
      div.removeAttribute('hidden')
    }


  })}
