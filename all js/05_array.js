// Массивы
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//   {name: 'Ivan', budget: 4200},
//   {name: 'Petr', budget: 3500},
//   {name: 'Vika', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]
// console.log(cars)
//function
function addItemToEnd() {

}

//Method
// cars.push('Рено')//Добавить элемент в конец массива
// console.log(cars)
//
// cars.unshift('Волга') //Добавить в начало массива элемент
// console.log(cars)
//
// const firstCar = cars.shift() //Удалить элемент из начала массива
// console.log(firstCar)
// const lastCar = cars.pop() //Удалить элемент из конца массива
// console.log(lastCar)
//
// console.log(cars)
//
// console.log(cars.reverse())
// console.log(cars)

// const index = (cars.indexOf('БМВ'))
// console.log(cars[index])

// const index = (cars.indexOf('БМВ'))
// cars[index] = 'Порше' //Замена БМВ на Порше
// console.log(cars)

// Массив объектов people

// const index = people.findIndex(function(person) { //выводит индекс персоны по условию - бюджет 3500
//   return person.budget === 3500
// })
// console.log(index)
// console.log(people[index])
//
// const person = people.find(function(person) { //выводит объект ФИО по условию - бюджет 3500
//   return person.budget === 3500
// })
// console.log(person)


// Перепишем конструкцию выше со стрелочной функцией
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// Цикл for of
// let findedPerson
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }
// console.log(findedPerson)

// метод includes
// console.log(cars.includes('Мазда'))

        //Методы высокого порядка
// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })
// const pow2fib = fib.map(num => num ** 2)
// console.log(pow2fib)
// console.log(upperCaseCars)
// console.log(cars)
//
// //Декларативный варинат записи pow2fib
// const pow2 = num => num ** 2  //функция
// const pow2Fib = fib.map(pow2) //pow2 функцию не вызываем а передаем через pow2
// const pow2FibSqrt = fib.map(pow2).map(Math.sqrt) //из нового массива fib.map(pow2) извлекаем обратно квадратный корень чз метод map
// console.log(pow2Fib)
// console.log(pow2FibSqrt)

//Фильтрация массива
const pow2 = num => num ** 2  //функция
const pow2Fib = fib.map(pow2) //pow2 функцию не вызываем а передаем через pow2
const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// Функция reduce
const people = [
  {name: 'Ivan', budget: 4200},
  {name: 'Petr', budget: 3500},
  {name: 'Vika', budget: 1700}
]
const allBudget = people.
  filter(person => person.budget > 2000).  //Чейнинг - метод в методе
  reduce((acc, person) => {
  /*if (person.budget > 2000) {*/ //неправильно с точки зрения продвинутого программирования.
    acc += person.budget   /*}*/
    return acc
  }, 0)
console.log(allBudget);


// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
//
