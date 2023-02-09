//Creat a range function
function range(a, b, c){
    const nums = [] 
    for(let i = 1; i <= a; i++){
      nums.push(i)
    }
    return nums
  }
  // range(5) -> [1, 2, 3, 4, 5]
  console.log(range(5))
  
  // range(6, 11) -> [6,7, 8, 9, 10, 11]