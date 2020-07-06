// alert(1)

// prompt ('Введите фамилию')

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars)
//
// // Создание массива через конструктор New в JS
// // const cars = new Array('Мазда', 'Мерседес', 'Форд')
// // console.log(cars)
//
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[3])
//
// cars[0] = 'Porsche'
// console.log(cars)
// // Расширяем массив до 4ех элементов
// // cars[4] = 'Мазда'
// // console.log(cars)
//
// cars[cars.length] = 'Мазда'
// console.log(cars)
//
// Циклы
// 11 Объекты
const person = {
  firstName: 'Sergey',
  lastName: 'Chuprov',
  year: 1979,
  languages: ['Ru', 'En', 'De'],
  hasWife: true,
  greet: function() {
    console.log('greeeet')
  }
}
console.log(person)
console.log(person.firstName)
console.log(person['lastName'])
const key='languages'
console.log(person[key])
// Добавить в объект новое свойство
person.isProgrammer=true
console.log(person)
person.greet()
