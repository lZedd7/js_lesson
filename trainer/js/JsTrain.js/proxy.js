const person = {
name : 'Alex',
age : 28,
job : 'FrontEnd'
}

const op = new Proxy(person,{
    get (target, prop) {
        console.log('target', target)
        console.log('prop', prop)
        return target [prop]
    }
})

