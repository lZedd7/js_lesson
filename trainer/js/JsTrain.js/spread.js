const citiesUkraine = ['Киев', 'Львов', 'Днепр','Харьков'];

const citiesEurope = ['Лондон', 'Варшава', 'Братислава','Прага'];

const citiesUkraineWithPopulation = {
    Kiev : 5,
    Lvov : 3,
    Dnepr : 2,
    Kharkov : 2
}

const citiesEuropeWithPopulation = {
    London : 9,
    Varshawa : 5,
    Bratislava : 1,
    Praga : 2

} 

                                                        // spread

// /console.log(citiesUkraine)

// const allCities = [...citiesUkraine, 'Вашингтон', ...citiesEurope]
// console.log(allCities)

// console.log({...citiesEuropeWithPopulation})
// console.log({...citiesEuropeWithPopulation, ...citiesUkraineWithPopulation})


// const numbers = [5,37,42,17]
// console.log(Math.max(5,37,42,17))
// console.log(Math.max(...numbers))

// const divs = document.querySelectorAll('div')

// const nodes = [...divs]
// console.log(nodes)





                                                                // Rest



    // function sum( a ,b, ...rest) {
      
    //     return a + b + rest.reduce((a, i) => a + i,0)
    // }

    // const numbers = [1,2,3,4,5]

    // console.log(sum(...numbers))

    // const [a,b, ... other] = numbers

    // console.log(a,b, other)

    const person = {
        name : 'Alex',
        age : 28,
        city : 'Dnipro',
        country : 'Ukraine'
    }

    const { name,age, ...address} = person

    console.log(name,age, address)

