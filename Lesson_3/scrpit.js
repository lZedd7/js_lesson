let operator = getOperation();

const operandA = getOperand('A');
const operandB = getOperand('B');

const result = calculate(operator, operandA, operandB);

showResult(operator, operandA, operandB,result);

function getOperand(operandName){
    let operand 
    do {
        operand = Number(prompt("Operand"+ operandName));
    } while (isOperandValue(operand))
    operand =getOperand('A');
    return operand;
}
function isOperandValue(operand){
    return (!isNaN(operand))
}
function getOperation(){
    let operator;
do  { 
    operator = prompt('what to do ');
} while (!isOperatorValid(operator))
 return operator;
} 
function isOperatorValid(operator){
  return  operator === '+' ||
          operator === '-' || 
          operator === '/' || 
          operator === '*'
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

