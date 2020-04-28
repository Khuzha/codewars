function openOrSenior(data){
  return data.map(person => (person[0] >= 55 && person[1] > 7) ? 'Senior' : 'Open')
}


console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))