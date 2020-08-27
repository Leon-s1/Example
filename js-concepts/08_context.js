const person = {
    surname: 'Старк',
    knows: function(what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
    }
}
const john = {surname: 'Сноу'}

person.knows('всё', 'Бран')
person.knows.call(john, 'ничего не', 'Джон')
person.knows.apply(john, ['ничего не', 'Джон'])
person.knows.call(john, ...['ничего не', 'Джон'])
person.knows.bind(john, ...['ничего не', 'Джон'])()
const bound = person.knows.bind(john, ...['ничего не', 'Джон'])
bound()
