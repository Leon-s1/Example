// const name = 'Сергей'
// const age = 40
//
// function getAge() {
//   return age
// }
//
// // const output = 'Привет меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// // const output1 = `Привет меня зовут ${name} и мой возраст ${getAge()} лет.`
// // const output2 = `Привет меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.` //Тернарное выражение
// // console.log(output)
// // console.log(output1)
// // console.log(output2)
//
// const output = `
//     <div> This is div </div>
//     <p>This is p</p>
// `
// console.log(output)
//
// const name = 'Сергей'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ге'))
// console.log(name.startsWith('се'))
// console.log(name.toLowerCase().startsWith('се'))
// console.log(name.startsWith('Се'))
// console.log(name.endsWith('ей'))
// console.log(name.repeat(3))
// const string = '       password       '
// console.log(string)
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age){
  if (age < 0) {
    age = 'Еще не родился'
  }
  // console.log(s, name, age)
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
  // return 'Info about Person'
}
const personName = 'Сергей'
const personName2 = 'Максим'
const personAge = 40
const personAge2 = -10
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)
