console.log('Request data...')

// setTimeout(() => {
//   console.log('Preparing data...')
//
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//
//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData)
// }, 2000)
// })
//****************************************************
//   p.then((data) => {
//   // console.log('Promise resolved', data)
//   // const p2 = new Promise ((resolve, reject) => {
//   return new Promise ((resolve, reject) => { //вместо переменной можно вернуть промис
//     setTimeout(() => {
//       data.modified = true
//       resolve(data) //успешный промис
//       // reject(data) //промис с ошибкой
//       // console.log('Data received', backendData)
//     }, 2000)
//   })
//     // p2.then(clientData => {
//     //   console.log('Promise resolved', clientData)
//     // })
//   })
//
//     .then(clientData => {
//     // console.log('Promise resolved', clientData)
//     //можно передавать модификации над данными
//       clientData.fromPromise = true
//       return clientData
//   })
//     .then(data => {
//       console.log('Modified', data)
//   })
//     .catch(err => {console.error('Error: ', err)})
    // .finally(() => console.log('Finally.'))
//******************************************************

//функция sleep()
const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}


Promise.all([sleep(2000), sleep(5000)])
.then(() => {
  console.log('All promises')
})

Promise.race([sleep(5000), sleep(2000)])
.then(() => {
  console.log('Race promises')
})
