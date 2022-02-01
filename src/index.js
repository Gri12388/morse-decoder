const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codes = expr.split('**********');
    let words = [];
    
    //console.log (codes);
    codes.forEach(function(item){
      let word = [];
      for (let i = 0; i < item.length; i+=10) {
        //console.log(item.slice(i, i + 10));
        let letter = item.slice(i, i + 10);
        let key = [];
        for (let j = 0; j < letter.length; j+=2) {
          let sign = letter.slice(j, j+2);
          switch(sign) {
            case '11': key.push('-'); break; 
            case '10': key.push('.'); break;
          }
        }
        word.push(MORSE_TABLE[key.join('')]);
        //console.log(word);
      }
      words.push(word.join(''));
      //console.log(words);
    });
    return words.join(' ');
  }

module.exports = {
    decode
}