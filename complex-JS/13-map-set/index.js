const people = [
  {name: 'Владилен', age: 25, budget: 40000},
  {name: 'Елена', age: 17, budget: 3400},
  {name: 'Игорь', age: 49, budget: 50000},
  {name: 'Михаил', age: 15, budget: 1800},
  {name: 'Василиса', age: 24, budget: 25000},
  {name: 'Виктория', age: 38, budget: 2300},
]

//массив объектов
//итерация в привычной форме
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// for (let person of people) {
//   console.log(person)
// }

//Метод forEach()
// people.forEach(function(person, index, pArr) {
//   console.log(person)
//   console.log(index)
//   console.log(pArr)
//
// })
//сокращенная запись
// people.forEach(function(person) {
//   console.log(person)
// })

//Использование ES6 синтаксиса, => стрелочная функция
// people.forEach(person => console.log(person))

//Метод Map
// const newPeople = people.map(person => {
//   return person
// })
// console.log(newPeople)

//Вернуть имена объекта
// const newPeople = people.map(person => {
//   return person.name
// })
// console.log(newPeople)

//Вернуть имена объекта и возраст
//Если возвращаемое значение состоит из одной строчки
//то фигурные скобки можно убрать

//Метод Filter
//реализцация цикла без метода Filter
//поиск сотрудников возраст > 18
// const adults = []
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i])
//   }
// }
// console.log(adults)

//другая запись при помощи метода Filter
// const adults = people.filter(person => {
//   if (person.age >= 18) {
//     return true
//   }
// })
// console.log(adults)
//сокращенная запись при помощи метода Filter и стрелочной функции
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

// Reduce
//реализцация цикла без метода Reduce
//сумма бюджета всех сотрудников
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
//   }
// console.log(amount)

//реализцация цикла при помощи метода Reduce
// const amount = people.reduce((total, person) => {
//   return total + person.budget
// }, 0)
// console.log(amount)
//упрощенная запись стрелочная функция
// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

//Метод Find
// const igor = people.find(person => person.name === 'Игорь')
// console.log(igor)

//FindIndex
// const igorIndex = people.findIndex(person => person.name === 'Игорь')
// console.log(igorIndex)

//*************************************************
//практика
const newPeople = people
.filter(person => person.budget > 3000)
.map(person => {
  return {
    info: `${person.name} ${person.age}`,
    budget: person.budget
  }
})
console.log(newPeople);
// практика посчитать суммарный бюджет при помощи метода reduce
const amount = people
.filter(person => person.budget > 3000)
.map(person => {
  return {
    info: `${person.name} ${person.age}`,
    budget: person.budget
  }
})
.reduce((total, person) => total + person.budget, 0)
console.log(amount)
