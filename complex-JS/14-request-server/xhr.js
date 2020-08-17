const requestURL = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()  //создали объект xhr через конструктор глобального класса xmlhttprequest

// xhr.open('GET', requestURL)

// xhr.responseType = 'json' //второй вариант перевода в формат JSON через метод responseType 

// xhr.onload = () => {
//   // console.log(JSON.parse(xhr.response));  //первый вариант перевода переводим строку JSON в объект
//   if (xhr.status >= 400) {    //более универсальная обработка ошибок по статусам. коды свыше 400 это ошибки 
//     console.error(xhr.response);
//   } else {
//     console.log(xhr.response);
//   }
// }

// xhr.onerror = () => {
//   console.log(xhr.response);
// }

// xhr.send()

//создадим метод sendRequest и добавим в него код выше

function sendRequest(method, url, body = null) {
  return new Promise ( (resolve, reject)=> {
    const xhr = new XMLHttpRequest()  //создали объект xhr через конструктор глобального класса xmlhttprequest

    xhr.open(method, url)

    xhr.responseType = 'json' //второй вариант перевода в формат JSON через метод responseType 
    xhr.setRequestHeader('Content-Type', 'application/json')
    
    xhr.onload = () => {
      // console.log(JSON.parse(xhr.response));  //первый вариант перевода переводим строку JSON в объект
      if (xhr.status >= 400) {    //более универсальная обработка ошибок по статусам. коды свыше 400 это ошибки 
      reject(xhr.response);
      } else {
      resolve(xhr.response);
      }
    }

    xhr.onerror = () => {
      reject(xhr.response);
    }

    xhr.send(JSON.stringify(body)) //преобразования элементарных значений, объектов, или массивов в строку в формате JSON
  })
}
// // реализация методом GET  
// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

//реализация методом POST
const body = {
  name: 'Vladilen',
  age: 26
}

  sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))