// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// My solution:

function highAndLow(numbers){
    let toArr = numbers.split(" ");
    let toNum = toArr.map((x) => { return parseInt(x)})
    let min = Math.min(...toNum);
    let max = Math.max(...toNum);
    let final = max.toString() + " " + min.toString();
    return final 
}

// Other interesting solutions:

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`; //It's not necessary to convert the string to number and then the number to string
  }