// let a = 42
// let b = a
// b++
// console.log('a', a);
// console.log('b', b);

//Вычисляемые типы данных, Массивы
let a = [1, 2, 3]
// let b = a.concat()          //присвоили ссылку на массив а и объединили в новый массив
let b = a          //присвоили ссылку на массив а 
b.push(4)           //положили в массив а, т.к. ссылка на массив

let c = [1, 2, 3, 4]    //новый массив

console.log('a', a);
console.log('b', b);

console.log(a === b);   //true одинаковые объекты
console.log(a === c);   //false разные объекты