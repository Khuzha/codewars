const alphabet = {  
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '/': ' ',
  '-.-.--': '!',
  '..--..': '?',
  '.-.-.-': '.',
  '--..--': ',',
  '...---...': 'sos'
}

decodeMorse = function(morseCode){
  return morseCode.trim().split('   ').map(word => word.split(' ').map(letter => alphabet[letter]).join('')).join(' ').toUpperCase()
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))