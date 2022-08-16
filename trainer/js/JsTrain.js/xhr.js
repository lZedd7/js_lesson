// const requestUrl = 'https://jsonplaceholder.typicode.com/users'




// function sendRequest(method, url, body = null){
//     return new Promise((resolve, reject) =>{

//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', requestUrl)

//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')
        
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject.error(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
            
//         }
//         xhr.onerror = () => {
//             reject.log(xhr.response)
//         }
//         xhr.send(JSON.stringify(body))
//     })

// }
// sendRequest('GET', requestUrl)
//                                 .then(data => console.log(data))
//                                 .catch(err => console.log(err))

// const body = {
//     name : 'Alex',
//     age : 26
// }

// sendRequest('POST', requestUrl, body )
//                                 .then(data => console.log(data))
//                                 .catch(err => console.log(err))




