let operator = getOperation();

const operandA = getOperand('A');
const operandB = getOperand('B');

const result = calculate(operator, operandA, operandB);

showResult(operator, operandA, operandB,result);

function getOperand(operandName){
  return  Number(prompt("Operand"+ operandName));
}
function getOperation(){
    return prompt('what to do ');
}


function calculate(op,a,b){
    let result;

switch(op){ 
    case '+' : result= a + b; break
    case '-' : result= a - b; break
    case '/' : result= a / b; break
    case '*' : result= a * b; break
    }
    return result; 
}

function showResult(op,a,b,res){
    console.log(`${a} ${op} ${b} = ${res}`);
}




