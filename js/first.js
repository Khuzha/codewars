function list(names){
  let res = ''
  
  if (names.length == 0) {
    return ''
  }
  if (names.length == 1) {
    return console.log(names[0].name)
  }
  for (let i in names) {
    names[i] = names[i].name
  }
  
  const lastName = names[names.length - 1] 
  names.pop()
  res = names.join(', ') + ` & ${lastName}`
  console.log(res)
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])