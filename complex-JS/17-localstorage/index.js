function calcValues(a, b) {
  return [
    a + b,
    a - b, //undefined
    a * b,
    a / b
  ]
}

//console.log(calcValues(42, 10));
// const result = (calcValues(42, 10));
// const sum = result[0] //много кода
// const sub = result[1] //много кода

//*********************************** */
// выполняем деструктуризацию
// const [sum, sub] = result
//************************************* */
//переменную result отдельно можно не создавать
//можно деструктуризацию сразу записать так
// const [sum, sub] = (calcValues(42, 10));

// console.log(sum, sub);
//********************************************************* */
const [sum, sub = 'Вычитания нет', mult, ...other] = (calcValues(42, 10));

// console.log(sum, mult, other, sub); //выводи результат по индексу 1 и 3

//**************************************************** */
//Декструктуризация с Объектами
const person = {
  name: 'Max',
  age: '20',
  adress: {
    country: 'Russia',
    city: 'Moscow'
  }
}
// const name = person.name
const {
  name: firstName = 'Без имени',  //новая переменная firstName типа name
  age,
  car = 'Машины нет',  //значение по умолчанию если нет переменной
  adress: {city: homeTown, country} //деструктуризация поля adress
} = person
// console.log(firstName, age, car, adress);
// console.log(firstName, age, car, homeTown, country);  

//*************************************************** */
//Применение оператора ...rest
// const {name, ...info} = person
// console.log(name, info);

//***************************************************** */
//Применение на практике стандартный способ
// function logPerson(per) {
//   console.log(per.name + ' ' + per.age);
// }
// logPerson(person)

//Способ с дуструктуризацией
// Такой подход часто используют на Реакт
function logPerson({name, age}) {
  console.log(name + ' ' + age);
}
logPerson(person)

