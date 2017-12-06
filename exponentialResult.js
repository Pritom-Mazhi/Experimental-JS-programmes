var exponential_result = function(base, exponent){
  result = 1;//1st step
  
  for(var count=1; count<=exponent; count++){
    result *= base;
  }
  return result;
}

var baseCase = prompt("Give me base");
var exponentCase = prompt("Give me exponent");
console.log(exponential_result(baseCase, exponentCase));
