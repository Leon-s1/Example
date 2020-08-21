// console.log(sum(1, 41));

// function sum(a, b) {
//     return a + b
// }

// console.log(i); //undefined
// var i = 42
// console.log(i); //42

// console.log(num); //ошибка
// let num = 42
// console.log(num); 

//Function Expression & Function Declaration
//Function Declaration декларативный подход
//функцию вызывать можно в любом месте программы
// console.log(square(25)); 

// function square(num) {
//     return num ** 2
// }
//Function Expression экспрессионный подход, 
//функцию вызываем только после объявления в программе
var square = function(num) {
    return num ** 2
}
console.log(square(25)); 