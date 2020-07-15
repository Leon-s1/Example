const person = {
  name: 'Sergey',
  age: 40,
  isProgrammer: true,
  languages: ['en', 'ru', 'de'],
  // 'complex key': 'Complex Value',  //Сложные названия ключей. Можно использовать пробелы в кавычках.
  // ['key_' + (1+3)]: 'Computed Key',//вычисляемый ключ. можно конкатенировать со строкой в кавычках
  greet() {
    console.log('greet from person');
  },
  info() {
    console.info('Информация про человеке по имени ', person.name) //один вариант написания
    console.info('Информация про человеке по имени ', this.name) //рекомендуемый вариант написания
  }
}

// console.log(person.name);
// console.log(person.age);
// console.log(person['complex key']);
// console.log(person);
// person.greet()

//работа с объектом person. добавление, замена, удаление
// person.age++
// person.languages.push('by')
// person['key_4'] = undefined  //присвоили новое значение undefined переменной person['key_4']
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// Деструктуризация
// const name = person.name  //каждая переменная в отдельной переменной
// const age = person.age
// const languages = person.languages
// console.log(name, age, languages);

// const {name, age, languages} = person  //это и есть деструктуризация
// console.log(name, age, languages);

// помещаем значение переменной age в переменную personAge
// const {name, age: personAge, languages} = person  //это и есть деструктуризация
// console.log(name, personAge, languages);

//Итерация объектов. ВАЖНО. Объекты не итерируемы
// console.log(person);
// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//   console.log('key:', key)
//   console.log('value:', person[key])
//   }
// }

 //Глобальный объект Object
 // const keys = Object.keys(person)
 // console.log(keys);
          // Object.keys(person).keys.forEach((key) =>  другой вариант записи без создания const
// keys.forEach((key) => {
//   console.log('key:', key)
//   console.log('value:', person[key])
// });

//  Context Контекст
// person.info()
const logger = {
  // keys(obj) {  вариант передачи объекта через параметр obj
  //   console.log('Object keys: ', Object.keys(obj));
  keys() { // вариант передачи объекта через параметр this  - рекомендуется
    console.log('Object keys: ', Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach(key => {
        console.log(`"${key}": ${this[key]}`)
    });
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('-------Start-------')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`)
    if (between && index != array.length - 1) {
      console.log('--------------')
    }
  })
    if (bottom) {
      console.log('--------End--------')
    }
  }
}
logger.withParams.call(person, true, true,true)
logger.withParams.apply(person, [true, true,true])
// logger.keysAndValues.call(person)
// const bound = logger.keys.bind(person)    //метод binde создает новую функцию
// bound()

// logger.keys.call(person)
