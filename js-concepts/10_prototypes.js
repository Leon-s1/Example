//__proto__ ES6 синтаксис
//Object.getPrototypeOf()   ES5 синтаксис

function Cat(name, color) {     //класс на ES5 синтаксисе
    this.name = name
    this.color = color
}

Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says Myay`)
}
    const cat = new Cat('Kot', 'white')

//     cat.voice()

//    console.log(Cat.prototype); 
//    console.log(cat); 
//    console.log(cat.__proto__ === Cat.prototype); 
//    console.log(cat.constructor); 

   //**************************************************** */

   function Person() {
       Person.prototype.legs = 2
       Person.prototype.skin = 'white'
   }

   const person = new Person()
   person.name = 'Vladilen'

//    console.log('skin' in person);   //true
//    console.log(person.legs);        //2
//    console.log(person.eyes);        //udefined
//    console.log(person.name);        //Vladilen

// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin'));
//**************************************************** */

//Object.create
const proto = {year: 2019}
const myYear = Object.create(proto)

console.log(myYear.year);
proto.year = 2200
console.log(myYear.year);

// console.log(myYear.hasOwnProperty('year'));
// console.log(myYear.__proto__ === proto);