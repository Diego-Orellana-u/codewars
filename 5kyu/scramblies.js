// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, 
// otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My solution:
function scramble(str1, str2) {
    let numberOf = {} //create an object to count for the ocurrence of each letter in str2
    
    for(const letter of str2){ //we loop through each letter and add +1 for every time it appears
      if(numberOf[letter]) numberOf[letter]++
      else numberOf[letter] = 1
    }
    
    for(const letter of str1){ //if the letter of str1 exist in the object and the value is not 0, reduce 1 from the value
      if(numberOf[letter] && numberOf[letter] !== 0) numberOf[letter]--
    }
    
    for(const each in numberOf){ //if there is a key with value !== 0, that letter is not repeated the same number of times in str1
      if(numberOf[each] !== 0) return false
    }
    
    return true
  }