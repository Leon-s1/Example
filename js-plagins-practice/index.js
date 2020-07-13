let fruits = [
  {id: 1, title: 'Манго', price: 20, img: 'https://e0.edimdoma.ru/data/ingredients/0000/1089/1089-ed4_small.jpg?1482770262'},
  {id: 2, title: 'Апельсины', price: 30, img: 'https://e3.edimdoma.ru/data/ingredients/0000/8813/8813-ed4_small.jpg?1482763602'},
  {id: 3, title: 'Гранат', price: 40, img: 'https://e1.edimdoma.ru/data/ingredients/0000/8722/8722-ed4_small.jpg?1482763618'}
]
// Динамически на основе массива вывести список карточек
const toHTML = fruit => `
<div class="col">
  <div class="card">
    <img src="${fruit.img}" class="card-img-top" style="height: 300px" alt="${fruit.title}">
    <div class="card-body">
      <h5 class="card-title">${fruit.title}</h5>
      <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
      <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
    </div>
  </div>
</div>
`


function render() {
  // const html = fruits.map(fruit => toHTML(fruit)) упрощенное написание ниже строкой
  const html = fruits.map(toHTML).join('')
  document.querySelector('#fruits').innerHTML = html
}
render()

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,
  // content:`
  // <p>Lorem ipsum dolor sit amet</p>
  // <p>Lorem ipsum dolor sit amet</p>
  // `,
  width: '400px',
  footerButtons: [
  {text: 'Закрыть', type: 'primary', handler() {
    // console.log('Primary btn clicked')
    priceModal.close()
  }}
  // ,
  // {text: 'Cancel', type: 'danger', handler() {
  //   console.log('Danger btn clicked')
  //   modal.close()
  // }}
  ]
})
//Вместо модального окна confirmModal делаем новый плагин confirm.js
// const confirmModal = $.modal({
//   title: 'Вы уверены?',
//   closable: true,
//   width: '400px',
//   footerButtons: [
//   {text: 'Отменить', type: 'secondary', handler() {
//     // console.log('Primary btn clicked')
//     confirmModal.close()
//     }},
//   {text: 'Удалить', type: 'danger', handler() {
//     // console.log('Primary btn clicked')
//     confirmModal.close()
//     }}
//   ]
// })

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id  //чтобы перевести строку в число, ставим +
  const fruit = fruits.find(f => f.id === id) //определение фрукта при помощи метода find

  if (btnType==='price') {
    priceModal.setContent(`
      <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
      `)
    priceModal.open()
  } else {
    if (btnType==='remove') {
      $.confirm({
        title: 'Вы уверены?',
        content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
      }).then(() => {
        fruits = fruits.filter( f => f.id !== id)
        render()
      }).catch(() => {
        console.log('Cancel')
      })
//также удаляем для создания нового плагина
      // confirmModal.setContent(`
      // <p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>
      // `)
      // confirmModal.open()
    }
  }
})
