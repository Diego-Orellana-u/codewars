// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// My solution:
function moveZeros(arr){ 
    let final = []
      for(let i = arr.length - 1; i > -1;i--){
        if(arr[i] !== 0){
          final.unshift(arr[i])
        }else{
          final.push(arr[i])
        }
      }return final
    }