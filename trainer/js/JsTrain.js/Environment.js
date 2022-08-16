// function createCalcFunction(n) {
//     return function(){
//         console.log(1000* n)
//     }
// }

// const calc = createCalcFunction(42)

// function createIncrementor() {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(1))
// console.log(addTen(10))

// function urlGenerator(domain){
//     return function(){
//         return `https://${url.}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')

// console.log(comUrl('google'))
// console.log(comUrl('facebook'))



function logPerson(){
    console.log(`Person : ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name : 'Alex', age: 28, job :'FrontEnd'};
const person2 = {name : 'Bob', age: 21, job :'BackEnd'};

bind(person1, logPerson) ()
bind(person2, logPerson) ()

function bind(context,fn){
    return function(...args){
        fn.apply(context, args)
    }
}