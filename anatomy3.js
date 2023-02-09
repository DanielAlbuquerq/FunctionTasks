// Arrow Function - Arrow Function is always anonymous
const increment1 = function(n){
    return n + 1
  }
  
  const increment2 = (n) => {
    return n + 1
  }
  
  console.log(increment2(1))

 //IIFE - Immediately Invoked Function Expression
 (function (a, b, c){
    let x = 5
    const values = console.log(`Result: ${a + b + c}`)
  })(1,3,4);

  (function() {
    let x = 300
    console.log(x)
  })();
  
  (() => {
    console.log('arrow #01')
  })();
  
  (() => console.log('arrow #02'))();

  