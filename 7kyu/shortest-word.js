// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// My solution:

function findShort(s){
    let str = s.split(" ")
    let final = str[0].length
    for(let i = 1;i < str.length;i++){
      if(final > str[i].length){
        final = str[i].length
      }
    }return final
  }