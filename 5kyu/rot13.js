// ROT13 is a simple letter substitution cipher that replaces a letter 
// with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


// My solution:

function rot13(message){
    //I could have done it using the rot13 input/output alphabet but 
    //i wanted to try to create an algorithm to solve it
    let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let final = []
    
    let change = message.split("").map(function(letter){
      let alphabet;
      if(letter.toUpperCase() === letter){
        alphabet = upperCaseAlphabet
      }else{
        alphabet = lowerCaseAlphabet
      }
      let index = alphabet.indexOf(letter)
      if(!alphabet.includes(letter)){
        final.push(letter)
      }else if(index + 13 >= alphabet.length){
        final.push(alphabet[(index+13)-alphabet.length])
      }else{
        final.push(alphabet[index+13])
      }
    })
    return final.join("")
  }