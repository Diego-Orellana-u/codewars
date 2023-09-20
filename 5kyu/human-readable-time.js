// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// My solution:
function humanReadable (seconds) {
    let partialMinutes = Math.trunc(seconds/60)
    let totalHours = Math.trunc(partialMinutes/60)
    let totalMinutes = Math.trunc((seconds-(totalHours*60*60))/60)
    let totalSeconds = (seconds-(totalHours*60*60))%60
    let final = ""
    if(totalHours < 10){
      final = "0"+ totalHours + ":"
    }else{
      final = totalHours + ":"
    }
    if(totalMinutes < 10){
      final += "0" + totalMinutes + ":"
    }else{
      final += totalMinutes + ":"
    }
    if(totalSeconds < 10){
      final += "0" + totalSeconds
    }else{
      final += totalSeconds 
    }
    return final
  }