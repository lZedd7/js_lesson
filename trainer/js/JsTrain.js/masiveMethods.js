const people = [
    {name :'Alex', age : 28, budget :10000},
    {name :'Bob', age : 20, budget :8800},
    {name :'Max', age : 24, budget :16000},
    {name :'Kate', age : 33, budget :4500},
    {name :'June', age : 23, budget :7700},
    {name :'Frank', age : 18, budget :4200},
]

// people.forEach((person =>{
//     console.log(person)}))


    // const newPeople = people.map(person => {
    //     return `${person.name} ${person.age}` 
    // })

    // const adults =people.filter(person =>{
    //     person.age >= 20
    // })
    // console.log(adults)

    // const amount = people.reduce((total,person) =>{
    //     return total + person.budget
    // },0)

//    const findAlex = people.find(person =>person.name === 'Alex')
//    console.log(findAlex)

// const findAlexIndex = people.findIndex(person => person.name === 'Alex')

const newPeople = people
.filter( person => person.budget >7000)
.map(person => {
    return {
        info: `${person.name} (${person.age})`,
        budget : person.budget
    }
})
.reduce((total,person)=> total + person.budget ,0)
console.log(newPeople)