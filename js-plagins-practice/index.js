const fruits = [
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
      <a href="#" class="btn btn-primary" data-btn="price">Посмотреть цену</a>
      <a href="#" class="btn btn-danger">Удалить</a>
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
  {text: 'Закрыть ', type: 'primary', handler() {
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

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  if (btnType==='price') {
    console.log('price')
    priceModal.open()
  }
})
