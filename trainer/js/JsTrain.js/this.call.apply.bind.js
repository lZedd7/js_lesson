function hello () {
    console.log( ' Hello', this)
}

const person = {
    name : 'Alex',
    age : 28,
    sayHello : hello,
    sayHelloWindow : hello.bind(window),
    logInfo : function(job, phone) {
        console.group(`${this.name} info :`)
        console.log(`Name is ${this.name}`),
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const Kate = {
    name : 'Kate',
    age : 23
}

// const fnKateInfoLog = person.logInfo.bind(Kate, 'FrontEnd', '46463132154213')
// person.logInfo.call(Kate ,'FrontEnd', '46463132154213')
// person.logInfo.appply(Kate, ['FrontEnd']  , ['46463132154213'])

// fnKateInfoLog()

const array = [1,2,3,4,5]

Array.prototype.multBy = function(n) {
    return this.map(function(i){
        return i * n
    })
}
console.log(array.multBy(21))