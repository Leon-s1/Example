function hello() {
  console.log('Hello', this);
}

const person = {
  name: 'Vladilen',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function(job, phone) {
    console.group(`${this.name} info`) //группировка объекта
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd()
  }
}
const lena = {
  name: 'Elena',
  age: 23
}
// person.logInfo('Frontend', '8-999-123-12-22')
//передача параметров с помощью метода bind
//1 СПОСОБ****************************************
// person.logInfo.bind(lena)('Frontend', '8-999-123-12-22')
const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-22') //можно передавать в метод bind через запятую
// fnLenaInfoLog('Frontend', '8-999-123-12-22') можно передавать параметры в саму функцию
// fnLenaInfoLog()
//2 СПОСОБ Методами call() applay()

// person.logInfo.call(lena, 'Frontend', '8-999-123-12-22') //метод call() вызывает функцию сразу

// person.logInfo.apply(lena, ['Frontend', '8-999-123-12-22']) //метод call() вызывает функцию сразу
//*****************************
const array = [1, 2, 3, 4, 5]

// function multBy (arr, n) {
//   return arr.map(function(i) {
//     return i*n
//   })
// }
// console.log(multBy(array, 5))

// вариант с прототипом.
Array.prototype.multBy = function(n) {
  return this.map(function(i) {
      return i*n
    })
}

console.log(array.multBy(2))
