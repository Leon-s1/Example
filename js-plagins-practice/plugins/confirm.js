$.confirm = function(options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      width: '400px',
      closable: false,
      onClose() {
        modal.destroy()
      },
      content: options.content,
      footerButtons: [
        {text: 'Отменить', type: 'secondary', handler() {
            modal.close()
            reject()
          }},
        {text: 'Удалить', type: 'danger', handler() {
            modal.close()
            resolve()
          }}
      ]
    })
    setTimeout(() => modal.open(), 100)
  })
}
