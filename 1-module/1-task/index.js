function factorial(n) {
  let l = 1;
  for (let i = n; i > 1; i--) {
    l *= i
  }
  return l;
}