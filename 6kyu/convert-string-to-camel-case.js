// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


// My solution:
function toCamelCase(str){
    let toArr = str.split("")
    let newArr = []
    for(let i = 0; i < str.length;i++){
      if(toArr[i] === "-" || toArr[i] === "_"){
        newArr.push(toArr[i+1].toUpperCase()) 
      }else if(toArr[i-1] === "-" || toArr[i-1] === "_"){
      }else{
        newArr.push(toArr[i])
      }
    }return newArr.join("")
  }