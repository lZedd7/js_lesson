const MIN_COUNT_VALUE = 2;
const MAX_COUNT_VALUE = 5;
const PLUS_SIGN = '+';
const SUB_SIGN = '-';
const DIV_SIGN = '/';
const MULT_SIGN = '*';
const VALID_OPERATORS = [   PLUS_SIGN,
                            SUB_SIGN,
                            DIV_SIGN,
                            MULT_SIGN];


const operator = getOperation();
const operandsCount = getOperandsCount();
const operands = getOperands(operandsCount);

const result = calculate(operator, operands); 

showResult(operator, operands,result);

function getOperand(operandName){
  let operand 
    do {
        operand = +(prompt("Operand"+ operandName))
    } while (!isOperandValue(operand))
    return operand;
}
function getOperandsCount(){
    let count;
    do{
        count = +prompt('How many operands')
    } while(!isCountValid(count))
    return count;
}

function isCountValid(count){
    return !isNaN(count) && 
            count >=MIN_COUNT_VALUE  && 
            count <=MAX_COUNT_VALUE ;
}

function isOperandValue(operand){
    return !isNaN(operand)
}
function getOperands(count){
    const operands = [];
    for (let i =1; i <= count; i++){
        operands.push(getOperand(i));
    }
        return operands;
} 

function getOperation(){
    let operator;
do  { 
    operator = prompt('what to do')
} while (!isOperatorValid(operator))
return operator;
}
function isOperatorValid(operator){
    return    VALID_OPERATORS.includes(operator)
}

function calculate(op, nums){
    let result;
switch(op){ 
    case PLUS_SIGN  : result = add(nums); break
    case SUB_SIGN : result= sub(nums); break
    case DIV_SIGN : result= div(nums); break
    case MULT_SIGN : result= mult(nums); break
    }
    return result; 
}
function add (nums){
    return nums.reduce((acc, num)=> acc + num);
}
function sub(nums){
    return nums.reduce((acc, num)=> acc - num);
}
function mult (nums){
    return nums.reduce((acc, num)=> acc * num);
}
function div (nums){
    return nums.reduce((acc, num)=> acc / num);
}
function showResult(op,nums,res){
    console.log(`${nums.join(` ${op} `)}  = ${res}`)
}

