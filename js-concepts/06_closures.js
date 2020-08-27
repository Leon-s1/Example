// function sayHello(name) {
//     const message = 'Hello ' + name
    
//     return function() {     //функция внутри функции sayHello
//         console.log(message);
//     }
// }

// const helloToElena = sayHello('Elena')
// const helloToIgor = sayHello('Igor')
// console.log(helloToElena);
// helloToElena()
// helloToIgor()

// function createFrameworkManager() {
//     const fw = ['Angular', 'React']

//     return {
//         print: function() {
//             console.log(fw);
//         },
//         add: function (framework) {
//             fw.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()
// console.log(manager);

// console.log(fw);        //ошибка
// manager.print()
// manager.add('VueJS')
// manager.print()

//*********************************************************** */
///setTimeout
const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
    setTimeout(() => {
        console.log(`fib[${i}] = ${fib[i]}`); //результат undefined
    }, 1500);
}
//**************************************************** */
//два решения
//1 способ var меняем на let
//let существует внутри блочного скоупа {} ES6 синтаксис
for (let i = 0; i < fib.length; i++) {
    setTimeout(() => {
        console.log(`fib[${i}] = ${fib[i]}`); //результат итерация
    }, 1500);
}
//2 способ - замыкания

for (var i = 0; i < fib.length; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`); //результат итерация
        }, 1500);        
    })(i)

}