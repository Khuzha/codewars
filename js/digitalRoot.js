function digital_root(n) {
  n = n.toString()
  if (n.length == 1) {
    return +n
  }
  
  const arr = n.split('')
  let sum = 0;
  for (let digit of arr) {
    sum += +digit
  }
  return digital_root(sum)
}

console.log(digital_root(513123))