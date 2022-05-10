function makeFriendsList(friends) {
  let massiv = friends.map (item => `${item.firstName} ${item.lastName}`)
  let newUl = document.createElement('ul')
  for (let item of massiv){
      let li = `<li>${item}</li>`
      newUl.innerHTML += li
  }
  return newUl
  

}
