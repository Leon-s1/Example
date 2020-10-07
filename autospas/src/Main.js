const log = 'Main.JS загружен - из файла Main.js'

const element = document.createElement('div')

element.innerHTML = log

document.body.appendChild(element);

console.log('Log в консоль из файла Main.js ', log);
