// const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))

// localStorage.clear()

const object = {
    name : 'Alex',
    age : 28,
   
}

localStorage.setItem('person',JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)

raw.name = 'Alex'

// console.log(person)

window.addEventListener('storage', event =>{
 console.log(event)
})
