// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

// my solution:

var countSheep = function (num){  //Notice "var" it's from the original problem. I would've used "let" instead
    let finalString = ""
    for(let i = 1; i <= num; i++){
      finalString += i + " sheep..."
    }
    return finalString
  }