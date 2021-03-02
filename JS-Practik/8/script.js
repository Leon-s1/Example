let slideIndex = 1
console.log('slideIndex ', slideIndex)
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
  console.log('plusSlides ', slideIndex)
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  // Получение массива элементов класса mySlides
  let slides = document.getElementsByClassName('mySlides')
  // Получение массива элементов класса dots
  let dots = document.getElementsByClassName('dot')
  console.log(slides)
  // присвоение индекса слайда после проверки условия
  if (n > slides.length) {
    slideIndex = 1
  }
  console.log('N ', n)
  console.log('slideIndex n>3 ', slideIndex)
  if (n < 1) {
    slideIndex = slides.length
  }
  console.log('slideIndex n<1 ', slideIndex)
  // скрытие неактивных слайдов
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  // замена активной точке класса active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '')
  }
  // отображение активной картинки
  // *************************************************************

  var slideIndex = 0
  showSlides()

  function showSlides() {
    let i
    let slides = document.getElementsByClassName('mySlides')
    let dots = document.getElementsByClassName('dot')

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
      dots[i].className = dots[i].className.replace(' active', '')
    }
    // ***************************************************************

    slideIndex++
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    // *************************************************************
    slides[slideIndex - 1].style.display = 'block'
    console.log('slides[slideIndex-1] ', slideIndex - 1)
    setTimeout(showSlides, 3000)
    dots[slideIndex - 1].className += ' active'
  }
}
