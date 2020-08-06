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
console.log(map.has('job'));
console.log(map.size);
