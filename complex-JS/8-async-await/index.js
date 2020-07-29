const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

// delay(2000).then(() => console.log('After 2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos () {
//   console.log('Fetch started...')
//   return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }
//
// fetchTodos()
//   .then(data => {
//     console.log('Data', data)
//   })
//   .catch(e => console.error(e))

//тот же код только написан при помощи операторов async await
async function fetchAsyncTodos() {
  console.log('Fetch started...')
  try {
    await delay(2000)                   //запускаем метод delay() он возвращает промис
    const response = await fetch(url)   //запускаем метод fetch() он возвращает данные по русурсу url
    const data = await response.json()  //запускаем метод response.json() – декодирует ответ в формате JSON
    console.log('Data', data)
  }
  catch (e) {
    console.error(e);
  }
  finally {  //блок файнали выполниться в любом случае

  }
}

fetchAsyncTodos()
