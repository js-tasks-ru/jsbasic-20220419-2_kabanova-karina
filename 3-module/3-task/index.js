function camelize(str) {
  let m = str.split("-")
  m = m.map((item, index) => ( index >0 ? item[0].toUpperCase()+item.slice(1) : item))
  m = m.join("")
  return m
}
