// const obj = {
//     name : 'Alex',
//     age : 28,
//     job : 'FrontEnd'
// }
// const entries = [
//     ['name'],['Alex'],
//     ['age'],['28'],
//     ['job'],['FrontEnd'],
// ]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

// const map = new Map(entries)

// map.set('newField', 42)
// map.set(obj,'value of object')
// map.delete('key')

// console.log(map.has('job'))
// console.log(map.size)

// for ( let val of map.values()) {
// console.log(val)
// }

// for ( let key of map.keys()) {
//     console.log(key)
//     }

    // map.forEach((val,key,m) =>{
    //     console.log(val,key)
    // })

    // const array = Array.from(map)

    // const mapObj = Object.fromEntries(map.entries())
    // console.log(mapObj)

    // const users = [
    //     {name : 'Alex'},
    //     {name : 'Bob'},
    //     {name : 'Jack'},
    // ]

    // const visits = new Map()

    // visits.set(users[0], new Date())
    // visits.set(users[1], new Date( new Date().getTime()+1000*60))
    // visits.set(users[2], new Date( new Date().getTime()+5000*60))

    // function lastVisit(user) {
    //     return visits.get(user)
    // }

    // console.log(lastVisit(users[1]))

// const set = new Set([1,2,3,4,4,5,5,5,6,7,8,9,10])

// set.add(11).add(20).add(20)

// console.log(set)
// console.log(set.has(20))
// console.log(set.size)

// function uniqValues(array){
//     return Array.from (new Set(array))
// }
// console.log(uniqValues([1,1,2,2,2,3,3,3,4,4,4,4,5,6,6]))

let obj = {name : 'weakmap'}

// const arr = [obj]

// obj = null

// console.log(obj)

// const map = new WeakMap([[obj, 'obj data']])

// obj = null
// console.log(map.has([obj]))

// const cache = new WeakMap()

// function cacheUser(user){
//     if(!cache.has(user){
//         cache.set(user, Date.now())
//     }
//     return cache.get(user)
// } 

// let bob = {name : 'Bob'}
// let alex = {name : 'Alex'}

// cacheUser(bob)
// cacheUser(alex)

// console.log(cache.has(bob))
// console.log(cache
    


    const users = [
            {name : 'Alex'},
            {name : 'Bob'},
            {name : 'Jack'},
        ]
const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.splice(1,1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))