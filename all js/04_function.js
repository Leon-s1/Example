// 1 Функции

// greet('Лена')

//function declaration

// function greet(name) {
//   console.log('Привет - ', name)
// }
//
// //function expression

// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name)
// }
// // greet2('Лена')
// //
// // console.log(typeof greet)
// // console.dir(greet); //функция является объектом
//
// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() { //setTimeout
//   if (counter ===5) {
//     clearInterval(interval)   //clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрелочные функции
function greet(name) {
  console.log('Привет - ', name)
}

const arrow = (name) => {
  // console.log('Привет - ', name)
}

const arrow2 = name => console.log('Привет => ', name)
arrow2('Сергей')

const pow2 = num => num ** 2
// console.log('=> ', pow2(5))

//5 Параметры по умолчанию
const sum = (a, b) => a + b
// console.log(sum(41, 1)) //42

const sum1 = (a, b = 9) => a + b
// console.log(sum1(41)) //50

const sum2 = (a = 40, b = 2 * a) => a + b
// console.log(sum2()) //120

//функция rest для суммирования неограниченного количества чисел
function sumAll (...all) {
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}
const res = sumAll(1,2,3,4,5,6,7)
// console.log(res)

// 5 Замыкания
function createMember(name) {
  return function(lastName) {
    console.log(name + lastName)
  }
}
const logWithLastName = createMember('Сергей ')
console.log(logWithLastName('Чупров'))
console.log(logWithLastName('Иванов'))
