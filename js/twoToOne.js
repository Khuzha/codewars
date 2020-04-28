function longest(s1, s2) {
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for (let i in alph) {
    !s1.includes(alph[i]) && !s2.includes(alph[i]) ? alph[i] = '' : false
  }
  return alph.join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))