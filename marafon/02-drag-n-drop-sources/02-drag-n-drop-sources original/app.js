const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  // console.log(placeholder)
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
  console.log('drag start', event.target)
  // console.log('drag start', this) второй вариант обращения к объекту
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
  console.log('drag end')
  // event.target.classList.remove('hold')
  // event.target.classList.remove('hide')
  // event.target.classList.remove('hold, hide')
  event.target.className = 'item'
}

function dragover(event) {
  event.preventDefault()
  // console.log('drag over')
}
function dragenter(event) {
  event.target.classList.add('hovered')
  console.log('drag enter')
}
function dragleave(event) {
  event.target.classList.remove('hovered')
  console.log('drag leave')
}
function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
  console.log('drag drop')
}
