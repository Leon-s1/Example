const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

set.add(10).add(20).add(30).add(20)
// console.log(set)
// console.log(set.has(30))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)

// console.log(set.values())
// console.log(set.keys())

//метод entries выдает массив, но ключ и значение дублируются
// console.log(set.entries());

// for (let key of set) {
//     console.log(key);
// }

//********************************************************************************************** */
//Как можно использовать Set. Практические примеры
function uniqValues(array) {
    // return [...new Set(array)]    
    // еще один вариант записи через метод Array.from
    return Array.from(new Set(array))
}
console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6]));