// const delay = (ms) => {
//   return new Promise((r) => setTimeout(() => r(), ms));
// };

// delay(2000).then(() => console.log("2 sec"));

// const url = "https://jsonplaceholder.typicode.com/todos";

// // function fetchTodos(){
// //     console.log('Fetch todo started....')
// //      return delay(2000)
// //      .then( () =>fetch(url))
// //      .then(response => response.json())
// // }

// // fetchTodos()
// // .then(data => {
// //     console.log('Data:0', data)
// // })
// // .catch(e => console.error(e))

// async function fetchAsyncTodos() {
//   console.log("Fetch todo started....");
// try {
//     await delay(2000);
//     const response = await fetch(url);
//     const data = await response.json();
  
//     console.log("Data:", data);
// } catch (e){
//     console.error(e)
// } finally {
    
// }
  
// }
// fetchAsyncTodos();



                                                          // XHR


// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url, body = null) {

//   return new Promise( (resolve, reject) => {

  
//   const xhr = new XMLHttpRequest()

//   xhr.open(method, url)
//   xhr.onload = () => {
//     if(xhr.status >= 400) {
//       reject(xhr.response)
//     } else {
//       resolve(xhr.response)
//     }
//     // console.log(JSON.parse( xhr.response))
//     xhr.responseType = 'json'
//     xhr.setRequestHeader('Content-Type', 'application/json')
//   }
//    xhr.onerror = () => {
//     reject(xhr.response)
//    }
//   xhr.send(JSON.stringify(body))
// })
// }

// sendRequest('GET' , requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// const body = {
//   name : 'Alex',
//   age : 28
// }

// sendRequest('POST' , requestURL, body)
// .then(data => console.log(data))
// .catch(err => console.log(err))



const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type' : 'application/json'
  }
 return fetch(url, {
  method : method,
  body : JSON.stringify(body),
  headers : headers
 }).then(response => {
  if(response.status.ok){
    return response.json()
  } else {
    return response.json().then(error => {
      const e = new Error('ERROR')
      e.data = error
      throw e
    })
  }
 
 })
}

 sendRequest('GET' , requestURL)
.then(data => console.log(data))
.catch(err => console.log(err))

const body = {
    name : 'Alex',
    age : 28
  }

  sendRequest('POST' , requestURL, body)
.then(data => console.log(data))
.catch(err => console.log(err))