const fruits = [
  {id: 1, title: 'Манго', price: 20, img: 'https://e0.edimdoma.ru/data/ingredients/0000/1089/1089-ed4_small.jpg?1482770262'},
  {id: 2, title: 'Апельсины', price: 30, img: 'https://e3.edimdoma.ru/data/ingredients/0000/8813/8813-ed4_small.jpg?1482763602'},
  {id: 3, title: 'Гранат', price: 40, img: 'https://e1.edimdoma.ru/data/ingredients/0000/8722/8722-ed4_small.jpg?1482763618'}
]


const modal = $.modal({
  title: 'Vladilen Modal',
  closable: true,
  content:`
  <p>Lorem ipsum dolor sit amet</p>
  <p>Lorem ipsum dolor sit amet</p>
  `,
  width: '400px',
  footerButtons: [
  {text: 'Ok', type: 'primary', handler() {
    console.log('Primary btn clicked')
    modal.close()
  }},
  {text: 'Cancel', type: 'danger', handler() {
    console.log('Danger btn clicked')
    modal.close()
  }}
  ]
})
