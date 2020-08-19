const myNumber = 42
//получить данные из LocalStorage
// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'));
// //записать данные в LocalStorage
// localStorage.setItem('number', myNumber);

// console.log(localStorage.getItem('number'));

// localStorage.clear()

const object = {
  name: 'Max',
  age: 20
}

// localStorage.setItem('person', JSON.stringify(object)) //преобразование объекта в строку

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Vladilen'
// console.log(person);
// console.log(JSON.parse(raw));  преобразование строки в объект

//******************************************************* */
window.addEventListener('storage', event => {
  console.log(event);
})

// window.onstorage = () => {

// }