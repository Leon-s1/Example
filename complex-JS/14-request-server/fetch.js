const requestURL = 'https://jsonplaceholder.typicode.com/users'


//создадим метод sendRequest и добавим в него код выше
//****************************************************** */
// function sendRequest(method, url, body = null) {
//     return fetch(url).then(response => {
//       //  return response.text() один вариант получения объектов юзеров
//         return response.json()
//     }) 
// }
// реализация методом GET  
// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//***************************************************** */


//реализация методом POST
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
      //  return response.text() один вариант получения объектов юзеров
      if (response.ok) {  
        return response.json()
      }
      return response.json().then(error => {
          const e = new Error('Что-то пошло не так')
          e.data = error
          throw e
      })  
    }) 
}


const body = {
  name: 'Vladilen',
  age: 26
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))