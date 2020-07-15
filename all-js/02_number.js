// 1 Number
// const num = 42
// const float = 45.05
// const pow = 10e3
//
// console.log(num, float, pow)
//
// console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2,53)-1)
// console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('Number.MAX_VALUE', Number.MAX_VALUE)
// console.log('Number.MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log('Number.Nan', Number.NaN) //Not a Number
// const wierd = 2 / undefined
// console.log(Number.isNaN(wierd))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
//
// console.log(Number.parseFloat(stringFloat))
// console.log(+parseFloat(stringFloat))

// 2 BigInt
// console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log(9007199254740991999999n - 900719925474099199999n)
// console.log(-9007199254740991999999n)
// console.log(-9007199254740991999999.12501n) //error

// console.log(10n - 4) //error
// console.log(parseInt(10n) - 4) //error
// console.log(10n - BigInt(4)) //error
 // 3 Math
 // console.log(Math.E)
 // console.log(Math.PI)
 //
 // console.log(Math.sqrt(9))
 // console.log(Math.pow(5,3))
 // console.log(Math.abs(-42))
 // console.log(Math.max(42,23,85,422))
 // console.log(Math.min(42,23,85,422))
 // console.log(Math.floor(4.9))
 // console.log(Math.ceil(4.9))
 // console.log(Math.round(4.9))
 // console.log(Math.trunc(4.9))
 // console.log(Math.random())
//4 Example
 function getRandomBetween(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
 }
console.log(getRandomBetween(10, 42))
