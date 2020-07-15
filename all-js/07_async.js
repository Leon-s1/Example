//Асинхронность
// концепт EVENT LOOP

// const timeout = setTimeout(() => {
//   console.log('After timout')
// }, 2500)
// clearTimeout(timeout) //очистка timeouta
//
// const interval = setInterval(() => {
//   console.log('After timout')
// }, 1000)
// clearInterval(interval) //очистка intervala

//Напишем свою функцию delay
// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait)
// }
// delay ( () => {
//   console.log('After 2 second');
// }, 2000)

//Promise   Промис это объект, который представляет собой асинхронный таск, который должен завершиться.
//пример метода resolve - успешное выполнение
// const delay = (wait = 1000) => {
//   const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//       resolve()
//     }, wait)
//   })
//   return promise
// }

// delay(2500) //ФУНКЦИЯ DELAY вернет promise
//   .then( () => {                                  //метод промиса
//     console.log('After 2 seconds')
//   })
//   .catch(err => console.Error(err))               //метод промиса
//   .finally( () => console.log('Finally'))         //метод промиса
//***************************************************************************************************************************
//пример метода reject - завершение выполнения промиса с ошибкой
const delay = (wait = 1000) => {
  const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      reject('Что то пошло не так. Повторите попытку.')
    }, wait)
  })
  return promise
}

// delay(2500) //ФУНКЦИЯ DELAY вернет promise
//   .then( () => {                                  //метод промиса
//     console.log('After 2 seconds')
//   })
//   .catch(err => console.error('Error ', err))     //метод промиса отлавливает ошибки
//   .finally( () => console.log('Finally'))         //метод промиса

const getData = () => new Promise(resolve => resolve([1,1,2,3,5,8,13]))
// getData().then(data => console.log(data))
//*************************************************************************************************************************
//Вариант работы с Promisom без методов .then .catch .finally и без коллбеков. С методом resolve
//Путем создания асинхронной функции async
// async function asyncExample() {
//   await delay(3000)
//   const data = await getData()
//   console.log('Data:', data);
// }
// asyncExample()

//Вариант работы с Promisom без методов .then .catch .finally и без коллбеков. С методом reject
//Путем создания асинхронной функции async
async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log('Data:', data)
  } catch(e) {
    console.log(e)
  } finally {
    console.log('Finally')
  }
}
asyncExample()
