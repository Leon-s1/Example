// const animal = {
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// }

class Animal {
static type = 'ANIMAL'

  constructor(options) {//инициализация начальных значений объекта animal данного класса Animal
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice() {   //родительский метод
    console.log('I am Animal')
  }
}
//Создание объекта animal класса Animal
// const animal = new Animal ({
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// })

//Наследование от класса ANIMAL
class Cat extends Animal {
static type = 'CAT'

constructor(options) {
  super(options) // метод super вызывает родительский конструктор
  this.color = options.color
  }
  voice() {
    super.voice()           //вызов родительского метода voice()
    console.log('I am Cat') //метод в дочернем классе перетирает родительский метод voice()
  }
  get ageInfo() {           //геттер не метод, это поле класса Cat
    return this.age * 7
  }
  set ageInfo(newAge) {
    this.age = newAge
  }
}
const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black'
})
