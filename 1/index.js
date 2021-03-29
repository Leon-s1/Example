let b = {}
let c

b.b = 8
console.log('b.b', b.b)
c = b
console.log('c = b', c)
c.b = 3
console.log('c.b', c.b)

console.log('b.b=', b.b)
console.log('c.b=', c.b)

console.log(1)
const a = new Promise((resolve, reject) => resolve(console.log(2)))
a.then((res) => console.log(3))
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
