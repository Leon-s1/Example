function Cat (color, name) {    //класс Cat 
    this.color = color,
    this.name = name       
}

// const cat = new Cat('black', 'КОТ');
// console.log(cat);

// function myNew (constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
// }

// const cat = myNew(Cat, 'black', 'КОТ')
// console.log(cat);

 const cat = Cat() //ошибка undefine
 const cat = new Cat() //результат