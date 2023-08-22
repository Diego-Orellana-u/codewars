// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// My solution:

var humanYearsCatYearsDogYears = function(humanYears) {   //var is used in the original challenge, I would've used let instead.
    let dogYears = 0;
    let catYears = 0;
    if(humanYears >= 3){
      catYears = 15 + 9 + (4 * (humanYears - 2));
      dogYears = 15 + 9 + (5 * (humanYears - 2));
      return [humanYears,catYears,dogYears]
    }else if(humanYears === 2){
      return [humanYears,24,24]    
    }else if(humanYears === 1){
      return [humanYears,15,15]
    }
  }

// Other interesting solutions:

var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }