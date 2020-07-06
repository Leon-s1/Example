// alert('1') //одно и тоже
// window.alert('1')  //одно и тоже

// prompt('Как тебя зовут')
// confirm('Как тебя зовут')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] //данный метод относительно старый и медленный
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('h2')  // доступ по тегу h2
// const heading2 = document.querySelector('.h2-class')  //доступ по css классу .h2-class
// const heading2 = document.querySelector('#sub-hello')  //доступ по css классу .h2-class
// const heading2 = document.querySelector('h2')  //доступ по css классу .h2-class

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')

// console.log(heading2);
// console.dir(heading2);
// console.log(heading3);
console.log(h2List);

const heading3 = h2List[h2List.length - 1]
console.log(heading3)
// console.log(heading)
// console.dir(heading.id)  //hello
// console.dir(heading.textContent)  //Hello World!

// setTimeout(() => {
//   heading.textContent = 'Change from JavaScript'
//   heading.style.color = 'red'
//   heading.style.textAlign = 'center'
//   heading.style.backgroundColor = 'green'
//   heading.style.padding = '2rem'
// }, 1500)

//функция для изменения узла node в динамическом режиме через определенные промежутки времени
setTimeout(() => {
  addStylesTo(heading, 'JavaScript')
}, 1500)

setTimeout(() => {
  addStylesTo(heading3, 'Практикуйся', 'yellow')
}, 3000)

// setTimeout(() => {
//   addStylesTo(heading2.children[0], 'И всё получится!!!', 'blue', '2rem')
// }, 4500)
//еще один варинат передачи ссылки в функцию
const link = heading2.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})


setTimeout(() => {
  addStylesTo(link, 'И всё получится!!!', 'blue', '2rem')
}, 4500)


function addStylesTo (node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = 'green'
  node.style.padding = '2rem'
  node.style.width = '100%'
  node.style.display = 'block'

  // falsy: '', undefined, null, 0, false
  if (fontSize) {
  node.style.fontSize = fontSize
  }
}
//работа с событиями onclick. При нажатии на текст меняется цвет фона и текста*****************************************
heading.onclick = () => {
  console.log('click')
  if (heading.style.color === 'red') {
    heading.style.color = 'green'
    heading.style.backgroundColor = '#fff'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = 'green'
  }
}

//функция addEventListener
heading3.addEventListener('dblclick', () => {
  if (heading3.style.color === 'yellow') {
    heading3.style.color = 'green'
    heading3.style.backgroundColor = '#fff'
  } else {
    heading3.style.color = 'yellow'
    heading3.style.backgroundColor = 'green'
  }
})
//*************************************************************************
//some comments
