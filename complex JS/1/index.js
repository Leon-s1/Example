// const person = {
//   name: 'Maxim',
//   age: 26,
//   greet: function() {
//     console.log('greet');
//   }
// }

person = new Object({
  name: 'Maxim',
  age: 26,
  greet: function() {
    console.log('greet');
  }
})

Object.prototype.sayHello = function() {
  console.log('Hello!');
}
//объект person является прототипом для объекта lena
const lena = Object.create(person)

const str = new String('I am string')
