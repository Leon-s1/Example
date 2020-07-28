const person = Object.create(
  {// 1 параметр который передаем в функцию Object.create
   // в данном объекте мы можем указывать прототип нового созданного объекта person
    calculateAge() {
      console.log('Age: ', new Date().getFullYear() - this.birthYear);
    }
  },
  {
  name: {
    value: 'Vladilen',
    enumerable: true, //атрибут показывает, отображается ли данное value при перечислении в цикле
    writable: true, //атрибут показывает, возможно ли перезаписить значение value в объекте name
    configurable: true //параметр показывает, что возможно удалить ключ name из объекта perosn
    },
  birthYear: {
    value: 1993,
    enumerable: false,
    writable: false,
    configurable: false
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear
    },
    set(value) {
      document.body.style.background = 'red'
      console.log('Set age ', value);
    }
  }
  }
)

// person.name = 'Maxim' //изменили значение value объекта name

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('key', key, person[key])
  }
}
