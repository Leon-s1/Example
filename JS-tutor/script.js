// alert ('Hello World!');

// var message;
// message='Hello';
// message='World';
// alert(message);

// alert('5'+2+3);

// var n=2;
// n+=2;
// n*=5;
// alert(n);

// Массивы урок 8 ***************************************************************
//
// var arr=["Хлеб","Молоко","Чай","Конфеты"];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);
// alert(arr[3]);
// arr[4]="Лимон";
// alert(arr[4]);
// alert(arr.length);
// alert(arr);
// var arr=[1,"Молоко",{name:'John'},true];

// Элементы в конец массива
// arr.pop();
// arr.push("Сарделька");

// Элементы в начало массива shift, unshift
// arr.shift();
// arr.unshift("Яблоки");
// alert(arr);

// функция для массива - удаление элементов массива
// function eat(arr){
//   arr.pop();
// }
// var arr=["Хлеб","Молоко","Чай","Конфеты","Сыр"];
// alert(arr.length);
// eat(arr);
// eat(arr);
// alert(arr.length);
// ***************************************************************************************************************************************

// Уроки JavaScript | #9 - Массивы: методы***************************************
// var names = 'Миша, Женя, Катя, Ира';
// var arr = names.split(', ');
// for (var i=0;i<arr.length;i++){
// alert('Вам сообщение'+arr[i]);
// }
// var str = "Катя";
// alert(str.split(''));

// Метод Join***********
// var arr=["Хлеб","Молоко","Чай","Конфеты","Сыр"];
// var str = arr.join(';');
// alert(str);

// alert(new Array(4).join("ха"));

// Метод splice
// var arr = ["Я", "иду", "домой",];
// // arr.splice(1,1);
// arr.splice(0,2,"Мы","идем")
// alert(arr);
// ********************************************************************************************************************************************

// Уроки JavaScript | #11 - Объекты**********************************************
// var myFriend = {
//   "name" : "Alex",
//   "legs" : 2,
//   "friends" : 50,
//   "the drink" : "water"
// };
// метод доступа к свойству объекта через точку
// nameOfFriend = myFriend.name;
// alert(nameOfFriend);
// метод доступа к свойству объекта через []
// nameOfFriend = myFriend["the drink"];
// alert(nameOfFriend);
//
// var testObj = {
//   10 : "kiril",
//   15 : "David",
//   25 : "Alex"
// };
// var playerNumber = 15;
// var player = testObj[playerNumber];
// alert(player);

// var myStorage = {
//     "car" : {
//         "inside" : {
//             "glove box" : "maps",
//             "passanger seat" : "crumbs"
//         },
//         "outside" : {
//             "trunk" : "Jack"
//         }
//     }
// };
// var gloveBoxContent = myStorage.car.inside["glove box"];
// alert(gloveBoxContent);
// ******************************************************************************************************************************************

// Уроки JavaScript | #12 - Перебор свойств объекта
// var menu = {
//   "width" : 400,
//   "height" : 200,
//   "title" : "menu"
// };
// for (var key in menu){
//   alert ("Ключ " + key + " Значение" + menu[key]);
// }
// ***************************************************************************************************************************************


// Уроки JavaScript | #13 - Метод. Дата и время********************************
// var now = new Date(2011,0,1,0,0,0,0);
// alert(now);
//
// var d = new Date(2011,1,28);
// d.setDate(d.getDate() + 2);
// alert(d);

// var d = new Date();
// d.setSeconds(d.getSeconds() + 70);
// alert(d);
// *****************************************************************************************************************************************

// Уроки JavaScript | #14 - Обработка событий***********************************
// Код пишем в файле index.html

// Уроки JavaScript | #15 - Как работать с DOM. Доступ к элементам вэб страницы
// Получение элемента по Id
// var element = document.getElementById('header');
// console.log(element);
// Получение элемента по названию тега
// var element = document.getElementsByTagName('');
// var element = document.getElementsByClassName('');
var divs = document.getElementsByTagName('div');
var links = document.getElementsByClassName('my-link');
console.log("collection of tag name " + divs);
console.log("collection of class name " + links);
