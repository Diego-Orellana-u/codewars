// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My solution:
function pigIt(str){
    let punctuation = "?!.,:;"
    let modifier = str.split(" ").map(function(each){
      if(punctuation.includes(each)) return each
      return each.slice(1,each.length) + each[0] + "ay"
    }).join(" ")
    return modifier
  }