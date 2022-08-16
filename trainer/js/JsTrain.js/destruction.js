function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}
const [sum,sub= ' no Sub', mult, ...other] = (calcValues(42, 10))

// const [sum, sub] = result

// console.log(sum , sub, mult, other)

// Object

const person ={
    name : 'Alex',
    age : 28,
    address : {
        country : 'UA',
        city : 'Dnipro'
    }
}

// const { name: firstName,
//          age, 
//         car = 'Haven`t car',
//         address : {
//             city: homeTown, country
//         }
//     } = person
// console.log(name , age, car, homeTown, country)

    // const { name, ...info} = person

    // console.log(name, info)

    // function logPerson ({name: firstName = 'Bob', age}) {
    //     console.log(firstName + ' ' +age)
    // }

    // logPerson(person)

