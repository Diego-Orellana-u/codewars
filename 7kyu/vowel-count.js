// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution:

function getCount(str) {
    let sum = 0
    let strg = str.split("")
    strg.forEach((x,i) => {
      if(x === "a" || x === "e" || x === "i" || x === "o" || x ==="u")
      sum += 1
    })
    return sum;
}

// Other interesting solutions using match method:

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }