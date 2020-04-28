function findShort(s) {
  return s.split(' ').reduce((prev, curr) => Math.min(prev, curr.length), Infinity)
}

console.log(findShort("лол кек шыоащылва ыва ш шоыщ"))