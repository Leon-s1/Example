function myFunction() {
  let x = document.getElementById('myDiv');

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

/*Перебор в цикле по кнопкам Closebtn и при нажатии скрываем блок div, наш alert.*/
let close = document.getElementsByClassName('closebtn');

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = '0';
    setTimeout (function() {
      div.style.display = 'none';
    }, 600);
  }
}
