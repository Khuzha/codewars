String.prototype.toJadenCase = function () {
  return this.split(/\s/).map(word => word[0].toUpperCase() + word.substr(1)).join(' ')
}

let text = 'hello world'
text = text.toJadenCase()
console.log(text)