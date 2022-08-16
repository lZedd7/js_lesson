let a = 10;

function f1() {
    console.log(a)
}
f1()

function f2() {
    let a = 33
    console.log(a)
}
f2()

function userCount(n = 0){
    let count = n;
    return function step(){
        count++;
        console.log(count)
    }
}
let step1 = userCount()
let step2 = userCount(200)

step1()
step1()
step1()
step1()
step2()


function randomIneger(min,max){
    let rand = min - 0.5 + Math.random()* (max - min + 1)
    return Math.round(rand)
}
function createBeggar(){
let s = 0;
return function beggar (){
    s + randomIneger(0, 100)
    console.log(s)
    if (s >= 250) return;
    beggar()
}
}
let begg1 = createBeggar()
begg1()