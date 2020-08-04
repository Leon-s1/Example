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
