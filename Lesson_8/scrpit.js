

// function sumTo(number){
//     let sum = 0;
//     for (i = 1; i <= number; i++){
//         sum += i;
//     }
//     return sum;
// }

// sumTo(1)



// function sumToR(number){
//     if (number == 1) return 1;
//     return sumToR(number) = number + sumToR(number-1);
// }
// sumToR(40)


function factorial(num){
   
    return (num != 1) ? num * factorial(num - 1) : 1;
}

console.log(factorial(5))

function fib(n){
    return  n <= 1 ? n :   n = fib(n-1) + fib(n-2) 
}

console.log(fib(3));