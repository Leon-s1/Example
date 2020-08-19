const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3
} 
const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Praha: 3,
  Paris: 2
}  
  
//оператор spread

// console.log(...citiesRussia)
// console.log(...citiesEurope)

//клонирование массива в массив allCities
// const allCities = [...citiesRussia, ...citiesEurope]
// const allCities = citiesRussia.concat(citiesEurope)

// console.log(allCities)

// console.log({...citiesRussiaWithPopulation}) //оборачиваем в фигурные {} скобки
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation}) //оборачиваем в фигурные {} скобки
// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation}) //оборачиваем в фигурные {} скобки

//Practice
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17));
// console.log(Math.max(...numbers));//разворачиваем массив numbers при помощи оператора ...
// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))
// console.log(divs.forEach())
//********************************************************* */
//Оператор Rest
function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5, 6]
//Spred 
// console.log(sum(...numbers));

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...other] = numbers  //деструктуризация
// console.log(a, b, other); //остальные значения в переменной other

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia'
}

const {name, age, ...adress} = person

console.log(name, age, adress);