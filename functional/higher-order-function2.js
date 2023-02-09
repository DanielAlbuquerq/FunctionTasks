// It is a function that takes one parameter.
// But inside the function there is another function
// Breaking into two functions is more dynamic, not necessary 
// to set the tax always in the console.log, we can save it in a variable and use it.

//curring type 
function finalPrice(tax) {
    return function (price) {
      return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)
console.log(nycFinalPrice(20.00))