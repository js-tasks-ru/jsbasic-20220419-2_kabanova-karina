function getMinMax(str) {
  let a = str.split(' ')
  a  = a
    .map(item => +item)
    .filter(item => !isNaN(item))
let max = {}
max["min"] = Math.min(...a)
max["max"] = Math.max(...a)

return max
}
