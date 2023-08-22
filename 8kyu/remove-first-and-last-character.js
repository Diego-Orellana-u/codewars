// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


// My solution:

// function removeChar(str){
//     let toArr = str.split("");
//     toArr.shift();  //remember shift,pop and all the other methods modifies the original array
//     toArr.pop();    //so you have to return the original array to see the changes
//     return toArr.join("") //if you return a variable equal to the .pop() method, it will return the 
//                           //deleted element of the array
    
  
// };

// Other interesting solutions:

// function removeChar(str) {
//     return str.slice(1, -1);
//   }

/////