const requestURL = 'https://jsonplaceholder.typicode.com/users'


//создадим метод sendRequest и добавим в него код выше

function sendRequest(method, url, body = null) {
 
}
// реализация методом GET  
sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))

//реализация методом POST
const body = {
  name: 'Vladilen',
  age: 26
}

// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))