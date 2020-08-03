// function* strGenerator() {
//   yield 'H'
//   yield 'E'
//   yield 'L'
//   yield 'L'
//   yield 'O'
// }
//
// const str = strGenerator()

// function* numberGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }
//
// const num = numberGen(7)

const iterator = {
  // gen(n = 10) {
  [Symbol.iterator](n = 10) {  //добавляем спец. символ [Symbol.iterator],
    let i = 0
    return {
      next() {
        if (i < n) {
          return {value: ++i, done: false}
        }
        return {value: undefined, done: true}
      }
    }
  }
}

// for (let k of 'hello') {
//   console.log(k)
// }
// for (let k of [1, 1, 2, 3, 5, 8, 13]) {
//   console.log(k)
// }
// for (let k of iterator) { спец символ [Symbol.iterator] добавили, цикл работает
//   console.log(k)
// }

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

for (let k of iter(6)) {
  console.log(k)
}
