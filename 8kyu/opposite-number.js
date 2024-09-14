// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// Second Try solution:
function opposite(number) {
  return -number;
}

// First try solution:

function opposite(number) {
  if (number !== 0) {
    return -number;
  } else {
    return 0;
  }
}
