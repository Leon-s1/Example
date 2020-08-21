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

function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        print: function() {
            console.log(fw);
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
console.log(manager);

// console.log(fw);        //ошибка
manager.print()
manager.add('VueJS')
manager.print()
