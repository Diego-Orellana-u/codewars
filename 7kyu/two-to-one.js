// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"




// My solution:
function longest(s1, s2) {
    let conc = s1 + s2;
    let final = "";
    for(let i = 0;i < conc.length;i++){
      if(final.search(conc[i]) === -1){
        final += conc[i];
      }
    }
    return final.split("").sort().join("")
  }

// Other interesting solution:
function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}