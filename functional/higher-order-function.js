// Function that operate on other functions,
// either by taking them as arguments or by
// returning them, are called higher-order functions.

function run(fn){
    return `Result: ${fn()}`
  }

function sayHello(){
  console.log('Hello!')
}
run(sayHello)

//Anonymous function as parameters to another function
run(function(){
  console.log('run!!')
})
//X
const result = run(Math.random)
console.log(result)


