//Практическое применение замыкания

function _createModal(options) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',`
        <div class="modal-overlay" data-close='true'>
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}" >
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Окно'}</span>
                    ${options.closable ? `<span class="modal-close" data-close='true'>&times;</span>` : ''}
                </div>
                <div class="modal-body" data-content>
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <button type="button" name="button">Ok</button>
                    <button type="button" name="button">Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}


$.modal = function(options) {
//Приватная переменная функция function _createModal внутри функции. Это и есть замыкание.
//Данная функция доступна внутри функции $.modal() = function(options)
// function _createModal() {
//
// }
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options) //$modal сама форма модального окна
  let closing = false
  let destroyed = false
//в переменной modal сгруппированы методы для модального окна open, close
    const modal = {
      open() {
        if (destroyed) {
          return console.log('Modal is destroyed!');
        }
        !closing && $modal.classList.add('open')
      },
      close() {
        closing = true
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        setTimeout(() => {
          $modal.classList.remove('hide')
          closing = false
        }, ANIMATION_SPEED)
      },
    }

  const listener = event => {
    if (event.target.dataset.close) {
        modal.close()
    }
  }
  $modal.addEventListener('click', listener)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click',listener)
      destroyed = true
    },
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html
    }
  })
}
