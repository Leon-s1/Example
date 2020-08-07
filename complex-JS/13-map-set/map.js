//данная запись является объектом
const obj = {
  name: 'Vladilen',
  age: 26,
  job: 'Fullstack'
}
//данная запись является объектом в виде массива
const entries = [
  ['name', 'Vladilen'],
  ['age', 26],
  ['job', 'Fullstack']
]

//console.log(Object.entries(obj))
//console.log(Object.fromEntries(entries))

const map = new Map(entries) //создаем переменную данных map (объект) через конструктор new класса Map 


//console.log(map.get('job')) //записи одинаковые
//console.log(obj.job) //записи одинаковые
map
  .set('newField', 42)
  .set(obj, 'Value of object')
  .set(NaN, 'NaN ??')
  

  // console.log(map);
  // console.log(map.get(obj));
  // console.log(map.get(NaN));

  //пример, хотим удалить поле job из 
  //карты map

// map.delete('job')
// console.log(map.has('job'));
// console.log(map.size);
// map.clear()
// console.log(map.size)
//***************************************************** */
// for (let entry of map.entries()) {
//   console.log(entry);
// }
//сокращенная запись
// for (let [key, value] of map) {
//   console.log(key, value);
// }
// итерация по значениям
// for (let val of map.values()) {
//   console.log(val);
// }
// итерация по ключам
// for (let key of map.keys()) {
//   console.log(key);
// }

//цикл foreach для map
// map.forEach((val, key, m) => {
//   console.log(val, key);
// })
//********************************************************* */
//создание массива из карты разными способами
// const array = [...map]
// console.log(array)

// const array = Array.from(map)
// console.log(array)

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);
//***************************************************** */

 const users = [
   {name: 'Elena'},
   {name: 'Alex'},
   {name: 'Irina'}
 ]

 const visits = new Map()

 visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))

  function lastVisit(user) {
    return visits.get(user)
  }

  console.log(lastVisit(users[2]));