function createCalculator(num){
    
    return {
        
        sum: (arg) =>isArgumentValid(arg) ?  num +=arg : null, 
        mult: (arg) =>isArgumentValid(arg) ? num *=arg : null, 
        div: (arg) =>isArgumentValid(arg) ?  num /= a : null, 
        sub: (arg) =>isArgumentValid(arg) ?  num -= arg : null , 
        set: (arg) =>isArgumentValid(arg) ?  num = arg : null,
     } 
  }
function isArgumentValid(num){
    return !isNaN(num)
}
const calc = createCalculator(10);

calc.sum(5); /// 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.set(100); // reset 




 