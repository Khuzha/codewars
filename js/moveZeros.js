const moveZeros = (arr) => {
  for (const i in arr) {
    if (arr[i] === 0 && i ) {
      console.log(arr, i)
      arr.splice(i, 1)
      arr.push(0)
    }
  }
  return arr
}

console.log(moveZeros([ 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]))