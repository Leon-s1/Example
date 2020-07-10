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
  }},
  {text: 'Cancel', type: 'danger', handler() {
    console.log('Danger btn clicked')
  }}
  ]
})
