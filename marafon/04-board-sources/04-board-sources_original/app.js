const board = document.querySelector('#board')
const colors = [
  '#9aff24',
  '#ffea24',
  '#ff2400',
  '#18b3c3',
  '#24ff8f',
  '#7140e3',
  '#00ffff',
  '#24ffe9',
]
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  // square.addEventListener('mouseover', () => setColor(square)) 1ый вариант
  square.addEventListener('mouseover', setColor)

  // square.addEventListener('mouseleave', () => removeColor(square))  1ый вариант
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

// function setColor(element)  {  1ый вариант
//   const color = getRandomColor()
//   element.style.backgroundColor = colors
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }

// 2ой вариант бонус
function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = colors
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
// 1 ый метод
// function removeColor(element) {
//   element.style.backgroundColor = '#1d1d1d'
//   element.style.boxShadow = `0 0 10px #000`
// }

// 2ой метод бонус
function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 10px #000`
}

function getRandomColor() {
  // const index = Math.floor(Math.random() * colors.length)
  // return colors[index]

  return colors[Math.floor(Math.random() * colors.length)]
}
