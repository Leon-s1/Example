let obj = {name: 'weakmap'} //создали объект

// const arr = [obj]   //записали объект в массив

// obj = null  //обнулили объект. он больше не используется

// console.log(arr[0]);    //вывели объект в массиве
// console.log(obj);       //вывели значение объекта

// const map = new WeakMap([
//     [obj, 'obj Data']
// ])
// obj = null

// console.log(map.get(obj));
// console.log(map.has(obj));

//***************************************************************************** */
//Применение weakmap на практике

const cash = new WeakMap()

function cashUser(user) {
    if (!cash.has(user)) {
        cash.set(user, Date.now())
    }    
    return cash.get(user)
}

let lena = {name:'Elena'}
let alex = {name:'Alex'}

cashUser(lena)
cashUser(alex)
//не трогая кеш присвоили ссылке на объект lena = null

lena = null //т.к. ссылка обнулена, сборщик мусора удалил пользователя из кеша

console.log(cash.has(lena))
console.log(cash.has(alex))